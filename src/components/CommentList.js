import React, {Component} from 'react'
import toggleOpen from '../decorators/toggleOpen'
import Comment from './Comment'

function CommentList({comments = [], isOpen, toggleOpen}) {
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <ul>
      <button onClick = {toggleOpen}>{text}</button>
      {displayComments(comments, isOpen)}
    </ul>
  )
}

function displayComments(comments, isOpen) {
  if (!isOpen) return null
  if (!comments.length) return <p>No comments yet</p>

  return (
    <ul>
      {comments.map((comment) => {
        return <li key = {comment.id}><Comment comment = {comment}/></li>
      })}
    </ul>
  )
}

export default toggleOpen(CommentList)