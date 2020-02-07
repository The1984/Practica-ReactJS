import React from 'react'
import buttonmImg from '../images/boton.png'
import '../styles/AddExercise.css'
import {Link} from 'react-router-dom'

function AddExercise(props)
{

    return(
        // Link: funciona como <a href=...></a> pero este ultimo hacer un reload de la pagina. Lo
        // cual no es bueno visualmente. Por eso se usa Link.
        <Link to ="/exercise/new">
            <img src={buttonmImg} className="tamaño-img center-img"/>            
        </Link>
    )
}

export default AddExercise