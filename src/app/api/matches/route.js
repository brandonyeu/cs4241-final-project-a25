import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    const getDistance = function (inputVector, candidateVector) {
        return Math.sqrt(
            inputVector.reduce((sum, value, index) => sum + Math.pow(value - candidateVector[index], 2), 0)
        );
    }

    const getBestNMatches = function (inputVector, candidateVectors, n) {
        const distances = candidateVectors.map(candidateVector => getDistance(inputVector, candidateVector));
        const sortedDistances = distances.sort((a, b) => a - b);
        return sortedDistances.slice(0, n);
    }

    try {
        const {course, personality, priority, assignment, communicationStyle, noiseLevel, isOnline, timeOfDay, studyPace, breakStyle} = await req.json();

        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("form");

        const formsFromSameClass = await collection.find({course: course}).toArray();

        console.log(formsFromSameClass);

        return new NextResponse(JSON.stringify({success: true}), {
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