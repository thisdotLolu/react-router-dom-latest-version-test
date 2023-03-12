import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div>
        <h2>Website help</h2>
        <p>ctyyyyyyyyyyyyyyywe lc eiycevyie wuiwevbuiwe vuiwebvulwe vbweuvbwe</p>

        <nav>
            <NavLink to='faq'>View the FAQ</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>
    <Outlet/>
    </div>


  )
}

export default HelpLayout