import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.json();

        if(!formData.body) {
            return new NextResponse(
                JSON.stringify({ error: "Course selection is required"}),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
        }

        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("form");

        const result = await collection.insertOne(formData);

        return new NextResponse(
            JSON.stringify({
                success: true,
                message: "Form submitted successfully",
                id: result.insertedId,
            }),
            {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch(err) {
        console.error(err);

        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "An error occurred while submitting the form",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
    }
}

export async function GET(req, res) {
//     first commit
}

