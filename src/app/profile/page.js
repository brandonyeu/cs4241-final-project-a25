"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") router.push("/login");
    }, [status, router]);

    if (status === "loading") return <p>Loading...</p>;

    if (status === "authenticated") {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
                <h1 className="text-3xl font-semibold mb-4">Welcome {session.user.name}</h1>
                <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="py-2 px-4 rounded text-white hover:opacity-80"
                    style={{ backgroundImage: "linear-gradient(to right, #59EE80, #56E9F1)" }}
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return null;
}
