import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'
import "./desserts.css"

const Desserts = () => {
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    getDesserts()
  }, [])

  const getDesserts = async () => {
    //
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=dessert`)
    const data = await res.json()
    setDesserts(data.recipes)
  }

  return (
    <div className='container'>
      <h2 className='desserts-title'>Desserts</h2>
      <div className="wrapper">
        <Splide options={{
          perPage: 4,
          perMove: 1,
          arrows: true,
          gap: ".7rem",
          autoplay: true,
          breakpoints: {
            1100: {
              perPage: 3,
              gap: "1rem"
            },
            800: {
              perPage: 2,
              gap: "1rem"
            }
          }
        }}>
          {desserts?.map((recipe, index) => {
            return(
              <SplideSlide key={index}>
                <div className="dessert-card">
                  <Link to={`/recipe/${recipe?.id}`}>
                    <img src={recipe?.image} alt={recipe?.title} />
                    <div className="dessert-gradient"></div>
                  </Link>
                </div>
                <p className='dessert-title'>{recipe?.title}</p>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Desserts