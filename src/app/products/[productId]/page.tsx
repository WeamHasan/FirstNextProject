import { Metadata } from "next";
import Image from "next/image";

// Use inline param typing to avoid conflicts with framework PageProps constraints

// Accept productId directly for clarity and correct typing
const getProduct = async (productId: string) => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!data.ok) {
        throw new Error("Failed to fetch product");
    }
    const product = await data.json();
    return product;
}

export const generateMetadata = async({ params }: { params: Promise<{ productId: string }> }) : Promise<Metadata> => {
    // Next's PageProps may give params as a Promise — await to get the object
    const { productId } = await params;
    const product = await getProduct(productId);
    return {
        title: product.title,
        description: product.description
    }
}

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    // params can be a Promise according to Next's types — await it to obtain productId
    const { productId } = await params;
    const product = await getProduct(productId);
    return (
        <>
        <h3>Product id : {product.id}</h3>
        <h3>Product title : {product.title}</h3>
        <h5>Description : {product.description}</h5>
        <Image
        src={product.images[0]}
        alt={product.title}
        width={350}
        height={350}
        />
        </>
    )
}