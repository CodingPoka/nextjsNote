

import React from 'react'
import { Metadata} from 'next'


export const metadata : Metadata ={
  title: "Test3 | Home Page",
  description: "This is the home page of our Next.js application."
}
const Home = () => {
  return (
    <div>
      <h1 className='text-center text-red-500'>Welcome to the Home Page</h1>
    </div>
  )
}

export default Home