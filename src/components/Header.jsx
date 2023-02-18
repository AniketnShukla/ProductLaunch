import React, { useEffect, useState } from 'react'
import {MenuIcon} from './Icons'
import './../css/header.css'
function Header() {
  const [showList, setShowList] = useState('false');
  useEffect(()=>{
    setShowList(false)
  }, [])
  const toggleMenu = () => {
    setShowList((prev)=>!prev);

  }
  return (
    <>
      <div className="menu-icon" onClick={()=> toggleMenu() }>
      <MenuIcon />
      </div>
    <div className='header'>
      
    {showList && 
      <div className='mobile-navbar' id="menu-list">
      <ul>
        <li>
        </li>
        <li>
          <a href="#hero">Product</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#buy-now">Buy</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
      </div>
      }
      <ul className='desktop-header'>
        <li>
          <a className="header-about-us" href="#about-us">About Us</a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Header