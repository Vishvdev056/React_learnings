
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
        <div className="card">

<div>
          <div className="top">
          <img src="https://imgs.search.brave.com/wCsXkphbgTVitOK7NR_O8ZwD54_tPmUxKCDNQ7XMQY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NDk3ODE2LnBuZz9m/PXdlYnAmdz0xMjg" alt="" />
          <button>save  <Bookmark size={12} /> </button>

       

          
        </div>
        <div className="center">
          <h2> Amazon <span>5 Days Ago. </span></h2>
              <h2>Senior UI/UX Designer</h2>

              <div className='tag'>
              <h4>Part-Time</h4>
              <h4>Senior-Level</h4>
              </div>
              
        </div>
</div>
      
        <div className='bottom'>
          <div>
            <h3>120$</h3>
            <p>Mumbai India</p>
          </div>
          <button>Apply-Now</button>
        </div>

      </div>
  )
}

export default Card
