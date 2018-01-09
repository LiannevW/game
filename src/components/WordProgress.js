import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class WordProgress extends PureComponent {
  render() {
    return (
        <p>{this.props.progress}</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    progress: state.word
      .split("")
      .map((letter) => {
        if (state.guesses.includes(letter)) {
          return letter
        }
          return "_"
        })
        .join(" ")
  }
}

export default connect(mapStateToProps)(WordProgress)
