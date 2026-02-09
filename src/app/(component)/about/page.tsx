
import React from 'react'
import Link from "next/link"
import {Metadata} from "next";

export const metadata : Metadata ={
    title: "Test3 | About Page",
    description: "This is the about page of our Next.js application."
}

const About = () => {
  return (
    <div> 
      <h1 className='text-center text-3xl text-green-600'>About Page</h1>
      <Link href="/first" className='text-center
      text-white bg-sky-500 px-4 py-2 rounded-2xl ml-10'>Go To Firs Page</Link>
    </div>
  )
}

export default About