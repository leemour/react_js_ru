import React, {Component} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import Comment from './Comment'
import CommentForm from './CommentForm'

function CommentList({articleId, comments = [], isOpen, toggleOpen}) {
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick = {toggleOpen}>{text}</button>
      {displayComments(articleId, comments, isOpen)}
    </div>
  )
}

CommentList.propTypes = {
  articleId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
}

function displayComments(articleId, comments, isOpen) {
  if (!isOpen) return null
  if (!comments.length) return <p>No comments yet</p>

  return (
    <div className = 'article-comments'>
      <ul>
        {comments.map((id) => {
          return <li key = {id}><Comment id = {id}/></li>
        })}
      </ul>
      <CommentForm articleId = {articleId} />
    </div>
  )
}

export default toggleOpen(CommentList)
