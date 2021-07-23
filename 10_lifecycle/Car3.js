import React, { Component } from 'react';


class Car3  extends Component { // Changing State
    constructor(props) {
        super(props);
        this.state = { 
            carInfos: ["Ford", "Chevrolet", "Blue", 1974 ]
        };
    }

    changeColor = () => {
    // this.setState( {carInfos:"White" }) // Not Working !
    }
    render() { 
        return ( 
            <div>
                <h1>My {this.state.carInfos[0]}</h1>
                <p> It is a {this.state.carInfos[2]}
                {this.state.carInfos[1]}
                from {this.state.carInfos[3]}.</p>
                <button type='button' onClick= {this.changeColor}>Click </button>
                <hr/>
            </div>
         );
        }
    }
    
    export default  Car3;
    
