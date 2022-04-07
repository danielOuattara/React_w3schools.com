import {useState} from "react";
import ReactDOM from "react-dom";


/* 
React useState Hook
======================
The React useState Hook allows us to track state 
in a function component.

State generally refers to data or properties that 
need to be tracking in an application.

Import useState
================
To use the useState Hook, we first need to import it 
into our component. 
*/

// import { useState } from "react";


/* Notice that we are destructuring useState from react 
as it is a named export. */


/* Initialize useState
=======================
We initialize our state by calling useState 
in our function component.

useState accepts an initial state and returns two values:

> The current state.
> A function that updates the state.
*/


// import { useState } from "react";

// function FavoriteColor() {
//   const [color, setColor] = useState("");
// }


/* Notice that again, we are destructuring the 
returned values from useState.

> The first value, color, is our current state.
> The second value, setColor, is the function 
  that is used to update our state.

These names are variables that can be named anything 
you would like.

Lastly, we set the initial state to an empty string: useState("") 
*/




function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
