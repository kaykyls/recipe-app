import React, { Fragment, useEffect, useState } from 'react'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await res.json()
    setPopular(data.recipes)
  }

  console.log(popular)

  return (
    <Fragment>
      {popular.map((recipe, index) => {
        return(
          <div key={index}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt="" />
          </div>
        )
      })}
    </Fragment>
  )
}

export default Popular