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

const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <header className='container'>
      <Link className='logo' to={"/"}><img src={logo}/></Link>
        <nav className='nav-links'>
          <li><Link to={"/"}>Home</Link></li>
          
          <li ref={dropdownRef} onMouseDown={(e) => e.preventDefault()} onClick={handleDropdown} className='categories-btn'>Categories<FaCaretDown/>
          {dropdownIsOpen &&
            <ul className='categories-dropdown'>
              <li><Link to={"/categories/italian"}><FaPizzaSlice/> Italian</Link></li>
              <li><Link to={"/categories/mexican"}><GiTacos/> Mexican</Link></li>
              <li><Link to={"/categories/chinese"}><GiNoodles/> Chinese</Link></li>
            </ul>
          }
            
          </li>
          
          </nav>

      {/* <Search/> */}
    </header>
  )
}

export default Header