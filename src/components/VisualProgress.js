import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class VisualProgress extends PureComponent {
  render () {

  const count = 6 - this.props.visualProgress

    return (
      <p>{ count }</p>
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
