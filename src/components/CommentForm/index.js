import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../actions'
import './style.css'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
  }

  state = {
    text: '',
    user: ''
  }
  LENGTH_LIMITS = {
    user: {
      min: 5,
      max: 15
    },
    text: {
      min: 20,
      max: 50
    },
  }

  render() {
    return (
      <form className = "comment-form"
        onSubmit = {this.handleFormSubmit} >
          <input type="text"
            className = {this.getClassName('user')}
            value = {this.state.user}
            onChange = {this.handleInputChange('user')}
          />
          <textarea
            className = {this.getClassName('text')}
            value = {this.state.text}
            onChange = {this.handleInputChange('text')}
          />
          <input type = "submit"
            value = "Comment"
          />
      </form>
    )
  }
  getClassName = (type) => {
    let klass = "comment-form__input"
    if (!this.isValidInput(type)) {
      klass += ` ${klass}--invalid`
    }
    return klass
  }
  handleInputChange = (type) => (ev) => {
    this.setState({
      [type]: ev.target.value
    })
  }
  isValidInput = (type) => {
    const value = this.state[type]
    if (value === '') return true
    return (value.length >= this.LENGTH_LIMITS[type].min &&
      value.length <= this.LENGTH_LIMITS[type].max)
  }
  handleFormSubmit = (ev) => {
    ev.preventDefault()
    const comment = {
      user: this.state.user,
      text: this.state.text
    }
    this.props.addComment(this.props.articleId, comment)
  }
}

export default connect(null, {addComment})(CommentForm)
