import React, { useEffect, useRef } from 'react'
import ThemeToggler from './ThemeToggler'

function Nav() {
    const position = useRef(window.pageYOffset)
    let topNav = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.pageYOffset>position.current?
                topNav.style.top='-4vw':
                topNav.style.top='0'
            position.current=window.pageYOffset
        })
    }, [])

    return (
        <nav ref={el=>topNav=el} id='nav'>
            <div id='logo'>
                <span style={{fontWeight:600,fontSize:'2vw'}}>SalvadorLekan</span>
            </div>
          <ThemeToggler/>  
        </nav>
    )
}

export default Nav
