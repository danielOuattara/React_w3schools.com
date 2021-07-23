
import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './ClassComponent.js'
import FunctionComponent from './FunctionComponent.js'
import Car3 from './Car3.js'
import Car4 from './Car4.js'
import Car5 from './Car5.js'

import Airplane from './Airplane.js'
import Animal from './Animal.js'

ReactDOM.render(<ClassComponent />, document.getElementById('root-1'));

ReactDOM.render(<FunctionComponent />, document.getElementById('root-2'));


ReactDOM.render(<Car3 />, document.getElementById('root-3'));
ReactDOM.render(<Car4 />, document.getElementById('root-4'));
ReactDOM.render(<Car5 model="Ford 1965"/>, document.getElementById('root-5'));


ReactDOM.render(< Airplane />, document.getElementById('root-5'));
ReactDOM.render(< Animal />, document.getElementById('root-6'));
