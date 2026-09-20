import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
const [title, setTitle] = useState('');
const [details, setdetails] = useState('');

const [task, settask] = useState([]);

  const submitHandeler=(elem)=>{
    elem.preventDefault()

const copyTask=[...task]

copyTask.push({title,details})

settask(copyTask)



    // console.log(title)
    // console.log(details)

    setTitle(' ')
    setdetails(' ')
  }


  const deleteNote=(idx)=>{
    const copyTask=[...task]
   

    copyTask.splice(idx,1)

    settask(copyTask)
  }
  

  

  return (
    <div className='w-full min-h-screen lg:flex  bg-black text-white   '>
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

           {/* Dusra  input for Content  */}
        <textarea className=' px-5 py-2 w-full outline-none font-medium h-32 border-2 rounded' type="text" placeholder='Write Details'
        value={details}
        onChange={(e)=>{
          
          setdetails(e.target.value)
        }}
         />

          {/* button   */}

        <button  className=' px-5 w-full active:bg-black  py-2 bg-blue-500 font-medium outline-none  bordder-1 rounded'>Add Notes</button>
  
      </form>


<div className='lg:w-1/2 lg:border-l-2 p-10'>
  <h1  className='text-3xl font-bold'>Recent Notes</h1>

  <div className='   flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
       
     {task.map(function(elem,idx){

        return  <div key={idx} className=' relative w-40 h-52 p-4  rounded-2xl bg-cover  bg-[url("https://imgs.search.brave.com/Jbc-_lUBJ75B97FwxUOpotZdfer7axtMWIvTV64JhPk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/NzcyLzU0OS9zbWFs/bC93YXRlcmNvbG9y/LXNwaXJhbC1ub3Rl/cGFkLWZyZWUtcG5n/LnBuZw")]'>

          <h2 onClick={()=>{
            deleteNote(idx)
          }} className='absolute top-42 right-1 bg-red-500 text-xs p-1 rounded-full'  >  <X  /> </h2>
          <h3 className='leading-tight text-xl mt-5 font-bold text-black'>{elem.title}</h3>
          <p className=' mt-2 leading-tight font-medium text-gray-500  wrap-break-word'>{elem.details}</p>
        </div>

     })}
       
  </div>

</div>
      
    </div>
  )
}

export default App
