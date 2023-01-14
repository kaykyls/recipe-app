import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import "./css/search.css"

const Search = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container" action="">
      <div>
        <input onChange={handleChange} type="text" value={input}/>
        <FaSearch/>
      </div>
    </form>
  )
}

export default Search