import React from 'react'
import Card from '../components/Card.js';
import Wellcome from '../components/Wellcome.js';

class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <Wellcome
                name='Javier Ramos'
                />
                <Card
                title='The1984'
                description='Ser honesto es lo mas importante.'
                leftColor='#A74CF2'
                rightColor='#617BFB'
                />
            </div>
        )
    }
}

export default Home