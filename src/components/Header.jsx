import React from 'react'
import { Link } from 'react-router-dom'
import "./css/header.css"
import Search from './Search';
import logo from './logo.svg'
import {FaCaretDown} from 'react-icons/fa'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiTacos} from 'react-icons/gi'
import {GiNoodles} from 'react-icons/gi'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { FaHamburger } from 'react-icons/fa';
import {FaBars} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'

const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownIsOpen(false);
    }
  }

  const handleHamburgerMenu = () => {
    setHamburgerIsOpen(!hamburgerIsOpen)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <header className='header'>
      <div className="header-wrapper container">
      <Link className='logo' to={"/"}><img src={logo}/></Link>
        <span onClick={handleHamburgerMenu} className="hamburger">
          <FaBars/>
        </span>
        
        <nav className={`nav-links${hamburgerIsOpen ? " hamburger-is-active" : ""}`}>
          <span onClick={handleHamburgerMenu} className="close">
            <CgClose/>
          </span>
          <li><Link to={"/"}>Home</Link></li>
          
          <li ref={dropdownRef} onMouseDown={(e) => e.preventDefault()} onClick={handleDropdown} className='cuisines-btn'>Cuisines<FaCaretDown/>
          {dropdownIsOpen &&
            <ul className='cuisines-dropdown'>
              <li><Link to={"/cuisine/italian"}><FaPizzaSlice/> Italian</Link></li>
              <li><Link to={"/cuisine/mexican"}><GiTacos/> Mexican</Link></li>
              <li><Link to={"/cuisine/chinese"}><GiNoodles/> Chinese</Link></li>
              <li><Link to={"/cuisine/american"}><FaHamburger/> American</Link></li>
            </ul>
          }
            
          </li>
          
          </nav>
      </div>
      
    </header>
  )
}

export default Header