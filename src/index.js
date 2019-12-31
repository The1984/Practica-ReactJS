import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';
import 'bootstrap/dist/css/bootstrap.css';

/* Creacion de componentes a traves de funcionesJS -> getGreeting() */

// const user = 
// {
//     name: 'Javier',
//     lastName: 'Ramos',
//     mark: 'The1984'
// }

// function getGreeting(user) 
// {
//     if (user) 
//     {
//       return <h1>Hello, {user.name}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// const iniciales = 'J.R.';
// const elemento = <h1>Hola, {user.name} {user.lastName} ({iniciales}) - {user.mark}</h1>;
const contenedor = document.getElementById('root');

ReactDOM.render(/*getGreeting(user)*/<Card
                                        title='The1984'
                                        description='Ser honesto es lo importante.'
                                        leftColor='#A74CF2'
                                        rightColor='#617BFB'                                   />, contenedor);