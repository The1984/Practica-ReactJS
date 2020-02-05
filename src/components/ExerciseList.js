import React from 'react'
import Card from './Card.js'

function ExerciseList (props)
{
    return(
        props.exercises.map((Exercises) => {
            return (
                <div>
                    <Card
                    title={Exercises.title}
                    description={Exercises.description}
                    leftColor={Exercises.leftColor}
                    rightColor={Exercises.rightColor}
                    img={Exercises.img}
                    />            
                </div>
            )
        })
    )
}

export default ExerciseList