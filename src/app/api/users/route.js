import clientPromise from "@/lib/db";
import {NextResponse} from "next/server";

export async function POST(req) {
    try {
        const formData = await req.json();

        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("form");

        if (collection.find({email: req.body.email}).count() > 0) {
            return new NextResponse(JSON.stringify({error: "Email already exists"}), {
                    status: 409,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
        }

        const result = await collection.insertOne(formData);

        return new NextResponse(JSON.stringify(
                {
                    success: true,
                    message: "Form submitted successfully",
                    id: result.insertedId,
                }),
            {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            });
    } catch (err) {
        console.error(err);
    }
}

export async function GET(req, res) {
}

export async function DELETE(req, res) {

}

export async function PUT(req, res) {

}