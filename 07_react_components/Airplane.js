
import React, { Component } from 'react';

class Airplane extends Component {
    render() {
      return (
          <div>
            <hr/>
              <h2>Airplanes can fly !</h2>
              <Helicopter/>
          </div>
      );
    }
}
  export default Airplane;


class Helicopter extends Component {
    render() {
      return <h2>As Helicopter we also fly in the air</h2>;
    }
}