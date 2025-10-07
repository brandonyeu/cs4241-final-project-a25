// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/lib/mongodb";
// import { compare } from "bcrypt";

// const handler = NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: { label: "Username", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 const client = await clientPromise;
//                 const db = client.db();

//                 const user = await db.collection("users").findOne({ email: credentials.email });
//                 if (!user) {
//                     console.log("❌ No user found with that email");
//                     return null;
//                 }

//                 const isValid = await compare(credentials.password, user.password);
//                 if (!isValid) {
//                     console.log("❌ Invalid password");
//                     return null;
//                 }

//                 console.log("✅ User authenticated successfully:", user.email);

//                 return {
//                     id: user._id.toString(),
//                     name: user.name,
//                     email: user.email,
//                 };
//             },
//         }),
//     ],
//     session: { strategy: "jwt" },
//     secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/lib/db";
// import { compare } from "bcrypt";

// const handler = NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email", placeholder: "example@domain.com" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 try {
//                     console.log("🔍 Checking credentials for:", credentials.email);

//                     const client = await clientPromise;
//                     const db = client.db();

//                     const user = await db.collection("users").findOne({ email: credentials.email });
//                     console.log("📦 User found:", user);

//                     if (!user) {
//                         console.log("❌ No user found with that email");
//                         return null; // returning null instead of throwing error avoids crashing NextAuth
//                     }

//                     const isValid = await compare(credentials.password, user.password);
//                     console.log("🔐 Password valid:", isValid);

//                     if (!isValid) {
//                         console.log("❌ Invalid password for:", credentials.email);
//                         return null;
//                     }

//                     console.log("✅ User authenticated successfully:", user.email);

//                     return {
//                         id: user._id.toString(),
//                         name: user.name,
//                         email: user.email,
//                     };
//                 } catch (error) {
//                     console.error("🔥 Error during authorization:", error);
//                     return null;
//                 }
//             },
//         }),
//     ],
//     session: { strategy: "jwt" },
//     pages: { signIn: "/login" },
//     secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/lib/db";
// import { compare } from "bcrypt";

// const handler = NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email", placeholder: "example@domain.com" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 try {
//                     console.log("🔍 Checking credentials for:", credentials.email);

//                     const client = await clientPromise;
//                     const db = client.db();

//                     const user = await db.collection("users").findOne({ email: credentials.email });
//                     console.log("📦 User found:", user);

//                     if (!user) {
//                         console.log("❌ No user found with that email");
//                         return null;
//                     }

//                     let isValid = false;

//                     // Handle both hashed and plain text passwords
//                     if (user.password.startsWith("$2b$")) {
//                         // bcrypt hash
//                         isValid = await compare(credentials.password, user.password);
//                     } else {
//                         // fallback for old plaintext passwords
//                         isValid = credentials.password === user.password;
//                     }

//                     console.log("🔐 Password valid:", isValid);

//                     if (!isValid) {
//                         console.log("❌ Invalid password for:", credentials.email);
//                         return null;
//                     }

//                     console.log("✅ User authenticated successfully:", user.email);

//                     return {
//                         id: user._id.toString(),
//                         name: user.name,
//                         email: user.email,
//                     };
//                 } catch (error) {
//                     console.error("🔥 Error during authorization:", error);
//                     return null;
//                 }
//             },
//         }),
//     ],
//     session: { strategy: "jwt" },
//     pages: { signIn: "/login" },
//     secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/db";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@domain.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    console.log("🔍 Checking credentials for:", credentials.email);

                    const client = await clientPromise;
                    const db = client.db();

                    // Find user by email
                    const user = await db.collection("users").findOne({ email: credentials.email });
                    console.log("📦 User found:", user);

                    if (!user) {
                        console.log("❌ No user found with that email");
                        return null;
                    }

                    // Compare plain text passwords
                    if (credentials.password !== user.password) {
                        console.log("❌ Invalid password for:", credentials.email);
                        return null;
                    }

                    console.log("✅ User authenticated successfully:", user.email);

                    // Return user object for NextAuth session
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                    };
                } catch (error) {
                    console.error("🔥 Error during authorization:", error);
                    return null;
                }
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
