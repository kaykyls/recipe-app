import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import "./search.css"

const Search = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const [searchIsFocused, setSearchIsFocused] =useState(false)

  const handleSearchFocus = (condition) => {
    setSearchIsFocused(condition)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input !== "")
    navigate(`/search/${input}`)
  }

  return (
    <form onSubmit={handleSubmit} className={`hero-search${searchIsFocused ? " search-is-focused" : ""}`}>
      <label htmlFor='search-input' className="icon">
        <FaSearch/>
      </label>
      <input value={input} onChange={(e) => handleChange(e)} id='search-input' onBlur={() => handleSearchFocus(false)} onFocus={() => handleSearchFocus(true)} type="text" placeholder='Search...'/>
    </form>
  )
}

export default Search