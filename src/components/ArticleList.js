import React, {Component} from 'react'
import PropTypes from 'prop-types'
import accordeonOpen from '../decorators/accordeonOpen'
import Article from './Article'
import {connect} from 'react-redux'

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

ArticleList.propTypes = {
  // from connect
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
  })).isRequired,
  // from accordeon
  openItemId: PropTypes.string,
  toggleOpen: PropTypes.func.isRequired,
}

export default connect((state) => ({
  articles: state.articles
}))(accordeonOpen(ArticleList))
