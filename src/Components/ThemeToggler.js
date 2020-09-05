import React, { useState, useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdWbSunny } from 'react-icons/md'


const lightTheme = {
    "--secondary": "#fbfee5",
    "--primary": "#04011a"
  };
  const darkTheme = {
    "--secondary": "#04011a",
    "--primary": "#fbfee5"
  };

function ThemeToggler() {
    const [checked, setChecked] = useState(false)

    const applyTheme=(theme)=>{
        Object.keys(theme).forEach(key=>{
            const themeKey = theme[key];
            document.documentElement.style.setProperty(key, themeKey)
        })
    }
    useEffect(() => {
        checked?
            applyTheme(lightTheme)
            :
            applyTheme(darkTheme)
    }, [checked])

    return (
        <>
          <input 
          type='checkbox' 
          id='toggler' 
          checked={checked}
          onChange={()=>{
              setChecked(checked=>!checked)
        }}
          />
          <label 
          htmlFor='toggler' 
          id='label'
          >
              <MdWbSunny/>
              <FaMoon/>
              <div id='pos' className={checked?'left':'right'}/>
          </label>
        </>
    )
}

export default ThemeToggler
