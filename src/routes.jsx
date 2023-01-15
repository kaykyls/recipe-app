import React from 'react'
import Home from './pages/Home'
import Cuisine from './pages/Cuisine'
import Searched from './pages/Searched'
import Recipe from './pages/Recipe'
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