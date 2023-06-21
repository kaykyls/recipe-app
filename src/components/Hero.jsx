import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiCupcake, GiTacos} from 'react-icons/gi'
import { TbSoup } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import "./css/hero.css"
import { useState } from 'react'
import Search from './Search'

//7d4ed389154647b49fc79cc8633d6567

const Categories = () => {
  return (
    <div className='hero'>
       <div className="hero-wrapper">
        <h1>Recipe App</h1>
        <Search/>
        <span>Unleash you culinary creativity.</span>
       </div>
    </div>
  )
}

export default Categories