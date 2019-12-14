import React from 'react'
import miImagen from '../Images/The1984.png'

class Card extends React.Component
{
    render(){
        return(
            <div>
                <div>
                    <img src={miImagen}/>
                </div>
                <div>
                    <h1>The1984</h1>
                    <p>Ser honesto es lo importante.</p>
                </div>
            </div> 
        )
    }
}

export default Card