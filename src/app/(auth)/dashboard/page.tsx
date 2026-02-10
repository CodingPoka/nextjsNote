
'use client'

import React from 'react'
import {useRouter} from "next/navigation";

const Dashboard = () => {

    const router= useRouter();
  return (
    <div>
        <h1 className='text-center text-3xl'>Dashboard</h1>
        <button className='text-center text-white bg-sky-400 px-3 py-2 rounded-md' onClick={()=>{
            router.push("/profile");;
        }}>
            Go To Profile
        </button>
    </div>
  )
}

export default Dashboard