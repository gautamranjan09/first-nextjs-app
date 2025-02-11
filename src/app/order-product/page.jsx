"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
    const router = useRouter();

    const handleClick=()=>{
        router.push("/");
    }
  return (
    <>
    <h1>page</h1>
    <button onClick={handleClick}>Go to home</button>
    </>
  )
}

export default OrderProduct;