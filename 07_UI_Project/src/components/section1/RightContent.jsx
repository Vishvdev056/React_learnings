import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'


const RightContent = (props) => {
  
  return (
    <div id='right' className='rounded-4xl p-6 mb-10 h-full w-2/3 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map(function(elem,idx){

        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
      
    </div>
  )
}

export default RightContent
