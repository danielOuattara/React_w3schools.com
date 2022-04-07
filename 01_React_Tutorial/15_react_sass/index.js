
import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss';

/* Styling React Using CSS
==========================

There are many ways to style React with CSS, this tutorial will 
take a closer look at "inline styling", and "CSS stylesheet".=*/


/* Inline Styling
================== */

class  MyHeader extends React.Component{

    render() {
        return (
            <div>
                <h1> Hello SCSS Style</h1>
                <h1 className="title-2"> Hello SCSS Style</h1>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render( <MyHeader/>, document.getElementById('root-1'));
