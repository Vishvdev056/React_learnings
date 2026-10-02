import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-900 py-2 px-6'>
      <h2 className='text-2xl  font-bold'>Sheriyansh</h2>
      <div className='flex gap-10'>
        
        <Link className='text-xl font-medium' to='/'>Home</Link>
        <Link className='text-xl font-medium' to='/about'>About</Link>
        <Link className='text-xl font-medium' to='/contact'>Contact</Link>
        <Link className='text-xl font-medium' to='/product'>Product</Link>
        <Link className='text-xl font-medium' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
