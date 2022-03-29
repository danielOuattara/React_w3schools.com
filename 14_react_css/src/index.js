
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import styles from './style-1.module.css';
import CarFunction from './CarFunction';
import CarClass from './CarClass';


/* Styling React Using CSS
==========================

There are many ways to style React with CSS, this tutorial will 
take a closer look at "inline styling", and "CSS stylesheet".=*/


/* Inline Styling
================== */

class MyHeader extends React.Component{

    render() {
        return (
            <div>
                <h1 style= {{color: "red"}}> Hello Style</h1>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render( <MyHeader/>, document.getElementById('root-1'));
//-----------------------------------------------------------------------

/* Note: In JSX, JavaScript expressions are written inside curly braces, 
         and since JavaScript objects also use curly braces, the styling 
         in the example above is written inside two sets of curly braces {{}}. */


/* camelCased Property Names 
-------------------------------*/
class MyHeader2 extends React.Component{

    render() {
        return (
            <div>
                <h1  style= {{backgroundColor: "lightblue", padding:"15px"}}>CamelCase Property</h1>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render( <MyHeader2/>, document.getElementById('root-2'));



/* JavaScript Object
--------------------- */

class MyHeader3 extends React.Component{

    constructor() {
        super();
        this.state = {
            orangeStyle: {
                color: "white",
                backgroundColor:"orange",
                padding:"15px",
                fontFamily: "Arial"
            }
        }
    }

    render() {
        const myStyle = {
            color: "white",
            backgroundColor:"DodgerBlue",
            padding:"15px",
            fontFamily: "Arial"
        }

        return (
            <div>
                <h1 style= {myStyle}>CamelCase Property</h1>
                <h1 style= {this.state.orangeStyle}>CamelCase Property</h1>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render( <MyHeader3/>, document.getElementById('root-3'));



/* CSS StyleSheet 
==================*/

class MyHeaderExternalCSS extends React.Component {
    // App.css file
    render() {
        return (
          <div>
            <h1> body styled in external CSS</h1>
            <hr/>
          </div>
        );
    }
}

ReactDOM.render( <MyHeaderExternalCSS />, document.getElementById('root-4'));




/* CSS Modules
================

CSS Modules are convenient for components that are placed in separate files.

The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.

Create the CSS module with the '.module.css' extension. */

class UsingCSSModule extends React.Component {
    render() {
        return(
            <div>
                <h1 className= {styles.bigblue}> Using CSS Module</h1>
            </div>
        );
    }
}

ReactDOM.render( < UsingCSSModule />, document.getElementById('root-5'));

ReactDOM.render( <div> < CarClass /> <CarFunction/> </div>, document.getElementById('root-6'));

