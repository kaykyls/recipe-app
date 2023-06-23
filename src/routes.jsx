import React from 'react'
import Home from './pages/home/Home'
import Cuisine from './pages/cuisine/Cuisine'
import Searched from './pages/searched/Searched'
import Recipe from './pages/recipe/Recipe'
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cuisine/:type" element={<Cuisine/>}/>
      <Route path="/search/:search" element={<Searched/>}/>
      <Route path="/recipe/:id" element={<Recipe/>}/>
    </Routes>
  )
}

export default Pages