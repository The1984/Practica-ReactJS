import React from 'react'
import FatalErrorImg from '../images/500.png'

const FatalError = () =>
(
    <div className="text-center">
        <h1>Error: 500 Unexpected Error</h1>
        <img src={FatalErrorImg}/>
    </div>
)

export default FatalError