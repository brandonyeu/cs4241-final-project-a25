"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (!res.error) {
            router.push("/profile");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
            <h1 className="text-3xl mb-6 font-semibold">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-64">
                <input
                    className="border p-2 rounded"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="border p-2 rounded"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="py-2 px-4 rounded text-white hover:opacity-80"
                    style={{ backgroundImage: "linear-gradient(to right, #59EE80, #56E9F1)" }}
                >
                    Log In
                </button>
            </form>

            <p className="mt-6 text-sm text-gray-600">
                Don’t have an account yet?{" "}
                <Link href="/signup" className="text-black font-medium hover:underline">
                    Sign up here
                </Link>
            </p>
        </div>
    );
}
