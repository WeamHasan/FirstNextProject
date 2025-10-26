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

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    backgroundColor: "#aaa",
                    padding: "1rem",
                    marginTop: "1rem",
                }}>
                    <Link href="/products/1">Product 1</Link>
                    <Link href="/products/2">Product 2</Link>
                    <Link href="/products/3">Product 3</Link>
                    <Link href="/products/100">Product 100</Link>
                    <Link href="/products/101">Product 101</Link>
                    <Link href="/products/102">Product 102</Link>
                </div>
                <nav style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    backgroundColor: "#aaa",
                    padding: "1rem",
                    marginTop: "1rem",
                }}>
                    <Link href="/">Home</Link>
                </nav>
            </aside>
            <main style={{ flex: 1 }}>
                {children}
            </main>
        </div>
    )
}