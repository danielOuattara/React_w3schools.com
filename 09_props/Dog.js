
import React, { Component } from 'react';

class Dog extends Component {
   
    render() {
      return <h2>Dogs Run very { this.props.attitude }</h2>;
    }
  }

export default Dog;