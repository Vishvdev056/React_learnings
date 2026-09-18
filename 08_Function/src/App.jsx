// import React from 'react'

// const App = () => {
// function onChange(val){
//   console.log(val)
// }
  
//   return (
//     <div>
//      <input onChange={function(elem){
//       onChange(elem.target.value)
//      }} type="text" name="" id="" placeholder='UserName'/>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div onMouseOut={function(elem){
//       console.log(elem.target.style.backgroundColor="aquamarine")
//     }} onMouseMove={function(elem){
//       console.log(elem.target.style.backgroundColor="red")
//     }} className='box'>
      
//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {

  function onScrolling(elem){

if(elem>0){
  console.log("Seedha scrolling")
}else{
  console.log("Ulta Scrolling")
}
 }

  return (
    <div onWheel={function(elem){
     
onScrolling(elem.deltaY)

    }}>
    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
    </div>
  )
}

export default App
