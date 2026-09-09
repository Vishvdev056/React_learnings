import React from 'react'

const Cards = (props) => {

  // console.log(props.user,props.age)
  return (
    <div className='card'>
      <img src={props.img} />
      <h2>{props.user}{props.age}</h2>
      <p>{props.about}{props.age}</p>
      <button>view more..</button>
    </div>
 
  )
}

export default Cards
