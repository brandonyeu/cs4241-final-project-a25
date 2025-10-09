// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function ProfilePage() {
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     useEffect(() => {
//         if (status === "unauthenticated") router.push("/login");
//     }, [status, router]);

//     if (status === "loading") return <p>Loading...</p>;

//     if (status === "authenticated") {
//         return (
//             <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
//                 <h1 className="text-3xl font-semibold mb-4">Welcome {session.user.name}</h1>
//                 <button
//                     onClick={() => signOut({ callbackUrl: "/login" })}
//                     className="py-2 px-4 rounded text-white hover:opacity-80"
//                     style={{ backgroundImage: "linear-gradient(to right, #59EE80, #56E9F1)" }}
//                 >
//                     Sign Out
//                 </button>
//             </div>
//         );
//     }

//     return null;
// }

// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ProfilePage() {
//     const { data: session, status } = useSession();
//     const router = useRouter();
//     const [userData, setUserData] = useState(null);
//     // inside your profile page, after fetching the user:


//     useEffect(() => {
//         if (status === "unauthenticated") router.push("/login");
//     }, [status, router]);

//     // Fetch full user info from database by email
//     useEffect(() => {
//         const fetchUserData = async () => {
//             if (session?.user?.email) {
//                 try {
//                     const res = await fetch(`/api/users/${session.user.email}`);
//                     const data = await res.json();
//                     setUserData(data);
//                 } catch (err) {
//                     console.error("Error fetching user data:", err);
//                 }
//             }
//         };
//         fetchUserData();
//     }, [session]);

//     if (status === "loading") return <p>Loading...</p>;

//     if (status === "authenticated") {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
//                 <h1 className="text-4xl font-semibold mb-6">Welcome, {userData?.name || session.user.name}!</h1>

//                 {userData ? (
//                     <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow">
//                         <p className="mb-2">
//                             <strong>Email:</strong> {userData.email}
//                         </p>
//                         <p className="mb-2">
//                             <strong>Major:</strong> {userData.major}
//                         </p>
//                         <p className="mb-2">
//                             <strong>Graduation Year:</strong> {userData.gradYear}
//                         </p>
//                         <p className="mb-4">
//                             <strong>Preferred Language:</strong> {userData.preferredLanguage}
//                         </p>
//                     </div>
//                 ) : (
//                     <p>Loading profile data...</p>
//                 )}

//                 <button
//                     onClick={() => signOut({ callbackUrl: "/login" })}
//                     className="mt-6 py-2 px-4 rounded text-white font-semibold hover:opacity-80"
//                     style={{ backgroundImage: "linear-gradient(to right, #59EE80, #56E9F1)" }}
//                 >
//                     Sign Out
//                 </button>
//             </div>
//         );
//     }

//     return null;
// }

// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ProfilePage() {
//     const { data: session, status } = useSession();
//     const router = useRouter();
//     const [userData, setUserData] = useState(null);

//     // Redirect to login if not authenticated
//     useEffect(() => {
//         if (status === "unauthenticated") router.push("/login");
//     }, [status, router]);

//     // Fetch full user info from database by email
//     useEffect(() => {
//         const fetchUserData = async () => {
//             if (session?.user?.email) {
//                 try {
//                     const res = await fetch(`/api/users/${session.user.email}`);
//                     const data = await res.json();

//                     if (res.ok) {
//                         setUserData(data);

//                         // ✅ Save MongoDB _id in localStorage for later use (e.g., form submission)
//                         if (data?._id) {
//                             localStorage.setItem("userId", data._id);
//                             console.log("Stored user ID in localStorage:", data._id);
//                         }
//                     } else {
//                         console.error("Failed to fetch user data:", data.error);
//                     }
//                 } catch (err) {
//                     console.error("Error fetching user data:", err);
//                 }
//             }
//         };
//         fetchUserData();
//     }, [session]);

//     if (status === "loading") return <p>Loading...</p>;

//     if (status === "authenticated") {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
//                 <h1 className="text-4xl font-semibold mb-6">
//                     Welcome, {userData?.name || session.user.name}!
//                 </h1>

//                 {userData ? (
//                     <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow">
//                         <p className="mb-2">
//                             <strong>Email:</strong> {userData.email}
//                         </p>
//                         <p className="mb-2">
//                             <strong>Major:</strong> {userData.major}
//                         </p>
//                         <p className="mb-2">
//                             <strong>Graduation Year:</strong> {userData.gradYear}
//                         </p>
//                         <p className="mb-4">
//                             <strong>Preferred Language:</strong> {userData.preferredLanguage}
//                         </p>

//                         <p className="text-sm text-gray-600">
//                             <strong>User ID:</strong> {userData._id}
//                         </p>
//                     </div>
//                 ) : (
//                     <p>Loading profile data...</p>
//                 )}

//                 <button
//                     onClick={() => signOut({ callbackUrl: "/login" })}
//                     className="mt-6 py-2 px-4 rounded text-white font-semibold hover:opacity-80"
//                     style={{
//                         backgroundImage:
//                             "linear-gradient(to right, #59EE80, #56E9F1)",
//                     }}
//                 >
//                     Sign Out
//                 </button>
//             </div>
//         );
//     }

//     return null;
// }

"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (status === "unauthenticated") router.push("/login");
    }, [status, router]);

    useEffect(() => {
        const fetchUserData = async () => {
            if (session?.user?.email) {
                try {
                    const res = await fetch(`/api/users/${session.user.email}`);
                    const data = await res.json();
                    setUserData(data);

                    // Store user _id in localStorage
                    if (data._id) {
                        localStorage.setItem("userId", data._id);
                    }
                } catch (err) {
                    console.error("Error fetching user data:", err);
                }
            }
        };
        fetchUserData();
    }, [session]);

    if (status === "loading") return <p>Loading...</p>;

    if (status === "authenticated") {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
                <h1 className="text-4xl font-semibold mb-6">Welcome, {userData?.name || session.user.name}!</h1>

                {userData ? (
                    <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow">
                        <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
                        <p className="mb-2"><strong>Major:</strong> {userData.major}</p>
                        <p className="mb-2"><strong>Graduation Year:</strong> {userData.gradYear}</p>
                        <p className="mb-4"><strong>Preferred Language:</strong> {userData.preferredLanguage}</p>
                    </div>
                ) : (
                    <p>Loading profile data...</p>
                )}

                <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="mt-6 py-2 px-4 rounded text-white font-semibold hover:opacity-80"
                    style={{ backgroundImage: "linear-gradient(to right, #59EE80, #56E9F1)" }}
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return null;
}
