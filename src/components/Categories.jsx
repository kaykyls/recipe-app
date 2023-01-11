import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiCupcake, GiTacos} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import "./popular.css"

//7d4ed389154647b49fc79cc8633d6567

const Categories = () => {
  return (
    <div className='container categories-list'>
       <NavLink className={"navlink"} to={"/cuisine/italian"}>
            <FaPizzaSlice/>
            <h3>Italian</h3>
        </NavLink>
        <NavLink className={"navlink"} to={"/cuisine/chinese"}>
            <GiNoodles/>
            <h3>Chinese</h3>
        </NavLink>
        <NavLink className={"navlink"} to={"/cuisine/japanese"}>
            <GiChopsticks/>
            <h3>japanese</h3>
            </NavLink>
        <NavLink className={"navlink"} to={"/cuisine/desserts"}>
            <GiCupcake/>
            <h3>Desserts</h3>
        </NavLink>
        <NavLink className={"navlink"} to={"/cuisine/mexican"}>
            <GiTacos/>
            <h3>Mexican</h3>
        </NavLink>
    </div>
  )
}

export default Categories