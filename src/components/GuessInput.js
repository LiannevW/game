import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guessAction from '../action/guess'

class GuessInput extends PureComponent {
  state = { value: ''}

  onInputChange(event) {
    if (event.key === 'Enter') {
    this.props.guess(event.target.value.toLowerCase())

    return this.setState({
      value: ''
    })
  }

  this.setState({
  value: event.target.value
  })
}

  render() {
    return (
      <div>
        <div>
          <label>
          It is your trun to guess:
          </label>
        </div>
        <div>
          <input
            value = {this.state.value}
            onKeyUp = {this.onInputChange.bind(this)}
            onChange = {this.onInputChange.bind(this)}
            placeholder = "Type your guess..."
          />
        </div>
      </div>
    )
  }
}

export default connect(null, { guess: guessAction })(GuessInput)
