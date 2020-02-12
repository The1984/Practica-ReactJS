import React from 'react'
import buttonImg from '../images/boton.png'
import '../styles/AddExercise.css'
import {Link} from 'react-router-dom'

// ESTO ES MAS MODERNO
const AddExercise = () => (  
    // Link: funciona como <a href=...></a> pero este ultimo hacer un reload de la pagina. Lo
    // cual no es bueno visualmente. Por eso se usa Link.
    <Link to ="/exercise/new">
        <img src={buttonImg} className="tamaño-img center-img"/>            
    </Link>
)

// ESTO ES MAS VIEJO
// function AddExercise(props)
// {
//     return(
//         // Link: funciona como <a href=...></a> pero este ultimo hacer un reload de la pagina. Lo
//         // cual no es bueno visualmente. Por eso se usa Link.
//         <Link to ="/exercise/new">
//             <img src={buttonmImg} className="tamaño-img center-img"/>            
//         </Link>
//     )
// }

export default AddExercise