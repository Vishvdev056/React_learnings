
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
const Navbar = () => {
// const Navbar = (props) => {

  const data= useContext(ThemeDataContext)
 
  
  return (
    <div className='nav'>
      <h2>Sheryians</h2>
      {/* <Nav2 theme={props.theme} /> */}
      <Nav2  />
    </div>
  )
}

export default Navbar
