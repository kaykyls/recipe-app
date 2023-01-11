import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiCupcake, GiTacos} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import "./popular.css"

const Categories = () => {
  return (
    <div className='container categories-list'>
        <div>
            <FaPizzaSlice/>
            <h3>Italian</h3>
        </div>
        <div>
            <GiNoodles/>
            <h3>Chinese</h3>
        </div>
        <div>
            <GiChopsticks/>
            <h3>japanese</h3>
        </div>
        <div>
            <GiCupcake/>
            <h3>Desserts</h3>
        </div>
        <div>
            <GiTacos/>
            <h3>Mexican</h3>
        </div>

        {/* <NavLink>
            <FaPizzaSlice/>
            <h3>Italian</h3>
        </NavLink>
        <NavLink>
            <GiNoodles/>
            <h3>Chinese</h3>
        </NavLink>
        <NavLink>
            <GiChopsticks/>
            <h3>japanese</h3>
            </NavLink>
        <NavLink>
            <GiCupcake/>
            <h3>Desserts</h3>
        </NavLink>
        <NavLink>
            <GiTacos/>
        </NavLink>
         */}
    </div>
  )
}

export default Categories