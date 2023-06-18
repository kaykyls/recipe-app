import React from 'react'
import { Link } from 'react-router-dom'
import "./css/header.css"
import Search from './Search';
import logo from './logo.svg'

const Header = () => {
  return (
    <header className='container'>
      <Link className='logo' to={"/"}><img src={logo}/></Link>
        <nav className='nav-links'>
          <li><Link to={"/"}>Home</Link></li>
          <li>Categories</li>
          {/* <ul className='categories-dropdown'>
            <li><Link to={"/categories/1"}>Action</Link></li>
          </ul> */}
          </nav>

      {/* <Search/> */}
    </header>
  )
}

export default Header