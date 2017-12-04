import React, { Component } from 'react';
import './App.css';
import WrongGuesses from './components/WrongGuesses'
import VisualProgress from './components/VisualProgress'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>

        <WrongGuesses />

        <VisualProgress />

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
