import React, { useState } from 'react'
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
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.813 8.425C16.813 10.218 16.231 11.8742 15.2505 13.218L20.1958 18.1672C20.6841 18.6555 20.6841 19.4484 20.1958 19.9367C19.7075 20.425 18.9146 20.425 18.4263 19.9367L13.481 14.9875C12.1372 15.9719 10.481 16.55 8.68799 16.55C4.19971 16.55 0.562988 12.9133 0.562988 8.425C0.562988 3.93672 4.19971 0.300003 8.68799 0.300003C13.1763 0.300003 16.813 3.93672 16.813 8.425ZM8.68799 14.05C9.42667 14.05 10.1581 13.9045 10.8406 13.6218C11.523 13.3391 12.1431 12.9248 12.6655 12.4025C13.1878 11.8801 13.6021 11.2601 13.8848 10.5776C14.1675 9.89514 14.313 9.16369 14.313 8.425C14.313 7.68632 14.1675 6.95486 13.8848 6.27241C13.6021 5.58995 13.1878 4.96986 12.6655 4.44753C12.1431 3.9252 11.523 3.51086 10.8406 3.22818C10.1581 2.9455 9.42667 2.8 8.68799 2.8C7.9493 2.8 7.21785 2.9455 6.53539 3.22818C5.85294 3.51086 5.23284 3.9252 4.71051 4.44753C4.18818 4.96986 3.77385 5.58995 3.49117 6.27241C3.20848 6.95486 3.06299 7.68632 3.06299 8.425C3.06299 9.16369 3.20848 9.89514 3.49117 10.5776C3.77385 11.2601 4.18818 11.8801 4.71051 12.4025C5.23284 12.9248 5.85294 13.3391 6.53539 13.6218C7.21785 13.9045 7.9493 14.05 8.68799 14.05Z" fill="#969696"/>
        </svg>
      </label>
      <input value={input} onChange={(e) => handleChange(e)} id='search-input' onBlur={() => handleSearchFocus(false)} onFocus={() => handleSearchFocus(true)} type="text" placeholder='Search...'/>
    </form>
  )
}

export default Search