import React, {Component} from 'react'
import PropTypes from 'prop-types'
import accordeonOpen from '../decorators/accordeonOpen'
import Article from './Article'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'

function ArticleList({articles = [], openItemId, toggleOpen}) {
  const articleElements = Object.values(articles).map(article => {
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

ArticleList.propTypes = {
  // from connect
  articles: PropTypes.object.isRequired,
  // from accordeon
  openItemId: PropTypes.string,
  toggleOpen: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ articles: filteredArticlesSelector(state) })
)(accordeonOpen(ArticleList))
