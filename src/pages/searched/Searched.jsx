import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./searched.css"

const Searched = () => {
    const [searched, setSearched] = useState([])
    let params = useParams()

    const getSearched = async (type) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${type}&number=40`)
        const data = await res.json()
        setSearched(data.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <div className='grid container'>
            {searched.map((item, index) => {
                return(
                    <div className="searched-card" key={index}>
                        <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt="" />
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Searched