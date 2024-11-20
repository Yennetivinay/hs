import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2">
      <LazyLoadImage src={`${process.env.PUBLIC_URL}/assets/healschool-web-logo.jpg`} width="365" height="91" alt="Heal School Logo"/>
      <NavBar/>
    </div>
  )
}

export default Header
