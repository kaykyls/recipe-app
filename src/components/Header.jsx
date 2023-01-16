import React from 'react'
import { Link } from 'react-router-dom'
import "./css/header.css"
import Search from './Search';

const Header = () => {
  return (
    <header>
      <Link className='logo' to={"/"}>RecipeApp</Link>
      <Search/>
    </header>
  )
}

export default Header