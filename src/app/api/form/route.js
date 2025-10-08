// import clientPromise from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         const formData = await req.json();

//         if(!formData) {
//             return new NextResponse(
//                 JSON.stringify({ error: "Information is missing"}),
//                 {
//                     status: 400,
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 });
//         }

//         const client = await clientPromise;
//         const db = client.db("studi");
//         const collection = db.collection("form");

//         const result = await collection.insertOne(formData);

//         return new NextResponse(
//             JSON.stringify({
//                 success: true,
//                 message: "Form submitted successfully",
//                 id: result.insertedId,
//             }),
//             {
//                 status: 201,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//     } catch(err) {
//         console.error(err);

//         return new NextResponse(
//             JSON.stringify({
//                 success: false,
//                 message: "An error occurred while submitting the form",
//             }),
//             {
//                 status: 500,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         )
//     }
// }

// export async function GET(req) {

// }

// import clientPromise from "@/lib/db";
// import { NextResponse } from "next/server";
// import { ObjectId } from "mongodb";

// export async function POST(req) {
//     try {
//         const formData = await req.json();

//         if (!formData || !formData.userId) {
//             return new NextResponse(
//                 JSON.stringify({ error: "Missing user ID or form data" }),
//                 {
//                     status: 400,
//                     headers: { "Content-Type": "application/json" },
//                 }
//             );
//         }

//         const client = await clientPromise;
//         const db = client.db("studi");

//         // validate userId exists in MongoDB
//         const user = await db
//             .collection("user")
//             .findOne({ _id: new ObjectId(formData.userId) });

//         if (!user) {
//             return new NextResponse(
//                 JSON.stringify({ error: "User not found. Please re-login." }),
//                 { status: 404, headers: { "Content-Type": "application/json" } }
//             );
//         }

//         // attach userId and timestamp
//         const fullFormData = {
//             ...formData,
//             userId: new ObjectId(formData.userId),
//             submittedAt: new Date(),
//         };

//         const result = await db.collection("form").insertOne(fullFormData);

//         return new NextResponse(
//             JSON.stringify({
//                 success: true,
//                 message: "Form submitted successfully",
//                 id: result.insertedId,
//             }),
//             {
//                 status: 201,
//                 headers: { "Content-Type": "application/json" },
//             }
//         );
//     } catch (err) {
//         console.error(err);

//         return new NextResponse(
//             JSON.stringify({
//                 success: false,
//                 message: "An error occurred while submitting the form",
//             }),
//             {
//                 status: 500,
//                 headers: { "Content-Type": "application/json" },
//             }
//         );
//     }
// }

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
