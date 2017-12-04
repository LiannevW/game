import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class WrongGuesses extends PureComponent {
  render() {
    const guesses = this.props.wrongGuesses.join(' ')

    return (
        <p> { guesses }</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wrongGuesses: state.guesses.filter((letter) => {
      return !state.word.includes(letter)
    })
  }
}

export default connect(mapStateToProps)(WrongGuesses)
