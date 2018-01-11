import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GameOver from './GameOver'
import './VisualProgress.css'

class VisualProgress extends PureComponent {

  renderHangMan() {
    if ((this.props.visualProgress) === 0) {
      return <img className="image" src='http://www.animatedimages.org/data/media/712/animated-number-image-0200.gif' alt = "0"/>
    } else if ((this.props.visualProgress) === 1) {
      return <img className="image" src='https://cdn.dribbble.com/users/105681/screenshots/2763547/5.gif' alt="1"/>
    } else if ((this.props.visualProgress) === 2) {
      return <img className="image" src='http://www.animatedimages.org/data/media/712/animated-number-image-0198.gif' alt="2"/>
    } else if ((this.props.visualProgress) === 3) {
      return <img className="image" src='http://moziru.com/images/number-clipart-animated-11.gif' alt="3"/>
    } else if ((this.props.visualProgress) === 4) {
      return <img className="image" src='https://thumbs.gfycat.com/NaiveFluffyGadwall-small.gif' alt="4"/>
    } else if ((this.props.visualProgress) === 5) {
      return <img className="image" src='https://gifimage.net/wp-content/uploads/2017/10/number-1-gif-12.gif' alt="5"/>
    } else if ((this.props.visualProgress) === 6) {
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
