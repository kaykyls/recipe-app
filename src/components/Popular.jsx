import React, { Fragment, useEffect, useState } from 'react'
import "./css/popular.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`)
    const data = await res.json()
    setPopular(data.recipes)
  }

  return (
    <div className='container'>
          <h2 className='popular-title'>Popular</h2>
          <div className="popular-grid">
            {popular.map((recipe, index) => {
              return(
                <div className="card" key={index}>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                  </Link>
                </div>
              )
            }
            )}
          </div>

          {/* <div className="wrapper">
            <Splide options={{
              perPage: 3,
              perMove: 1,
              arrows: false,
              gap: "2rem",
              autoplay: true,
              breakpoints: {
                1100: {
                  perPage: 2,
                  gap: "1rem"
                },
                800: {
                  perPage: 1,
                  gap: "1rem"
                }
              }
            }}>
              {popular.map((recipe, index) => {
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
          </div> */}
    </div>
  )
}

export default Popular