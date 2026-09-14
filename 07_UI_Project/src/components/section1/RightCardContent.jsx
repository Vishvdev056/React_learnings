import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full   p-6 justify-between flex flex-col'>
        <h2 className='bg-white rounded-full text-xl h-12 w-12 flex justify-center font-semibold items-center'>{props.id+1}</h2>
        <p className='text-lg leading-relaxed text-white mb-10 mt-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa suscipit inventore magni placeat.</p>
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full '>{props.tag}</button>
          <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
  )
}

export default RightCardContent
