import React from 'react'
import { useState } from 'react'

const App = () => {
const [title, setTitle] = useState('');


  const submitHandeler=(elem)=>{
    elem.preventDefault()
    console.log(title)

    setTitle(' ')
  }

  

  return (
    <div className='lg:flex  bg-black text-white   '>
      <form onSubmit={(elem)=>{
          submitHandeler(elem)
        }} className='flex  lg:w-1/2 items-start gap-5  flex-col p-10 '>
          <h1  className='text-3xl font-bold'>Add Notes</h1>

          {/* Pehla input for heading  */}
   
          <input className='px-5 py-2 w-full outline-none rounded font-medium border-2 ' type="text"
           placeholder='Enter Headdings Here'
           value={title} 
           onChange={(elem)=>{
           setTitle(elem.target.value)
           }}
           />
        <textarea className=' px-5 py-2 w-full outline-none font-medium h-32 border-2 rounded' type="text" placeholder='Write Details' />
        <button  className=' px-5 w-full  py-2 bg-blue-500 font-medium outline-none  bordder-1 rounded'>Add Notes</button>
  
      </form>


<div className='lg:w-1/2 lg:border-l-2 p-10'>
  <h1  className='text-3xl font-bold'>Recent Notes</h1>

  <div className='   flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        <div className=' w-40 h-52 bg-amber-100 rounded-2xl  '></div>
        <div className=' w-40 h-52 bg-amber-100 rounded-2xl  '></div>
        <div className=' w-40 h-52 bg-amber-100 rounded-2xl  '></div>
       
  </div>

</div>
      
    </div>
  )
}

export default App
