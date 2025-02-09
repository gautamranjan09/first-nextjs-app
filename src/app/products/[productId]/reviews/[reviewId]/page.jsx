import { notFound } from "next/navigation";
import { parse } from "path";

const ProductReview = async({ params }) => {
  const { productId, reviewId } = await params;
  console.log(parseInt(reviewId) , 1000,reviewId);
  if (parseInt(reviewId) > 1000) {
    //console.log(parse(reviewId) > 1000);
    
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default ProductReview;
