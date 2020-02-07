import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Excercises from '../pages/Exercises.js'
import ExcercisesNew from '../pages/ExerciseNew.js'
import NotFound from '../pages/NotFound.js'

function App()
{
    return(
        // Switch: lo que hacer es renderear el primer hijo router que haga match con el path.
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Excercises}/>
                <Route exact path="/exercise/new" component={ExcercisesNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App