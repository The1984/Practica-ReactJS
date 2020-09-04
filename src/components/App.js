import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer.js'
import ExerciseNewContainer from '../pages/ExerciseNewContainer.js'
import NotFound from '../pages/NotFound.js'

const App = () => (
    // Switch: lo que hacer es renderear el primer hijo router que haga match con el path.
    <BrowserRouter>
    <Switch>
        <Route exact path="/exercise" component={ExercisesContainer}/>
        <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
        <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
)

// function App()
// {
//     return(
//         // Switch: lo que hacer es renderear el primer hijo router que haga match con el path.
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/exercise" component={Excercises}/>
//                 <Route exact path="/exercise/new" component={ExcercisesNew}/>
//                 <Route component={NotFound}/>
//             </Switch>
//         </BrowserRouter>
//     )
// }

export default App