
export default async function Products() {
    const data = await fetch(`https://dummyjson.com/products`);
    const { products } = await data.json();
    return (
        <div>
        <ul>
            {products.map((product: { id: number }) => (
                <li key={product.id}>{product.id}</li>
            ))}
        </ul>
        </div>
    )
}