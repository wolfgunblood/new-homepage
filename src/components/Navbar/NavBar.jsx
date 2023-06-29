import React, { useState } from 'react';
import "./NavBar.scss"
import Logo from "../../assets/images/logo.svg";
import Hamburger from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-menu-close.svg";
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <div className='nav-container'>
      <img src={Logo} alt="Logo" className='nav-logo' />
      <ul className='nav-list'>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
      <button className='btn-ham' onClick={() => setToggle(true)}>
        <img src={Hamburger} alt="Hamburger" className='nav-hamburger' />
      </button>
      {
        toggle &&
        <div className={`smallscreen-overlay`}>
          <div className='small-menu'>
            <button className='btn-close' onClick={() => setToggle(false)}><img src={Close} alt="Close" /></button>
            <ul className={`small-nav-list `}>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>

        </div>
      }
    </div>
  )
}

export default NavBar