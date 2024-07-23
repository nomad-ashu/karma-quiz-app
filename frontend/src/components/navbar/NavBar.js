import React from 'react'
import NavLogo from './NavLogo'
import NavAvatar from './NavAvatar'

const NavBar = () => {
    
  return (
    <div className='flex items-center justify-between flex-wrap bg-teal-500 p-2'>
      <NavLogo />
      <NavAvatar />
    </div>
  )
}

export default NavBar
