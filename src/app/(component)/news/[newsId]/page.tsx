

import React from 'react'


type Props ={
    params: Promise<{
        newsId : string;
    }>,
    searchParams: Promise<{
        name: string;
        tipe: string;
    }>
}

const page = async ({params, searchParams}: Props) => {
    const {newsId} = await params;
    const {name, tipe} = await searchParams;
  return (
    <div>
        <h1 className='text-center text-3xl'>New Page for newsId: {newsId}</h1>
        <p className='text-center text-lg'>Search Param: {name}</p>
        <p className='text-center text-lg'>Type: {tipe}</p>
    </div>
  )
}

export default page