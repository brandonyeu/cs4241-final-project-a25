// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function SignupPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const res = await fetch("/api/signup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, password }),
//         });

//         if (res.ok) {
//             alert("Account created! Please log in.");
//             router.push("/login");
//         } else {
//             const { error } = await res.json();
//             alert(error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
//             <h1 className="text-3xl mb-6 font-semibold">Create Account</h1>
//             <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-64">
//                 <input
//                     className="border p-2 rounded"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                     className="border p-2 rounded"
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                     type="submit"
//                     className="py-2 px-4 rounded text-white hover:opacity-80"
//                     style={{ backgroundImage: "linear-gradient(to right, #59EE80, #56E9F1)" }}
//                 >
//                     Sign Up
//                 </button>
//             </form>

//             <p className="mt-6 text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link href="/login" className="text-black font-medium hover:underline">
//                     Log in here
//                 </Link>
//             </p>
//         </div>
//     );
// }
"use client";

import Signup from "@/components/Signup";

export default function SignupPage() {
    return <Signup />;
}