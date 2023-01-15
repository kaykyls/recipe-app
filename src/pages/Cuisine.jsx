import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import "./css/cuisine.css"

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])

    const getCuisine = async (type) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=7d4ed389154647b49fc79cc8633d6567&number=40&tags=${type}`)
        const data = await res.json()
        setCuisine(data.recipes)
    }

    console.log(cuisine)

    return (
        <div className="grid container">
            {cuisine.map((recipe, index) => {
                return(
                    <div className="cuisine-card" key={index}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                            {/* <div className="gradient"></div> */}
                        </Link>
                    </div>
                )
              })}
        </div>
    )
}

export default Cuisine