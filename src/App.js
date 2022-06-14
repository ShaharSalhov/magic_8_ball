import './App.css';
import React, { useState } from 'react';

const answers = ["No", "Yes", "Most likely", "Not sure", "Don't count on it", "You can count on it", "Absolutely", "Concentrate and ask again", "Ask again in a few minutes", "Better not to tell you now"]

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
        <h6> Ask the magic 8-ball a question and shake it</h6>

        <img src={"../public/ballPic.png"} className="pic" alt="pic" />

        <p> {answer} </p>

        <button onClick={handleClick}> Shake </button>

    </div>
  );
}

export default App;