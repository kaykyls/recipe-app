import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiCupcake, GiTacos} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import { TbSoup } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import "./css/hero.css"
import { useState } from 'react'

//7d4ed389154647b49fc79cc8633d6567

const Categories = () => {
  const [searchIsFocused, setSearchIsFocused] =useState(false)

  const handleSearchFocus = (condition) => {
    setSearchIsFocused(condition)
  }

  return (
    <div className='hero'>
       <div className="hero-wrapper">
        <h1>Recipe App</h1>
        <div className={`hero-search${searchIsFocused ? " search-is-focused" : ""}`}>
          <label htmlFor='search-input' className="icon">
            <FaSearch/>
          </label>
          <input id='search-input' onBlur={() => handleSearchFocus(false)} onFocus={() => handleSearchFocus(true)} type="text" placeholder='Search...'/>
        </div>
        <span>Unleash you culinary creativity.</span>
       </div>
    </div>
  )
}

export default Categories