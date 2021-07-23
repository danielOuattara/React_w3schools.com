
import React from 'react';
import ReactDOM from 'react-dom';
import Car3 from './Car3.js';


/*  States
============== */

class Car1  extends React.Component { // definition & use
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
          };
    }

    changeColor = () => {
        this.setState( {color: "orange"})
    }

    render() { 
        return ( 
            <div>
                <h1>Car 1 : </h1>
                <h2>My {this.state.brand}</h2>
                <p> It is a {this.state.color}
                {this.state.model}
                from {this.state.year}.</p>
                <button type='button' onClick= {this.changeColor}>Click </button>
                <hr/>
            </div>
         );
    }
}
 

// ---------------------------------------------------------------------

class Car2  extends React.Component {
    constructor(props) {
        super(props);
        this.state = ["Ford", "Mustang", "red", 1964 ]; // Not good : State must be an object
    }

    changeColor = () => {
        // this.setState( this.state[2]="White")  // Not Working !
    }


    render() { 
        return ( 
            <div>
                <h1>Car 2 : </h1>
                <h2>My {this.state[0]}</h2>
                <p> It is a {this.state[2]}
                {this.state[1]}
                from {this.state[3]}.</p>
                <button type='button' onClick= {this.changeColor}>Click </button>
                <hr/>
            </div>
         );
        }
    }

    
// ---------------------------------------------------------------------
    

    ReactDOM.render(  
        <div>
            < Car1 /> 
            < Car2 />
            < Car3 />
        </div>, document.getElementById('root-1'))
    
    