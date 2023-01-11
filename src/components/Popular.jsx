import React, { Fragment, useEffect, useState } from 'react'
import "./popular.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e8e6dc9e66b143d48ebb9a22d8de6a5e&number=9`)
    const data = await res.json()
    setPopular(data.recipes)
  }

  console.log(popular)

  return (
    <div className="container">
          <h2>Popular</h2>
          <div className="wrapper">
            <Splide options={{
              type   : 'loop',
              perPage: 3,
              perMove: 1,
              arrows: true,
              gap: "2rem"
            }}>
              {popular.map((recipe, index) => {
                return(
                  <SplideSlide key={index}>
                    <div className="card">
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <div className="gradient"></div>
                    </div>
                  </SplideSlide>
                )
              })}
            </Splide>
          </div>
    </div>
  )
}

export default Popular