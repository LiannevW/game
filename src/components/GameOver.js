import React, { PureComponent } from 'react'

class GameOver extends PureComponent {

  startNewGame() {
    window.location.reload()
  }

  render() {

    return (
      <div>
        <button onClick={this.startNewGame.bind(this)}>Game over! Do you dare to try again?..</button>
      </div>
    )
  }
}

export default GameOver
