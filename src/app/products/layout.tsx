"use client"

import { useState } from "react";

export default function ProductDetailsLayout({
    children,
}: {
    children : React.ReactNode;
}) {
    const [count, setCount] = useState(0);
    console.log("rendered, count: ", count);
    return (
        <div style={{ display: "flex" }}>
            <aside style={{ width: "200px", background: "lightgray" }}>
                <h3>Sidebar</h3>
                <button onClick={() => setCount(count + 1)}>Count : {count}</button>
            </aside>
            <main style={{ flex: 1 }}>
                {children}
                <h2>Featured Products</h2>
            </main>
        </div>
    )
}