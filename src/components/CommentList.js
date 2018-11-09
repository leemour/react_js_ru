import React, {Component} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import Comment from './Comment'
import CommentForm from './CommentForm'

function CommentList({comments = [], isOpen, toggleOpen}) {
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick = {toggleOpen}>{text}</button>
      {displayComments(comments, isOpen)}
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
}

function displayComments(comments, isOpen) {
  if (!isOpen) return null
  if (!comments.length) return <p>No comments yet</p>

  return (
    <div className = 'article-comments'>
      <ul>
        {comments.map((id) => {
          return <li key = {id}><Comment id = {id}/></li>
        })}
      </ul>
      <CommentForm />
    </div>
  )
}

export default toggleOpen(CommentList)
