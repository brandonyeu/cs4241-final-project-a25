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

    const target = await req.json();
    console.log()

    try {
        const {
            course,
            personality,
            priority,
            assignment,
            communicationStyle,
            noiseLevel,
            isOnline,
            timeOfDay,
            studyPace,
            breakStyle,
            id,
        } = target;

        const inputVector = formDataToVector({
            course, personality, priority, assignment,
            communicationStyle, noiseLevel, isOnline,
            timeOfDay, studyPace, breakStyle
        });

        const client = await clientPromise;
        const db = client.db("studi");
        const formCollection = db.collection("form");

        const formsFromSameClass = await formCollection.find({course: course}).toArray();

        const candidateVectors = formsFromSameClass.map(form => ({
            form: form,
            vector: formDataToVector(form)
        }));

        // change n to however many matches you want to return
        const bestMatches = getBestNMatches(inputVector, candidateVectors, 10);

        const matchBatchCollection = db.collection("match_batch");
        await matchBatchCollection.insertOne({
            target: target,
            targetId: id,
            bestMatches: bestMatches,
            createdAt: new Date()
        });

        console.log("Match batch inserted");

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

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("studi");

        const { searchParams } = new URL(req.url);
        const target = searchParams.get('targetForm');

        if (!target) {
            return new NextResponse(JSON.stringify({
                success: false,
                error: "Target parameter required"
            }), { status: 400 });
        }

        const matchBatch = await db.collection("match_batch").findOne({ targetId: target }
        );

        console.log("matchBatch: ", matchBatch)

        return new NextResponse(
            JSON.stringify({
                success: true,
                matchBatch: matchBatch,
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
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