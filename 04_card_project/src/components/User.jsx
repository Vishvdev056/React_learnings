import React from 'react'

const User = (props) => {
  console.log(props)
  return (
    <div style={{color:'white'}}>
      {props.name } 
      {props.age }   
      {props.course }
    </div>
  )
}

export default User
