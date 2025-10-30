"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Order placed");
        router.push("/");
    }
    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Order Product
                </h1>
                <button 
                onClick={handleClick}
                className="bg-blue-600 text-white px-4 py-2 rounded"
                >Place Order</button>
            </div>
        </>
    )
}