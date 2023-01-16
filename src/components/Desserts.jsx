import React, { Fragment, useEffect, useState } from 'react'
import "./css/popular.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

const Desserts = () => {
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    getDesserts()
  }, [])

  const getDesserts = async () => {
    //
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=dessert`)
    const data = await res.json()
    console.log(data)
    setDesserts(data.recipes)
  }

  console.log(desserts)

  return (
    <div>
      <h2>Desserts</h2>
      <div className="wrapper">
        <Splide options={{
          type   : 'loop',
          perPage: 4,
          perMove: 1,
          arrows: false,
          gap: "2rem",
          breakpoints: {
            1100: {
              perPage: 3,
              gap: "1rem"
            },
            800: {
              perPage: 1,
              gap: "1rem"
            }
          }
        }}>
          {desserts.map((recipe, index) => {
            return(
              <SplideSlide key={index}>
                <div className="card">
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                  </Link>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Desserts