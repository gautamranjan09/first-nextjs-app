"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname= usePathname();
  console.log(pathname);

  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
    <>
        <h1>404</h1>
        <p>Review {reviewId} not found for product {productId}</p>
        
    </>
  )
}

export default NotFound;