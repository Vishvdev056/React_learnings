import React from 'react'

const App = () => {

  const submitHandeler=(elem)=>{
    elem.preventDefault()
    console.log("Form Submitted")
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandeler(elem)
      }}>
        <input type="text" placeholder='Emter your Name'/>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
