"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }: { error: Error ; reset: () => void }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            console.log("Refreshed the page");
            reset();
            console.log("Reset the error boundary");
        });
            
    
    }
    return (
        <>
            <h1 className="text-red-500 text-lg font-bold text-center">{error.message}</h1>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={reload}>
                    Try Again
                </button>
            </div>
        </>
    )
}