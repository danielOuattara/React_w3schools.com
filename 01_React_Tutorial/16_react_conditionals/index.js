
/* React Conditional Rendering
================================

In React, you can conditionally render components.

There are several ways to do this.


if Statement
=============

We can use the if JavaScript operator to decide which component to render.


function MissedGoal() {
  return <h1>MISSED!</h1>;
}


function MadeGoal() {
  return <h1>Goal!</h1>;
}


Now, we'll create another component that chooses which component to render based on a condition:


function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);


Try changing the isGoal attribute to true:


ReactDOM.render(
  <Goal isGoal={true} />,
  document.getElementById('root')
);



Logical && Operator
========================

Another way to conditionally render a React component is by using the && operator.


We can embed JavaScript expressions in JSX by using curly braces:


function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
ReactDOM.render(
  <Garage cars={cars} />,
  document.getElementById('root')
);

If cars.length is equates to true, the expression after && will render.


Try emptying the cars array:

const cars = [];
ReactDOM.render(
  <Garage cars={cars} />,
  document.getElementById('root')
);



Ternary Operator
====================

Another way to conditionally render elements is by using a ternary operator.

condition ? true : false

We will go back to the goal example.
Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:


function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);

*/