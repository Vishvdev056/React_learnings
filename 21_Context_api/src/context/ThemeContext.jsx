
import { createContext } from 'react'
export const ThemeDataContext=createContext()
import { useState } from 'react'

const ThemeContext = (props) => {

  const [theme, settheme] = useState('light');
  return (
    <div>
      <ThemeDataContext.Provider value={[theme,settheme]}>
        {props.children}
      </ThemeDataContext.Provider>
      
    </div>
  )
}

export default ThemeContext
