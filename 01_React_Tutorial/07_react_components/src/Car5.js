
import React from 'react';

class Car5 extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    
    render() {
      return (
            <div>
                <h2>I am a {this.state.color} Car!</h2>
                <h2> My brand is {this.props.model}</h2>
            </div>
      );
    }
  }

  export default Car5;