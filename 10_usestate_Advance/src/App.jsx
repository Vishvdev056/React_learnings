// import React from 'react'
// import { useState } from 'react';
// const App = () => {

// const [num, setnum] = useState({user:"Vishvdev",age:20});
// const btnClicked=()=>{

//  const newNum={...num}
//  newNum.user="Yogesh"
//  newNum.age=35
//  console.log(newNum)

// }
//   return (
//     <div>
//      <h1>{num.user} {num.age}</h1>
//      <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'
// const App = () => {

// const [num, setnum] = useState([10,20,30,40]);

// const btnClicked=()=>{
// const newNum=[...num]
// console.log(newNum)
// newNum.push(20)

// setnum(newNum)
// }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }
// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10);

  const btnClicked=()=>{
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App

