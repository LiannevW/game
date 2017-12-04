import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>

        <div className="wrongLetters"></div>
        <p>Q R X</p>

        <div className="visualProgress"></div>
        <p>6</p>

        <div className="wordProgress"></div>
        <p>_ _ _ E </p>

        <div className="letterInput"></div>

        <label> It is your trun to guess:</label>
            <input type="text" placeholder="Guess a letter!"  />

      </div>
    );
  }
}

export default App;
