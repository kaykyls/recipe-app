import React, { useEffect } from 'react'

const Popular = () => {

  useEffect(() => {
    console.log(getPopular())
  }, [])

  const getPopular = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await res.json()
    return data
  }

  return (
    <div>Popular</div>
  )
}

export default Popular