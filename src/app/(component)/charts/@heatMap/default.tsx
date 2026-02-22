import React from 'react'
import Link from 'next/link';

const DefaultHeatMap = () => {
  return (
    <div>
        <h1>Heat Map</h1>
        <Link href="/charts/piechart" className='text-white bg-blue-500'>Pic Chart</Link>
    </div>
  )
}

export default DefaultHeatMap