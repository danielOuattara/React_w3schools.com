
import React from 'react';
import ReactDOM from 'react-dom';


/* Adding Forms in React
==========================

You add a form with React like any other element: */

class MyForm extends React.Component{
    render() {
        return (
            <div>
               <form>
                    <h2>Hello form</h2>
                    <p>Enter your name : </p>
                    <input type="text"/>
                </form>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render( <MyForm/>, document.getElementById('root-1'));



/* Handling Forms
================== */

class MyForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: ''};
    }

    changeHandler = (event) => {
        this.setState( { username: event.target.value });
    }

    render() {
        return(
            <div>
                <form>
                    <h2>Hello form</h2>
                    <p>Enter your name : </p>
                    <input type="text" onChange={ this.changeHandler }/>
                    <h2>You entered: { this.state.username }</h2>
                </form>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render ( <MyForm2 />, document.getElementById('root-2'));

/* 
NOTE: 
 --> You must initialize the state in the constructor 
     method before you can use it.

 --> You get access to the field value by using the 
     "event.target.value syntax"
 */


     
/* Conditional Rendering
========================  */

class MyForm3 extends React.Component {

    constructor(props) {
        super(props);
        this.state= { username: ''};
    }

    changeHandler = (event) => {
        this.setState( {username: event.target.value});
    }

    render() {

        let header ='';
        if (this.state.username) {
            header = <h1> Hello {this.state.username} </h1>
        } else {
            header = ' ';
        }

        return(
            <div>
                <form>
                    <p>Enter your name : </p>
                    <input type="text" onChange={ this.changeHandler }/>
                </form>
                {header}
                <hr/>
            </div>

        )
    }
}

ReactDOM.render ( <MyForm3 />, document.getElementById('root-3'));



/* Submitting Forms 
====================

You can control the submit action by adding 
an event handler in the onSubmit attribute:
*/

class MyForm4 extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: ''};
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You're submitting " + this.state.username);
    }

    changeHandler = (event) => {
        this.setState( {username: event.target.value} );
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Hello {this.state.username}</h1>
                    <p>Enter your name, and submit:</p>
                    <input type='text' onChange={this.changeHandler} />
                    <input type='submit' />
                </form>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render( <MyForm4 />, document.getElementById('root-4'));

/* Note that we use event.preventDefault() to prevent the form 
   from actually being submitted. */



   /* Multiple Input Fields
   ========================= */

   
   class MyForm5 extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            username: '',
            age: null,
        };
    }

    changeHandler = (event) => {
        let nameData = event.target.name;
        let valueData = event.target.value;
        this.setState({[nameData]: valueData})
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You're submitting " + this.state.username + ' ' + this.state.age);
    }

    // changeHandler = (event) => {
    //     this.setState( {username: event.target.value} );
    // }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Hello {this.state.username} {this.state.age}</h1>

                    <label htmlFor='username'>Enter your username :</label>
                    <input type='text' name='username' onChange={this.changeHandler} /><br/>

                    <label htmlFor="age">Enter your age : </label>
                    <input type='text' name='age' onChange={this.changeHandler} /><br/>

                    <input type='submit' />
                </form>
            </div>
        );
    }
}

ReactDOM.render( <MyForm5 />, document.getElementById('root-5'));