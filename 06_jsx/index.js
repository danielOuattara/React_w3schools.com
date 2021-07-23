
import React from 'react';
import ReactDOM from 'react-dom';

const myElement = <h2>I use JSX !</h2>;
ReactDOM.render(myElement, document.getElementById('place_1'));

const myElement2= React.createElement( 'h2', {}, 'I do not use JSX');
ReactDOM.render(myElement2, document.getElementById('place_2'));

const myElement3 = <h3>React is {5 + 5} times better with JSX</h3>;
ReactDOM.render(myElement3, document.getElementById('place_3'));

const myElement4 = (  // large block of elements 
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
ReactDOM.render(myElement4, document.getElementById('place_4'));

const myElement5 = <input type="text" />;
ReactDOM.render(myElement5, document.getElementById('place_5'));

