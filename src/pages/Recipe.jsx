import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./recipe.css"

const Recipe = () => {
    const [details, setDetails] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [activeTab, setActiveTab] = useState("instructions")
    let params = useParams()

    const getRecipeDetails = async (id) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7d4ed389154647b49fc79cc8633d6567`)
        const data = await res.json()
        setDetails(data)
        setIngredients(data.extendedIngredients)
    }

    useEffect(() => {
        getRecipeDetails(params.id)
    }, [params.id])

    let tab

    switch (activeTab) {
        case "ingredients":
            tab = (
                <ul className="ingredients">
                    {ingredients.map((ingredient, index) => 
                        <li key={index}>{ingredient.original}</li>
                    )}
                </ul>
            )
            break
        case "instructions":
            tab =  (
               <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div> 
            )
            break
    }

    return (
        <div className="wrapper">
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <div className="info">
                <button>Instructions</button>
                <button>Ingredients</button>
            </div>
        </div>     
    )
}

export default Recipe