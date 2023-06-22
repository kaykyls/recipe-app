import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./css/cuisine.css"

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

    const getCuisine = async (type) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=40&tags=${type}`)
        const data = await res.json()
        setCuisine(data.recipes)
    }

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