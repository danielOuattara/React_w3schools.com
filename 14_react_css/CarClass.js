import React, { Component } from 'react';
import carStyle  from './carStyle.module.css'

class Car extends Component {
    render() {
        return (
            <div>
                <h1 className={carStyle.bigRed}>Red Car under class component !</h1>
                <hr/>
            </div>
        )
    }
}

export default Car;
