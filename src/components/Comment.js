import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
  return (
    <div>
      <p>{comment.text} <strong>by {comment.user}</strong></p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory()
  return (state, ownProps) => {
    return { comment: commentSelector(state, ownProps) }
  }
}

export default connect(mapStateToProps)(Comment)
