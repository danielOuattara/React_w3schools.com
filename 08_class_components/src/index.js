
import React from "react";
import ReactDOM from "react-dom"; 
import Airplane from "./Airplane";

// Class componnent 

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

ReactDOM.render( <Car/>, document.getElementById("root-1") );


// Component Constructor

class Car2 extends React.Component {
  constructor(prop) {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a  <span style={{color: this.state.color}}>{this.state.color} Car !</span></h2>;
  }
}

ReactDOM.render( <Car2/>, document.getElementById("root-2") );


// Props

class Car3 extends React.Component {
  render() {
    return <h2>I am a  <span style={{color: this.props.color}}> Car !</span></h2>;
  }
}

ReactDOM.render( <Car3 color="green"/>, document.getElementById("root-3") );


// Props in the Constructor

class Car4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a  <span style={{color: this.props.color}}> Car !</span></h2>;
  }
}

ReactDOM.render( <Car4 color="orange"/>, document.getElementById("root-4") );



// Components in Components

class SuperCar extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class SuperGarage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <SuperCar />
      </div>
    );
  }
}

ReactDOM.render(<SuperGarage />, document.getElementById('root-5'));



// Components in Files

class Airport extends React.Component {
  render() {
    return (
      <div style={{border: "2px solid grey", width:"50vw", textAlign:"center", padding: "10px"}}>
         <h2>Welcome to Lufthansa</h2>
         <Airplane />
      </div>
    );
  }
}

ReactDOM.render(<Airport />, document.getElementById('root-6'));



//  React Class Component State

class NiceCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

ReactDOM.render(<NiceCar />, document.getElementById('root-7'));


// Using the state Object

class NiceCar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My nice car is a  {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<NiceCar2 />, document.getElementById('root-8'));


// Changing the state Object

class NiceCar3 extends React.Component {
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
    this.setState({
      color: " blue",
      year: 1974
    });
  }
  render() {
    return (
      <div>
        <h1>My nice car is a {this.state.brand}</h1>
        <p>
          It is a <span style={{color: this.state.color}}>{this.state.color} {this.state.model} </span>
          
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<NiceCar3 />, document.getElementById('root-9'));