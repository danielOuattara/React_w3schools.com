// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// -------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';
const myelement = (
  <table>
    <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table> 
);

ReactDOM.render(myelement, document.getElementById('root'));