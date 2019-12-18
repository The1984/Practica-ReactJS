import React from 'react'
import miImagen from '../images/The1984.png'
import '../styles/Card.css'

class Card extends React.Component
{
    render(){
        return(
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={miImagen} className="float-right tamaño-img" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>The1984</h1>
                            <p>Ser honesto es lo importante.</p>
                        </div>
                    </div> 
                </div>
            </div>

        )
    }
}

export default Card