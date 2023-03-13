import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function RootLayout() {
  return (
    <>
    <div className='root-layout'>
    <header>
      <nav>
        <h1>
          JJobsx
        </h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='help'>Help</NavLink>
        <NavLink to='careers'>Careers</NavLink>
      </nav>
      <Breadcrumbs/>
    </header>


        <Outlet/>
    
    </div>
    </>
  )
}
