import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full relative shrink-0 overflow-hidden w-80 rounded-4xl  ' >
      <img className=' brightness-85 h-full w-full object-cover' src={props.img} alt="" />
    
    <RightCardContent id={props.id} tag={props.tag}/>

    </div>
  )
}

export default RightCard
