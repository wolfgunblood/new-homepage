import React from 'react';
import "./NavBar.scss"
import Logo from "../../assets/images/logo.svg";
const NavBar = () => {
  return (
    <div className='nav-container'>
        <img src={Logo} alt="Logo" className='nav-logo' />
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
    </div>
  )
}

export default NavBar