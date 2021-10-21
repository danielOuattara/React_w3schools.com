import React from 'react';
import ReactDOM from "react-dom";

// React Props

const myelement = <Car brand="Ford" />;

function Car(props) {

    return (
        <> 
          <h2>I am a { props.brand }!</h2>
          <hr/>
        </>
  );
}

ReactDOM.render(myelement, document.getElementById('root-1'));

//--------------------------------------------------------------------

function Car2(props) {
  return (
        <> 
          <h2>I am a { props.brand }!</h2>
          <hr/>
        </>
  );
}

function Garage2() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car2 brand="Ford" />
    </>
  );
}

ReactDOM.render(<Garage2 />, document.getElementById('root-2'));

//--------------------------------------------------------------------

function Car3(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage3() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car3 brand={ carName } />
      <hr/>
    </>
  );
}

ReactDOM.render(<Garage3 />, document.getElementById('root-3'));


function Car4(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage4() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car4 brand={ carInfo } />
    </>
  );
}

ReactDOM.render(<Garage4 />, document.getElementById('root-4'));
