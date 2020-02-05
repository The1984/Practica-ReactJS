import React from 'react'
import '../styles/Wellcome.css'

function Wellcome(props)
{
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello, {props.name}</h1>
            </div>
        </div>
    )   
}

export default Wellcome