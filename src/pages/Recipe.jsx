import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import "./css/recipe.css"

const Recipe = () => {
    const [details, setDetails] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [activeTab, setActiveTab] = useState("instructions")
    let params = useParams()

    const instructionsBtnRef = useRef()
    const ingredientsBtnRef = useRef()

    const toggleActive = () => {
        if(activeTab === "instructions") {
            ingredientsBtnRef.current.className = ""
            instructionsBtnRef.current.className = "active-tab"
        } else {
            ingredientsBtnRef.current.className = "active-tab"
            instructionsBtnRef.current.className = ""
        }
    }

    useEffect(() => {
        toggleActive()
    }, [activeTab])

    const getRecipeDetails = async (id) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
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
               <div className='instructions'>
                    <span dangerouslySetInnerHTML={{__html: details.instructions}}></span>
                </div> 
            )
            break
    }

    return (
        <div className="recipe-wrapper">
            <div className='about'>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
                <span dangerouslySetInnerHTML={{__html: details.summary}}></span>
            </div>
            <div className="info">
                <div className="info-btns">
                    <button className='active-tab' ref={instructionsBtnRef} onClick={() => {setActiveTab("instructions")}}>Instructions</button>
                    <button ref={ingredientsBtnRef} onClick={() => {setActiveTab("ingredients")}}>Ingredients</button>
                </div>
                {tab}
            </div>
        </div>     
    )
}

export default Recipe