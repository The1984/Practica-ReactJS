import React from 'react'
import Wellcome from '../components/Wellcome'
import ExerciseList from '../components/ExerciseList'
import AddExercise from '../components/AddExercise'

const Exercises = ({data}) => (

    <React.Fragment>
        <Wellcome
            name='Javier Ramos'
        />
        <ExerciseList
            exercises={data}
        />
        <AddExercise/>
    </React.Fragment>
)

export default Exercises