import clientPromise from "@/lib/db";
import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";

// test revert commit
export async function POST(req) {
    try {
        const formData = await req.json();

        const client = await clientPromise;
        const db = client.db("studi");
        const collection = db.collection("user");

        const existingUser = await collection.countDocuments({email: formData.email});

        if (existingUser > 0) {
            return new NextResponse(JSON.stringify({error: "Email already exists"}), {
                    status: 409,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
        }

        if (formData.password) {
            const salt = await bcrypt.genSalt(10);
            formData.password = await bcrypt.hash(formData.password, salt);
        }

        delete formData.confirmPassword;

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
        return new NextResponse(JSON.stringify({error: "Internal server error"}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function GET(req, res) {

}

export async function DELETE(req, res) {

}

export async function PUT(req, res) {

}