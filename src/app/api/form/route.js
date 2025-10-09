import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.json();

        if (!formData) {
            return NextResponse.json({ error: "Information is missing" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("form");

        const result = await collection.insertOne(formData);

        return NextResponse.json({
            success: true,
            message: "Form submitted successfully",
            id: result.insertedId,
        }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            success: false,
            message: "An error occurred while submitting the form",
        }, { status: 500 });
    }
}

export async function GET() {
    // Optional: implement fetching forms if needed
    return NextResponse.json({ message: "GET not implemented" });
}

export async function DELETE() {
    try {
        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("form");

        await collection.deleteMany({});
        return NextResponse.json({ message: "Forms deleted successfully" });
    } catch (err) {
        console.error(err);
    }
}