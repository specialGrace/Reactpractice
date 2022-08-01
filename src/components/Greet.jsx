
import React from 'react';
import './Greet.css'

function Greet(props) {

// to destucture: you will remove this.name and write only name from h1
    const { name } = props
    // end of destructuring
    return (
        <>
            <h1 className='heading'>Hello{name}</h1>
        </>
    )
}

export default Greet;