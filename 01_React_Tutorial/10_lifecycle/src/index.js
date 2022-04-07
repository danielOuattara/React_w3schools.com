
import React from 'react';
import ReactDOM from 'react-dom';


/* I. MOUNTING 
================*/


/* n°1: constructor()
-------------------- */

class Mounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red', fontSize : "15px" };
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));


/* n°2: getDerivedStateFromProps()
----------------------------------- */
class Mounting2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red', fontSize : "15px" };
    }

    static getDerivedStateFromProps(props, state) {
        return { favoriteColor: props.favcol}
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <hr/>
            </div>
        );
    }
}
ReactDOM.render(< Mounting2 favColor="Yellow" />, document.getElementById('root'));


/* n°3: render()
----------------- */
class Mounting3 extends React.Component {

    render() {
        return (
            <div>
                <h3> This is the Component of render()</h3>
                <hr/>
            </div>
        );
    }
}
ReactDOM.render(< Mounting3 />, document.getElementById('root'));


/* n°4: componentDidMount()
--------------------------- */
class Mounting4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red', fontSize : "15px" };
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor }</h3>
                <hr/>
                <hr/>
            </div>
        );
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState ({ favoriteColor:'Orange'})
        }, 2000)
    }
}

ReactDOM.render( <div>
         <Mounting /> 
        < Mounting2 favcol="Yellow"/>
        < Mounting3 />
        < Mounting4 />
    </div>, document.getElementById('root-1')
);
//==========================================================================


/* II. UPDATE
================*/

/* n°1: getDerivedStateFromProps()
----------------------------------- */

class Updating11 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red'};
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue'})
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <button type='button' onClick={this.changeColor} >Click</button>
            </div>
        )
    }
}

// ---
class Updating12 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red'};
    }

    static getDerivedStateFromProps(props,state) {
        return {favoriteColor: props.favcol};
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue'})
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <button type='button' onClick={this.changeColor} >Click</button>
                <hr/>
            </div>
        )
    }
}


/* n°2: shouldComponentUpdate()
--------------------------------- */

class Updating21 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red'};
    }

    shouldComponentUpdate() {
        return false;
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue'})
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <button type='button' onClick={this.changeColor} >Click</button>
            </div>
        )
    }
}


class Updating22 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red'};
    }

    shouldComponentUpdate() {
        return true;
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue'})
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <button type='button' onClick={this.changeColor} >Click</button>
                <hr/>
            </div>
        )
    }
}


/* n°3: render()
---------------- */

class Updating3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {favoriteColor: 'red'};
    }

    changeColor = () => {
        this.setState({favoriteColor: 'blue'});
    }

    render() {
        return (
            <div>
                <h3> My favorite Color is {this.state.favoriteColor}</h3>
                <button type='button' onClick={this.changeColor}>Click</button>
                <hr/>
            </div>
        );
    }
}


/* n°4: getSnapshotBeforeUpdate() & componentDidUPdate()
-------------------------------------------------------- */


class Updating4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {favoriteColor: 'red'};
    }

    componentDidMount() {
        setTimeout( ()=> {
            this.setState( {favoriteColor: 'yellow'})
        }, 2000)
    }

    getSnapshotBeforeUpdate( prevProps, prevState) {
        document.getElementById("div1").innerHTML =
           "Before the update, the favorite color was " + prevState.favoriteColor;    
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
            "The updated favorite color is " + this.state.favoriteColor;
    }

    render() {
        return (
            <div>
                <h3>My favortie color is {this.state.favoriteColor}</h3>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}

/* n°5: componentDidUPdate()
-------------------------------------------------------- */

class Updating5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 2000)
      }
      componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      render() {
        return (
          <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="mydiv"></div>
          </div>
        );
      }
}



ReactDOM.render( 
    <div>
        < Updating11 favcol='Yellow' />
        < Updating12 favcol='Yellow' />
        < Updating21 />
        < Updating22 />
        < Updating3 />
        < Updating4 />
        < Updating5 />
    </div>, document.getElementById('root-2')
);


//==========================================================================


/* II. UNMOUTING
==================*/

class UnMounting extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: 'true'};
    }

    deleteComponent = () => {
        this.setState({ show: false});
    }

    render() {

        let myComponent;
        if (this.state.show) {
            myComponent = < Child />;
        }
        return (
            <div>
                {myComponent}
                <button type='button' onClick= {this.deleteComponent}>Delete Component</button>
            </div>
        )
    }
}


class Child extends React.Component {

    componentWillUnmount() {
        alert ("THe component -- Unmounting -- is about to be unmounted !");
    }

    render() {
        return (
            <div>LifeCycle Terminated</div>
        )
    }
}

ReactDOM.render( 
    <div>
        < UnMounting />
    </div>, document.getElementById('root-3')
);

