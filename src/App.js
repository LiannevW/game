import React, { Component } from 'react';
import './App.css';
import WrongGuesses from './components/WrongGuesses'
import VisualProgress from './components/VisualProgress'
import WordProgress from './components/WordProgress'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>

        <WrongGuesses />

        <VisualProgress />

        <WordProgress />


        <div className="letterInput"></div>

        <label> It is your trun to guess:</label>
            <input type="text" placeholder="Guess a letter!"  />

      </div>
    );
  }
}

export default App;
