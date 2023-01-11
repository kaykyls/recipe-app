import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import "./cuisine.css"

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])

    const getCuisine = async (type) => {
        const res = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${type}&number=12`)
        const data = await res.json()
        setCuisine(data.menuItems)
    }

    console.log(cuisine)

    return (
        <div className="grid container">
            {cuisine.map((recipe, index) => {
                return(
                    <div className="cuisine-card" key={index}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h3>{recipe.title}</h3>
                        {/* <div className="gradient"></div> */}
                    </div>
                )
              })}
        </div>
    )
}

export default Cuisine