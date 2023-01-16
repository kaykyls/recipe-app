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
    if (input !== "")
    navigate(`/search/${input}`)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="form-container" action="">
      {/* <div> */}
        <input onChange={handleChange} type="text" value={input}/>
        <button className='search-btn'>
          <FaSearch/>
        </button>
      {/* </div> */}
    </form>
  )
}

export default Search