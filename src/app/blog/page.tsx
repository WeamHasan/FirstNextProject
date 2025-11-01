import { Metadata } from "next"


export const metadata : Metadata = {
    title: "Blog",
    description: "Blog description",
}

export default async function Blog() {
    console.log("Blog page");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Blog page after 2 seconds");
    return <h1>My Blog</h1>
}