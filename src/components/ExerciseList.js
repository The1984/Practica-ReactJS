import React from 'react'
import Card from './Card.js'

const ExerciseList = ({exercises}) => (
    exercises.map((exercise) => {
        return (
            <React.Fragment>
                <Card
                key={exercise.id}
                // title={exercise.title}
                // description={exercise.description}
                // leftColor={exercise.leftColor}
                // rightColor={exercise.rightColor}
                // img={exercise.img}
                {...exercise}
                />            
            </React.Fragment>
        )
    })
)

// function ExerciseList (props)
// {
//     return(
//         props.exercises.map((Exercises) => {
//             return (
//                 <div>
//                     <Card
//                     title={Exercises.title}
//                     description={Exercises.description}
//                     leftColor={Exercises.leftColor}
//                     rightColor={Exercises.rightColor}
//                     img={Exercises.img}
//                     />            
//                 </div>
//             )
//         })
//     )
// }

export default ExerciseList