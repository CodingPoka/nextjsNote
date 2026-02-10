

//how to use active link for navbar
"use client";
import React from 'react'

//import usePathname to get the current path 
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-100 p-4">
      {/*this is how we will use active link in nextjs*/}
      <div className="flex space-x-4">
        <a href="/" className={pathname==="/"? "bg-blue-500 text-white px-4 py-2 rounded-md": "bg-gray-200 text-black px-4 py-2 rounded-md"}>Home</a>
        <a href="/about" className={pathname==="/about"? "bg-blue-500 text-white px-4 py-2 rounded-md": "bg-gray-200 text-black px-4 py-2 rounded-md"}>About</a>
        <a href="/product" className={pathname==="/product"? "bg-blue-500 text-white px-4 py-2 rounded-md": "bg-gray-200 text-black px-4 py-2 rounded-md"}>Product</a>
        <a href="/first" className={pathname==="/first"? "bg-blue-500 text-white px-4 py-2 rounded-md": "bg-gray-200 text-black px-4 py-2 rounded-md"}>First Page</a>
      </div>
    </div>
  )
}

export default Navbar