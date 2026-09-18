import React from 'react'
import { useState } from 'react';
const App = () => {

  const [title, settitle] = useState("");

  const submitHandeler=(elem)=>{
    elem.preventDefault()
    console.log("Form Submitted by ",title)

    settitle("")
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandeler(elem)
      }}>
        <input type="text"
        placeholder='Enter your Name'
        value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }}
        />
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
