

import React from 'react'
import {Metadata} from "next";


type Props ={
    params : Promise< {
        productId : string;
    }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
    description: `Details page for product ${productId}`,
  };
}

const ProductDetails = async ({params}: Props) => {
  const {productId} = await params;
  return (
    <div>
        <h1 className='text-center text-3xl text-red-500'>Product Details for ID: {productId}</h1>
    </div>
  )
}

export default ProductDetails