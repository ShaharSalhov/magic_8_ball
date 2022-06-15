import './App.css';
import React, { useState } from 'react';

const answers = ["No", "Yes", "Most likely", "Not sure", "Don't count on it", "You can count on it", "Absolutely", "Concentrate and ask again", "Ask again in a few minutes", "Better not to tell you now", "It is certain"]

function App() {

const [answer, setAnswer] = React.useState("")

const handleClick = () => {
  getRandomAnswer()
}

const getRandomAnswer = () => {
  setAnswer(answers[Math.floor(Math.random()*answers.length)])
}

  return (
    <div className="App">

      <h4> They all come to me... seeking advice ...</h4>

      <h6> If you're brave enough to know your fortune, ask the magic 8-ball a question and shake it... </h6>

      <div className='magicalToy'>
        <div className="ball">
          
          <div className="eightCircle">
            <div className="triangle" />
          </div>
          <p className='text'>{answer}</p>
          
          <div className="shadow" />

        </div>
      </div>

      <button onClick={handleClick}> Shake </button>

    </div>
  );
}

export default App;

