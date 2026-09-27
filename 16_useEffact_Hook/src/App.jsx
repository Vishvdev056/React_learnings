// import React, { useEffect } from 'react'
// import { useState } from 'react';

// const App = () => {

//   const [num, setnum] = useState(0);
//   const [num2, setnum2] = useState(100);

// useEffect(function(){
//   console.log('useEffect iss Running')
// },[num,num2])   //square bracketss mein dependencies di jaayengi jisko change hone prr useEffect ke anrr ka program chalna chahiye like abhi iss case mein maine num diya hai dependencie mein to jab bhi num change hoga useEffect chalega and num 2 ke change hone se useEffect ko koi farq nahi padega.......

//   return (
//     <div>
//       <h1>{num}</h1>
//       <h2>{num2}</h2>
//       <button onClick={()=>{
//        setnum( num+1)
//       }}
//       onDoubleClick={()=>{
//         setnum2(num2+100)
//       }}
//       >Click</button>
//     </div>
//   )
// }

// export default App


import React, { useEffect } from 'react'
import { useState } from 'react';


const App = () => {
function aChanging(){
  console.log("A is changing",a)
}
function bChanging(){
  console.log("B is changing",b)
}

const [a, seta] = useState(0);
const [b, setb] = useState(0);

useEffect(function(){
  aChanging()
},[a])
useEffect(function(){
  bChanging()
},[b])

  return (
    <div>
     

    <button onClick={()=>{
      seta(a+1)
    }}>ChangeA</button>
    <button onClick={()=>{
      setb(b-1)
    }}>ChangeB</button>
    </div>
  )
}

export default App
