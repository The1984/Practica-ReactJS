import React from 'react'

class ExerciseNew extends React.Component
{
    //Pasa propiedades. Hace un enlace (bind).
    // constructor(props)
    // {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick()
    // {
    //     console.log(this)
    // }

    // Equivalente para pasar props.
    handleClick = () =>
    (
        console.log(this)
    )
    
    render()
    {
        return(
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }

}

export default ExerciseNew