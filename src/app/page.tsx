import Link from "next/link"

export default function Home(){
    return (
        <>
        <h1>Homepage</h1>
        <nav style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#aaa",
          padding: "1rem",
          marginTop: "1rem",
        }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav>
        </>
    )
}