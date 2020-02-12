import React from 'react'
import '../styles/Wellcome.css'

const Wellcome = ({name}) => ( //{name} esto es destructuracion.
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello, {name}</h1>
        </div>
    </div>    
)

// function Wellcome(props)
// {
//     return(
//         <div className="container">
//             <div className="Fitness-User-Info">
//                 <h1>Hello, {props.name}</h1>
//             </div>
//         </div>
//     )   
// }

export default Wellcome