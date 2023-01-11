import React, { Fragment, useEffect, useState } from 'react'
import "./popular.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Desserts = () => {
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    getDesserts()
  }, [])

  const getDesserts = async () => {
    //${process.env.REACT_APP_API_KEY}
    const res = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=e8e6dc9e66b143d48ebb9a22d8de6a5e&query=desserts&number=10`)
    const data = await res.json()
    console.log(data)
    setDesserts(data.menuItems)
  }

  console.log(desserts)

  return (
    <div className="container">
      <h2>Desserts</h2>
      <div className="wrapper">
        <Splide options={{
          type   : 'loop',
          perPage: 4,
          perMove: 1,
          arrows: false,
          gap: "2rem"
        }}>
          {desserts.map((recipe, index) => {
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

export default Desserts