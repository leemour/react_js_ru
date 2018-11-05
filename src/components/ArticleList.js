import React, {Component} from 'react'
import accordeonOpen from '../decorators/accordeonOpen'
import Article from './Article'

function ArticleList({articles = [], openItemId, toggleOpen}) {
  const articleElements = articles.map((article) => {
    return (
      <li key = {article.id}>
        <Article
          article = {article}
          isOpen = {article.id === openItemId}
          toggleOpen = {toggleOpen.bind(this, article.id)}
        />
      </li>
    )
  })

  return (
    <ul>
      {articleElements}
    </ul>
  )
}

export default accordeonOpen(ArticleList)
