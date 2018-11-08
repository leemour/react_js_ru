import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC/'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick = {this.handleIncrement} >Increment</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.increment()
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.count
//   }
// }
// const mapToDispatch = { increment }
// const decorator = connect(mapStateToProps, mapToDispatch)
// export default decorator(Counter)

export default connect((state) => ({
  counter: state.count
}), { increment })(Counter)
