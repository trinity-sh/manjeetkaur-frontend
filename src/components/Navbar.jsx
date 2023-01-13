import React from 'react'
import "./styles/navbar.css"
const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='brand'>
        <img src="" />
        <h2>ManjeetKaur.Org</h2>
        </div>
        <div className='navbarLinks'>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="/donate">Donate</a>
        </div>
    </div>
  )
}

export default Navbar
