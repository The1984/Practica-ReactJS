import React from 'react'
import miImagen from '../images/The1984.png'
import '../styles/Card.css'

class Card extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            img : props.img
        }
        // this.state =
        // {
        //     image : 'https://rea.ceibal.edu.uy/elp/tradicional_uruguayo_y_comestible/953-200.png'
        // }
    }

    componentDidMount() {
        setTimeout(() => 
        {
            this.setState 
            ({
                img : 'https://cdn.iconscout.com/icon/premium/png-256-thumb/mate-553001.png'
            })
        },5000)
    }

    render(){

        const {title, description} = this.props;
        return(
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.img} className="float-right tamaño-img" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div> 
                </div>
            </div>

        )
    }
}

export default Card