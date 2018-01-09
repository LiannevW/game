import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GameOver from './GameOver'
import './VisualProgress.css'

class VisualProgress extends PureComponent {

  renderHangMan() {
    if ((this.props.visualProgress) === 0) {
      return <img className="crossFading" src='http://www.justhangman.com/images/hangman_0.gif' alt = "0"/>
    } else if ((this.props.visualProgress) === 1) {
      return <img className="crossFading" src='http://www.sightwordsgame.com/wp-content/uploads/2011/11/Hangman.jpg' alt="1"/>
    } else if ((this.props.visualProgress) === 2) {
      return <img className="crossFading" src='https://vignette.wikia.nocookie.net/austinally/images/c/ce/Hangman_game.png/revision/latest?cb=20140725033826' alt="2"/>
    } else if ((this.props.visualProgress) === 3) {
      return <GameOver />
    } else {
      return null
    }
  }

  render () {
    return (
        this.renderHangMan()
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visualProgress: state.guesses.filter((letter) => {
      return !state.word.includes(letter)
    }).length
  }
}
export default connect(mapStateToProps)(VisualProgress)
