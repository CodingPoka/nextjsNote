

import React from 'react'
import {Metadata} from 'next';

export const metadata : Metadata ={
  title : "Test3 | Login Page",
  description : "This is the login page of our Next.js application."
}
const Login = () => {
  return (
    <div>
        <h1 className='text-center text-red-300 text-3xl'>Login</h1>
    </div>
  )
}

export default Login