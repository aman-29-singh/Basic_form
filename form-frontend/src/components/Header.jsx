import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
    <NavLink to="/header"> Header</NavLink>  
    <NavLink to="/about"> About</NavLink>
    <NavLink to="/contact-us"> Contact</NavLink>
    <NavLink to="/card"> Card</NavLink>
    <div>welcome to header</div>
    </div>
  )
}

export default Header