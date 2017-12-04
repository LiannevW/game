import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class VisualProgress extends PureComponent {
  render () {
    const progress = this.props.visualProgress

    return (
      <p>{ progress }</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visualProgress: state.word
    //eventually this must not show a word but our progress
  }
}
export default connect(mapStateToProps)(VisualProgress)
