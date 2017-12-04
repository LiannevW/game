import React, { Component } from 'react';
import './App.css';
import WrongGuesses from './components/WrongGuesses'
import VisualProgress from './components/VisualProgress'
import WordProgress from './components/WordProgress'
import GuessInput from './components/GuessInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>

        <WrongGuesses />

        <VisualProgress />

        <WordProgress />

        <GuessInput />

    </div>
    );
  }
}

export default App;
