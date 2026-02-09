

import React from 'react'
import {Metadata} from "next";
import Link from "next/link";
export const metadata : Metadata ={
    title: "Test3 | Product List",
    description: "This is the product list page of our Next.js application."
}

const ProductList = () => {
    const productId= "iphone";
  return (
    <div>
        <h1 className='text-center text-3xl text-red-500'>Product List</h1>
        <Link href="/product/1" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md my-2">Product 1</Link>
        <Link href="/product/2" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md my-2">Product 2</Link>
        <Link href={`/product/${productId}`} className="block text-center  px-4 py-2 rounded-md my-2">Product 3</Link>
    </div>
  )
}

export default ProductList