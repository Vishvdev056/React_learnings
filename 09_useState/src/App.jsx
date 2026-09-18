

// import  { useState } from 'react';

// const App = () => {
   

//      const [num, set] = useState(10);
//      const [userName, setuserName] = useState("Sarthak");

//      function change(){
//         set(20)
//         setuserName("Aman")
//      }
   
//   return (
//     <div>
//       <h1>Value of a is {num}</h1>
//       <h1>The name of the user is {userName}</h1>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0);

  function Increase(){
    setnum(num+1)
  }
  function Decrease(){
    setnum(num-1)
  }
  function jump5Num(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  )
}

export default App

