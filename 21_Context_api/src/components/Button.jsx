import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

  const [theme,settheme]=useContext(ThemeDataContext)

  const changeTheme=()=>{
    settheme('Dark')
    
  }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
