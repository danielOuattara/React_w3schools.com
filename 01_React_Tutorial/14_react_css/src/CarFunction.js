import React from 'react';
import carStyle from './carStyle.module.css'

function Car() {
    return (
        <div> 
            <h1 className={carStyle.bigRed}>Red Car under function component !</h1>
            <h2 className={carStyle.bigRed}>Test specificity</h2>
            <p style={{fontSize: "24px"}}>Module.css has a higher specificity over external css file</p>
            <hr/>
        </div>
    )
}

export default Car;
