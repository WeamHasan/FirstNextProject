
"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('productCounter');
        if (saved) {
            setCount(parseInt(saved));
        }
        setIsLoaded(true);
    }, []);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('productCounter', newCount.toString());
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-52 bg-gray-300 p-4 space-y-4">
                {/* Sidebar Header */}
                <h3 className="text-lg font-semibold text-gray-800">Sidebar</h3>
                
                {/* Counter Button */}
                {!isLoaded ? (
                    <button 
                        disabled 
                        className="w-full bg-gray-400 text-gray-600 p-2 rounded cursor-not-allowed"
                    >
                        Loading...
                    </button>
                ) : (
                    <button 
                        onClick={handleIncrement}
                        className="w-full bg-blue-500 text-white p-2 rounded 
                                   hover:bg-blue-600 active:bg-blue-700
                                   transition-colors duration-200 
                                   font-medium shadow-sm hover:shadow-md"
                    >
                        Count: {count}
                    </button>
                )}

                {/* Product Links */}
                <nav className="flex flex-col space-y-2 bg-gray-400 p-4 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">Products</h4>
                    <Link 
                        href="/products/1" 
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                        Product 1
                    </Link>
                    <Link 
                        href="/products/2"
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                        Product 2
                    </Link>
                    <Link 
                        href="/products/3"
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                        Product 3
                    </Link>
                    <Link 
                        href="/products/100"
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                        Product 100
                    </Link>
                    <Link 
                        href="/products/101"
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                        Product 101
                    </Link>
                    <Link 
                        href="/products/102"
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                        Product 102
                    </Link>
                </nav>

                {/* Home Link */}
                <nav className="pt-4 border-t border-gray-400">
                    <Link 
                        href="/" 
                        className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
                    >
                        ← Back to Home
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-50">
                {children}
                <h2 className="text-lg font-bold">Product Reviews</h2>
            </main>
        </div>
    )
}