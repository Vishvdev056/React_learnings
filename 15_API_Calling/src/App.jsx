import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const App = () => {

  // const getData= async ()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/users')

  //   const data=await response.json()
  //   console.log(data)
  // }

  const [data, setdata] = useState([]);

  const getData= async ()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')

    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Load data</button>
      <div>
       {data.map(function(elem,idx){


        return <h3> {idx+1} Hello 
        {elem.username} 
        {elem.email} </h3>
       })}
      </div>
    </div>
  )
}

export default App
