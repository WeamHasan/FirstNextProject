"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductDetailsLayout({
    children,
}: {
    children : React.ReactNode;
}) {
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Load from localStorage
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
        <div style={{ display: "flex" }}>
            <aside style={{ width: "200px", background: "lightgray", padding: "1rem" }}>
                <h3>Sidebar</h3>
                {/* Only show button after localStorage is loaded */}
                {!isLoaded ? (
                    <button disabled>Loading...</button>
                ) : (
                    <button onClick={handleIncrement}>Count: {count}</button>
                )}

                <div>
                <Link href="/products/1">Product 1</Link>
                <Link href="/products/2">Product 2</Link>
                <Link href="/products/3">Product 3</Link>
                </div>
            </aside>
            <main style={{ flex: 1 }}>
                {children}
                <h2>Featured Products</h2>
            </main>
        </div>
    )
}