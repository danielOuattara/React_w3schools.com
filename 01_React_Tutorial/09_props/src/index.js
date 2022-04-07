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






/*


*/
  
  
function RandomQuote() {
  const data = [
    { id: 1 ,
     author: "Pablo Picasso",
     text:"Everything you can imagine is real.",
    },

    { id: 2,
     author: "Dr. Seuss",
     text:"Sometimes the questions are complicated and the answers are simple.",
    },
    { id: 3 ,
     author: "George Bernard Shaw",
     text:"Life isn't about finding yourself. Life is about creating yourself.",
    },
    { id: 4 ,
     author: "Dr. Seuss",
     text:"Today you are You, that is truer than true. There is no one alive who is Youer than You.",
    },
    { id: 5 ,
     author: "Woody Allen",
     text:"I'm not afraid of death; I just don't want to be there when it happens.",
    },
    { id: 6 ,
     author: "Markus Zusak",
     text:"Sometimes people are beautiful.Not in looks. Not in what they say. Just in what they are.",
    },
    { id: 7 ,
     author: "Albert Einstein",
     text:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    { id: 8 ,
     author: "John Green",
     text:"Some infinities are bigger than other infinities.",
    },
    { id: 9 ,
     author: "Bill Watterson",
     text:"Reality continues to ruin my life.",
    },
    { id: 10 ,
     author: "Stephen Chbosky",
     text:"Things change. And friends leave. Life doesn't stop for anybody.",
    },
 ];
 const [quotes, setquotes] = useState(data);
 const [ randomIndex, setRandomIndex ] = useState(0);
 const [ randomColor, setRandomColor] = useState('#' + Math.random().toString().slice(2, 8));
 
 const handleRandomQuote = ( prevState) => {
   setRandomIndex(prevState => {
     let newRandomIndex = Math.floor(Math.random() * quotes.length);
     if(newRandomIndex === prevState.randomIndex) {
       newRandomIndex += 1
     }
     if(newRandomIndex === quotes.length) {
       newRandomIndex = 0
     }
     randomIndex = newRandomIndex;
     return randomIndex;
   })
   setRandomColor(() => '#' + Math.random().toString().slice(2, 8))
 } 
 
 return (
    <article id="quote-box">
      <h1 
        id="text" 
        style={{color: randomColor}}> 
        <i className="fas fa-quote-left"></i>
        {quotes[randomIndex].text}
      </h1>
      <p 
        id="author" 
        style={{color:randomColor}}>
        - {quotes[randomIndex].author}
      </p>
      <div id="icons-container">
        <a 
          id="tweet-quote"
          style={{backgroundColor:randomColor}}
          href="twitter.com/intent/tweet"
          target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <button 
           id="new-quote" 
           style={{backgroundColor: randomColor}} 
           onClick={handleRandomQuote}>
          New Quote
         </button>
      </div>
    </article>
 );
}

ReactDOM.render(<RandomQuote />, document.getElementById("root"));


