import './App.css';
import React, { useState } from 'react';

const answers = ["No", "Yes", "Most likely", "Not sure", "Don't count on it", "You can count on it", "Absolutely", "Concentrate and ask again", "Ask again in a few minutes", "Better not to tell you now", "It is certain"]

function App() {

const [answer, setAnswer] = useState("")
const [isClicked, setIsClicked] = useState(false)

const handleClick = () => {
  setIsClicked(true)
  setAnswer("")
  setTimeout( () => {
    setIsClicked(false)
    getRandomAnswer()
  }, 1000)
}

const getRandomAnswer = () => {
  setAnswer(answers[Math.floor(Math.random()*answers.length)])
}

  return (
    <div className="App">

      <h4> They all come to me... seeking advice ...</h4>

      <h6> If you're brave enough to know your fortune, ask the magic 8-ball a question and shake it... </h6>

      <button className="button" onClick={handleClick}> Shake </button>

      <div className= { isClicked ? 'animation': null } id="magicalToy">
        <div className="ball">

          <div className="eightCircle">
            <div className="triangle">
              <p className='text'> {answer} </p>
            </div>
          </div>
          
          <div className="shadow" />

        </div>
      </div>

    </div>
  );
}

export default App;

