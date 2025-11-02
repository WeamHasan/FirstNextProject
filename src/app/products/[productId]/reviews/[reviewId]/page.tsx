import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Something went wrong");
  }
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 100) redirect("/products");
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
      <div>
        <p>This is the review content.</p>
      </div>
    </div>
  );
}
