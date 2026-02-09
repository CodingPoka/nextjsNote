
import React from 'react'
import Link from "next/link"

const FirstPage = () => {
  return (
    <div>
        <h1 className='text-center text-3xl text-red-500'>First Page</h1>
        <Link href="/about" className='bg-blue-700 px-4 py-2 rounded-md text-center text-white'>Go To About</Link>
    </div>
  )
}

export default FirstPage