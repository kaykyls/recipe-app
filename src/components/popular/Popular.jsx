import React, { Fragment, useEffect, useState } from 'react'
import "./popular.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`)
    const data = await res.json()
    setPopular(data.recipes)
  }

  return (
    <div className='container'>
          <h2 className='popular-title'>Popular</h2>
          <div className="popular-grid">
            {popular?.map((recipe, index) => {
              return(
                <Fragment key={index}>
                  <div className="card" id={`card-${index + 1}`}>
                    <Link to={`/recipe/${recipe?.id}`}>
                      <img src={recipe?.image ? recipe.image : "https://png.pngtree.com/png-clipart/20200225/original/pngtree-set-of-food-doodle-vector-illustration-png-image_5306662.jpg"} alt={recipe.title} />
                      <div className="gradient"></div>
                      <p>{recipe?.title}</p>
                    </Link>
                  </div>
                  <p className='mobile-title'>{recipe?.title}</p>
                </Fragment>
              )
            }
            )}
          </div>
    </div>
  )
}

export default Popular