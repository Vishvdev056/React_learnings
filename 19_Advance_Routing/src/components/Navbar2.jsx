import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

  const nav=useNavigate()

  return (
    <div className='py-3 px-5 bg-cyan-700'>
      
        <button 
      onClick={()=>{
        nav('/')
      }}
      className='bg-amber-600 px-5 py-2 rounded m-2'>Return to Homepage</button>
      <button 
      onClick={()=>{
        nav(-1)
      }}
      className='bg-amber-600 px-5 py-2 rounded m-2'>Back</button>
      <button 
      onClick={()=>{
        nav(+1)
      }}
      className='bg-amber-600 px-5 py-2 rounded m-2'>Next</button>
    </div>
  )
}

export default Navbar2
