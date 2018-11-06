import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class UserForm extends Component {
  static propTypes = {
  }

  state = {
    userName: ''
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input type="text"
          value = {this.state.userName} onChange = {this.handleInputChange} />
      </div>
    )
  }

  handleInputChange = (ev) => {
    this.setState({userName: ev.target.value})
  }
}
