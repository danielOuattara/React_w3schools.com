
import React from 'react';
import ReactDOM from 'react-dom';


/* 
Just like HTML DOM events, React can perform actions based on user events.
React has the same events as HTML: click, change, mouseover etc.


Adding Events
=================*/

/* React events are written in camelCase syntax:
"onClick" instead of "onclick".

React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()".  */

function shooting() {
    alert('Adding React Event Again !')
}

const myElement = (
    <div>
        <h3> Adding Event</h3>
        <button onClick={shooting}>Shooting</button>
        <hr/>
    </div>
);

ReactDOM.render( myElement, document.getElementById('root-1'));
//-----------------------------------------------------------------------


/* Event Handler
===================*/

/* A good practice is to put the event handler 
   as a method in the component class: */

class EventsHandler1 extends React.Component {

    shoot() {
        alert("Adding React Event")
    }

    render() {
        return (
            <div>
                <h3>Events Handler Regular Function</h3>
                <button onClick={this.shoot}>click</button>
                <hr/>
            </div>
        );
    }
}
ReactDOM.render( <div><EventsHandler1 /> </div>, document.getElementById('root-2'));


/* 

Bind this
==========

For methods in React, the "this" keyword should represent 
the component that owns the method. That is why you should 
use arrow functions. With arrow functions, 'this' will 
always represent the object that defined /owns the arrow 
function. */
class EventsHandler2 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
         email:"daniel@email.com"
      }

      this.shootRegularFunctionBinded = this.shootRegularFunctionBinded.bind(this)
    }

     /* The 'this' keyword refers to the component object */
    shootArrowFunction = () => {
        console.log(this)  // the component
    }
   
    shootRegularFunction() {
        console.log(this)  // undefined
    }
    
    shootRegularFunctionBinded() {
        console.log(this)  // the component
    }

    render() {
        return (
            <div>
                <h3>Events Handler Arrow Function</h3>
                <button onClick={this.shootArrowFunction}>shoot Arrow function</button>
                <button onClick={this.shootRegularFunction}>shoot Regular function</button>
                <button onClick={this.shootRegularFunctionBinded}>shoot Regular function binded</button>
                <hr/>
            </div>
        );
    }
}
ReactDOM.render( <div><EventsHandler2 /> </div>, document.getElementById('root-3'));


/* 
In class components, the "this" keyword is not defined 
by default, so with regular functions the "this" keyword 
represents the object that called the method, which can 
be the global window object, a HTML button, or whatever.

If you must use regular functions instead of arrow functions 
you have to bind "this" to the component instance using the 
bind() method:  */


class EventsHandlerThis extends React.Component {

    constructor(props) {
        super(props);
        this.shoot = this.shoot.bind(this)
    }

    shoot() {
        console.log(this);
    }

 /*
    Thanks to the binding in the constructor function,
    the 'this' keyword now refers to the component object

    Without the binding, the "this" keyword would return "undefined"
*/
    render() {
        return (
            <div>
                <h3>Events Handler:  bind() of this</h3>
                <button onClick={this.shoot}>shoot</button>
                <hr/>
            </div>
        );
    }
}
ReactDOM.render( <div><EventsHandlerThis /></div>, document.getElementById('root-4'));


/* Passing Arguments
===================== */

/* If you want to send parameters into an event handler, you have two options:
    1. Make an anonymous arrow function
    2. Bind the event handler to 'this'.
*/


/* Option 1: Send "Goal" as a parameter to the shoot function, using arrow function */
class PassingArguments extends React.Component {
    shoot = (a) => {
        console.log(a);
    }

    render() {
        return (
            <div>
                <h3>Passing Arg using an arrow anomymous function</h3>
                <button onClick={ () => this.shoot('Goal !!! ')}> Take a shot</button>
            </div>
        )
    }
}

ReactDOM.render( <div> <PassingArguments /> </div>,document.getElementById('root-5'))


/* Option 2: Send "Goal" as a parameter to the shoot function: */
class PassingArguments2 extends React.Component {
    shoot(a) {
        console.log(a);
    }

    render() {
        return(
            <div>
                <h3>Passing Arg by Binding the event handler to this.</h3>
                <button onClick={ () => this.shoot('Goal !!! ')}> Take a shot</button>
                <hr/>
            </div>
        )
    }
}
ReactDOM.render( <div> <PassingArguments2 /> </div>,document.getElementById('root-6'))



/* 
React Event Object
====================

Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event. Notice that once again 
the syntax is different when using arrow functions or not.

With the arrow function you have to send the event argument manually: */
class ReactEventObject extends React.Component {
    constructor(props) {
      super(props)
      this.shoot2 = this.shoot2.bind(this)
    }

    shoot = (a, b) => {
        console.log(b);   /*'b' represents the React event that triggered 
                                the function,  in this case the 'click' event  */
    }

    shoot2(a, b) {
        console.log(b)
    }

    render() {
        return (
            <div>
                <h3>React Event Object: Arrow function</h3>
                <button onClick={(ev) => this.shoot('Goal !!!', ev)}> Take a shot</button>
                {/* <button onClick={this.shoot2.bind("Goal", ev)}> Take a shot 2</button> */} {/* ??? */}
            </div>
    )};
}

ReactDOM.render( <div> <ReactEventObject /> </div>,document.getElementById('root-7'))


/* Without arrow function, the React event object is sent automatically as 
   the last argument when using the bind() method: */


   
class ReactEventObject2 extends React.Component {
    shoot = (a, b) => {
        console.log(b.type);   /*'b' represents the React event that triggered 
                            the function,  in this case the 'click' event  */
    }
    render() {
        return (
            <div>
            <h3>React Event Object: bind method</h3>
            <button onClick={ (ev) => this.shoot( this,'Goal !!!')}> Take a shot</button>
        </div>
    )};
}

ReactDOM.render( <div> <ReactEventObject2 /> </div>,document.getElementById('root-8'))