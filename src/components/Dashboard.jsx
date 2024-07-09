import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <center>
        <h1 className='text-4xl'>Dashboard <br /> <span className='text-blue-500 text-2xl'><Link to={"/product"}>Click</Link></span></h1>
      </center>
    </div>
  )
}

export default Dashboard
