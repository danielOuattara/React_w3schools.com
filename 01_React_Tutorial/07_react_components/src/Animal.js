
import React, { Component } from 'react';
import Dog from './Dog.js'

class Animal extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h2>Some Animals Run Fast !</h2>
                <Dog/>
            </div>
        );
    }
  }

  export default Animal;
