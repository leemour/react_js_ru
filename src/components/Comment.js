import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Comment({comment}) {
  return (
    <div>
      <p>{comment.text} <strong>by {comment.user}</strong></p>
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired
}

export default connect((state, ownProps) => {
  return {comment: state.comments.find((comment) => comment.id === ownProps.id)}
})(Comment)
