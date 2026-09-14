import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const users=[
  {
    img:"https://images.unsplash.com/photo-1555421689-43cad7100750?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D ",
    intro:"",
    tag:"Satisfied"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro:"",
    tag:"Underserved"
  },
  {
    img:" https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:"",
    tag:"Underbanked"
  },
  {
    img:" https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:"",
    tag:"Underrated"
  },
  
]
const App = () => {
  return (
    <div>
     <Section1 users={users} />
     <Section2/>
    </div>
  )
}

export default App
