"use client"

export default function DeleteComponent() {
    const deleteAll = async () => {
        await fetch("/api/form", {
            method: "DELETE",
        });

        await fetch("/api/users", {
            method: "DELETE",
        })

        await fetch("/api/matches", {
            method: "DELETE",
        })

        console.log("All data deleted")
    }

    return (
        <button onClick={deleteAll}>Delete All</button>
    )
}