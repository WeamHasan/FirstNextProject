import { Metadata } from "next";
import Image from "next/image";

type Props = {
    params: { productId: string }
}

const getProduct = async({productId}: {productId: string}) => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`);
    if(!data.ok) {
        throw new Error("Failed to fetch product");
    }
    const product = await data.json();
    return product;
}

export const generateMetadata = async({params}: Props) : Promise<Metadata> => {
    const { productId } = await params;
    const product = await getProduct({productId});
    return {
        title: product.title,
        description: product.description
    }
}

export default async function ProductDetails({ params }: Props) {
    const { productId } = await params;
    const product = await getProduct({productId});
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