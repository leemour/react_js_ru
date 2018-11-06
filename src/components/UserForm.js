import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

export default class UserForm extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  state = {
    userName: '',
    selected: null
  }

  render() {
    const options = this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <label>Name</label>
        <input type="text"
          value = {this.state.userName}
          onChange = {this.handleInputChange}
        />
        <Select
          options = {options}
          value = {this.state.selected}
          onChange = {this.changeSelected}
          multi
        />
      </div>
    )
  }

  handleInputChange = (ev) => {
    this.setState({userName: ev.target.value})
  }

  changeSelected = (selected) => {
    this.setState({selected})
  }
}
