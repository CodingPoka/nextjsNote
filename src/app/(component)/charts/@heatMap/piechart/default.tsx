
import React from 'react'
import Link from 'next/link';

const DefaultPieChart = () => {
  return (
    <div>
        <h1>pie chart</h1>
        <Link href="/charts" className='text-white bg-blue-500'>Go To Charts</Link>
        
    </div>
  )
}

export default DefaultPieChart