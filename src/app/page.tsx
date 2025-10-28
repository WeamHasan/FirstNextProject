import Link from "next/link"

export default function Home() {
    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Homepage
                </h1>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <Link href="/products" className="">Products</Link>
                    <Link href="articles/breaking-news-123?lang=en">Read in English</Link>
                    <Link href="articles/breaking-news-123?lang=ar">Read in Arabic</Link>
                </div>
            </div>
        </>
    )
}