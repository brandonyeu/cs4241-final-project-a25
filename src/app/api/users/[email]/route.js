import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection("user").findOne({ email: params.email });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        delete user.password; // never send password
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
