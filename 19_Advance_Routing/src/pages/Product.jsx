import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='text-blue-300 flex justify-center gap-10 font-bold'>
        <Link to='/product/men'>Men's Collection</Link>
        <Link to='/product/women'>Women's Collection</Link>
        <Link to='/product/child'>Child Collection</Link>
      </div>
      
     <Outlet/>
    </div>
  )
}

export default Product
