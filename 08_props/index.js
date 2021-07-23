
import React from 'react';
import ReactDOM from 'react-dom';

import Dog from './Dog.js'


/*  Props 
============== */
class Cat extends React.Component {

    render() {
      return <h2>Cats like hunt {this.props.food} !</h2>;
    }
}

  const cat = < Cat food='mice'/>
  ReactDOM.render(cat, document.getElementById('root-1'));

  // -----------------------------------------------------------------------------------
  
  ReactDOM.render(<Dog attitude='fast'></Dog>, document.getElementById('root-2'));
  ReactDOM.render(<Dog attitude='quickly'/>, document.getElementById('root-3'));
  
  // -----------------------------------------------------------------------------------


 /* Pass Data 
 ==============*/

  class Car2 extends React.Component {
    render() {
        return (
            <div>
               <h2> It is a {this.props.brand}! </h2>
            </div>
        );  
    }
}

class Garage2 extends React.Component {

    render() {
        return(
            <div>
              <h2> Who lives in my Garage ? </h2>
              < Car2 brand="Ford" />
            </div>
        );
    }
}
ReactDOM.render( <Garage2 />, document.getElementById('root-4'));


/* Pass non string data
======================== */

class Car3 extends React.Component {

    render() {
        return (
            <div>
               <h2> I possess {this.props.carNumber} car ! </h2>
            </div>
        );  
    }
}

class Garage3 extends React.Component {

    render() {
        return(
            <div>
              < Car3 carNumber = {2 + 1 }/>
            </div>
        );
    }
}
ReactDOM.render( <Garage3 />, document.getElementById('root-5'));


/* Passing Array Element, Object
=================================== */

class Car4 extends React.Component {
    render() {
        return (
            <div>
               <h2> I drive {this.props.cars} since 1990 </h2>
               <h2> My favorite is {this.props.favorite}. </h2>
               <h2> My other car is {this.props.carInfo}</h2>
               <h2> It was built in {this.props.carYearInfo}</h2>
            </div>
        );  
    }
}

class Garage4 extends React.Component {

    render() {
        const cars = ["BMW "," Audi"," Mercedes"];

        const carInfo = {
            name: "Ford",
            model: "Mustang",
            year:  1968
            };

        const { name, model, year} = carInfo ;

        return(
            <div>
              < Car4 cars = {cars}  
                     favorite = {cars[1]}  
                     carInfo = {name+  ', ' +  model + ', ' + year} 
                     carYearInfo = {year}/>
            </div>
        );
    } 
}
ReactDOM.render( <Garage4 />, document.getElementById('root-6'));



class Airplane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            brand: "Boeing",
            year: 2018
        }
    }

    render() {
        return (
        <div>
            <hr/>
            <h2> I am a {this.props.color} airplane !</h2>
            <h2> I am a {this.state.brand} airplane!</h2>
            <h2> I am a airplane !</h2>
        </div>
        
        );
    }
    }

    ReactDOM.render(<Airplane color="british" />, document.getElementById('root-7'));