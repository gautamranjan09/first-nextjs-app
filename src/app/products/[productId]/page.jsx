const ProductDetail = ({ params }) => {
  const { productId } = params;
  return <div>Details of Product {productId}</div>;
};

export default ProductDetail;
