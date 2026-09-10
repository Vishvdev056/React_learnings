
import {Bookmark} from 'lucide-react'

const Card = (props) => {

  
  return (
        <div className="card">

<div>
          <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>save  <Bookmark size={12} /> </button>

       

          
        </div>
        <div className="center">
          <h2> {props.company} <span>{props.datePosted}</span></h2>
              <h2>{props.post}</h2>

              <div className='tag'>
              <h4>{props.duration}</h4>
              <h4>{props.level}</h4>
              </div>
              
        </div>
</div>
      
        <div className='bottom'>
          <div>
            <h3>{props.pay} </h3>
            <p>{props.location}</p>
          </div>
          <button>Apply-Now</button>
        </div>

      </div>
  )
}

export default Card
