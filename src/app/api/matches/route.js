import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";
import formDataToVector from "@/utils/formDataToVector";

export async function POST(req) {
    const getDistance = function (inputVector, candidateVector) {
        return Math.sqrt(
            inputVector.reduce((sum, value, index) => sum + Math.pow(value - candidateVector[index], 2), 0)
        );
    }

    const getBestNMatches = function (inputVector, candidateVectors, n) {
        const distances = candidateVectors.map(candidate => ({
            form: candidate.form,
            distance: getDistance(inputVector, candidate.vector)
        }));
        const sortedMatches = distances.sort((a, b) => a.distance - b.distance);
        return sortedMatches.slice(0, n);
    }

    try {
        const {course, personality, priority, assignment, communicationStyle, noiseLevel, isOnline, timeOfDay, studyPace, breakStyle} = await req.json();

        const inputVector = formDataToVector({
            course, personality, priority, assignment,
            communicationStyle, noiseLevel, isOnline,
            timeOfDay, studyPace, breakStyle
        });

        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("form");

        const formsFromSameClass = await collection.find({course: course}).toArray();

        const candidateVectors = formsFromSameClass.map(form => ({
            form: form,
            vector: formDataToVector(form)
        }));

        // change n to however many matches you want to return
        const bestMatches = getBestNMatches(inputVector, candidateVectors, 5);

        console.log("Best matches:", bestMatches);

        return new NextResponse(JSON.stringify(
            {
                success: true,
                matches: bestMatches.map(match => ({
                    ...match.form,
                    matchScore: match.distance,
                }))
            }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch(err) {
        console.error(err);

        return new NextResponse(JSON.stringify({success: false}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
}