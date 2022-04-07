
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
                    <h2>Adding forms</h2>
                    <p>Enter your name : </p>
                    <input type="text"/>
                </form>
                <hr/>
            </div>
        );
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
                    <h2>Handling form</h2>
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

class MyForm2bis extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: ''};
    }

    changeHandler = (event) => {
        this.setState( { username: event.target.value });
        console.log(event);
    }

    render() {
        return(
            <div>
                <form>
                    <h2>Handling form 2bis</h2>
                    <p>Enter your name : </p>
                    <input type="text" onMouseOut={ this.changeHandler }/>
                    <h2>You entered: { this.state.username }</h2>
                </form>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render ( <MyForm2bis />, document.getElementById('root-2bis'));

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
        this.state = { username: ''};
    }

    changeHandler = (event) => {
        this.setState( {username: event.target.value});
    }

    render() {
        let header ='';
        if (this.state.username) {
            header = <h3>{this.state.username} </h3>
        } else {
            header = ' ';
        }

        let header3 = this.state.username ? <h3>{this.state.username} </h3> : ""
        
        let header2 = this.state.username ? this.state.username : ""

        return(
            <div>
                <h2>Conditional rendering:</h2>
                <form>
                    <p>Enter your name : </p>
                    <input type="text" onChange={ this.changeHandler }/>
                </form>
                {header}
                {header2}
                {header3}
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
                    <h2>Submitting Forms</h2>
                    <h3>Hello {this.state.username}</h3>
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

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h2>Multiple Input Fields</h2>

                    <h3>Hello {this.state.username} {this.state.age}</h3>

                    <label htmlFor='username'>Enter your username :</label>
                    <input type='text' name='username' onChange={this.changeHandler} /><br/>

                    <label htmlFor="age">Enter your age : </label>
                    <input type='text' name='age' onChange={this.changeHandler} /><br/>

                    <input type='submit' />
                </form>
                <hr />
            </div>
        );
    }
}

ReactDOM.render( <MyForm5 />, document.getElementById('root-5'));

/* Note: We use the same event handler function for both input fields, 
         we could write one event handler for each, but this gives us 
         much cleaner code and is the preferred way in React. */



/* Validating Form Input
=========================
You can validate form input when the user is typing or you can wait until the form gets submitted. */


class MyForm6 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            age: null,
        }
    }
    changeHandler = (event) => {
        let nameData = event.target.name;
        let valueData = event.target.value;

        if(nameData === "age") {
            if(!Number(valueData)) {
                alert("Your age must be an integer ")
            }
        };

        this.setState({[nameData]: valueData})
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        alert("You're submitting " + this.state.username + '  and ' + this.state.age);
    }

    
    render() {
        return (
            <div>
                <h2>Form validation</h2>
                <form onSubmit={this.submitHandler}>
                    <h3> Hello {this.state.username} {this.state.age}</h3>

                    <label htmlFor="username">Enter your name : </label>
                    <input type="text" name="username" onChange={this.changeHandler} />

                    <label htmlFor="age">Enter your age : </label>
                    <input type="text" name="age" onChange={this.changeHandler} />

                    <input type='submit' />
                </form>
                <hr />
            </div>
        )
    }
}
ReactDOM.render(<MyForm6 />, document.getElementById('root-6'));


/* Below you will see the same example as above, but the validation is done 
   when the form gets submitted instead of when you write in the field. */

class MyForm6Bis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            age: null,
        }
    }
    changeHandler = (event) => {
        let nameData = event.target.name;
        let valueData = event.target.value;
        this.setState({ [nameData]: valueData })
    }

    submitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert(" Your age must be an integer")
        }
        alert("You're submitting " + this.state.username + '  and ' + this.state.age);
    }


    render() {
        return (
            <div>
                <h2>Form validation on submit</h2>
                <form onSubmit={this.submitHandler}>
                    <h3> Hello {this.state.username} {this.state.age}</h3>

                    <label htmlFor="username">Enter your name : </label>
                    <input type="text" name="username" onChange={this.changeHandler} />

                    <label htmlFor="age">Enter your age : </label>
                    <input type="text" name="age" onChange={this.changeHandler} />

                    <input type='submit' />
                </form>
                <hr />
            </div>
        )
    }
}
ReactDOM.render(<MyForm6Bis />, document.getElementById('root-6Bis'));


/* Adding Error Message
========================
Error messages in alert boxes can be annoying, so let's make an error 
message that is empty by default, but displays the error when the user 
inputs anything invalid: */


class MyForm7 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            age: null,
            errorMessage: "",
        };
    }
    changeHandler = (event) => {
        let nameData = event.target.name;
        let valueData = event.target.value;
        let err = "";
        if (nameData === "age") {
            if (valueData !== "" && !Number(valueData)) {
                err = <strong> Your age must be an integer</strong>
            }
        };

        this.setState({ [nameData]: valueData });
        this.setState({ errorMessage: err});
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You're submitting " + this.state.username + '  and ' + this.state.age);
    }


    render() {
        return (
            <div>
                <h2>Adding Error Message</h2>
                <form onSubmit={this.submitHandler}>
                    <h3> Hello {this.state.username} {this.state.age}</h3>

                    <label htmlFor="username">Enter your name : </label>
                    <input type="text" name="username" onChange={this.changeHandler} />

                    <label htmlFor="age">Enter your age : </label>
                    <input type="text" name="age" onChange={this.changeHandler} />

                    <input type='submit' />
                    <p>{this.state.errorMessage}</p>
                </form>
                <hr />
            </div>
        )
    }
}
ReactDOM.render(<MyForm7 />, document.getElementById('root-7'));


/* Textarea
============
The textarea element in React is slightly different from ordinary HTML.

In HTML the value of a textarea was the text between the start tag 
<textarea> and the end tag </textarea>, in React the value of a 
textarea is placed in a value attribute: */


 class MyForm8 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description:""
        };
    }

    changeHandler = (event) => {
        let valueData = event.target.value;
        this.setState({description: valueData})
    }


    submitHandler = (event) => {
        event.preventDefault();
        alert("You're submitting : " + this.state.description);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <p> You entered : {this.state.description}</p>
                    <textarea name="textarea" 
                              id="textarea" cols="30" rows="10" 
                              value={this.state.description}
                              onChange= {this.changeHandler}></textarea>
                    
                    <input type='submit' />
                    <hr />
                </form>
                
            </div>
        )
    };
}

ReactDOM.render(<MyForm8 />, document.getElementById('root-8'));



 class MyForm9 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myCar: "Volvo" };
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You're submitting : " + this.state.myCar);
    }

    changeHandler = (event) => { 
        this.setState({ myCar: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <p> You entered : {this.state.myCar}</p>
                    <select name="myCar" id="myCar" /* value={this.state.myCar} */
                            onChange={this.changeHandler}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                    <input type='submit' />
                </form>
            </div>
        )
    };
}

ReactDOM.render(<MyForm9 />, document.getElementById('root-9'));