import React from 'react';
import carStyle  from './carStyle.module.css'

function Car() {
    return (
        <div> 
            <h1 className={carStyle.bigRed}>Red Car under function component !</h1>
            <hr/>
        </div>
    )
}

export default Car;
