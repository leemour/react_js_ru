import React, {Component} from 'react'
import PropTypes from 'prop-types'
import accordeonOpen from '../decorators/accordeonOpen'
import Article from './Article'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'
import {loadArticles} from '../actions'

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.object.isRequired,
    // from accordeon
    openItemId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const {articles, openItemId, toggleOpen} = this.props
    const articleElements = articles.toArray().map(article => {
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
}

export default connect(
  (state) => ({ articles: filteredArticlesSelector(state) })
, { loadArticles })(accordeonOpen(ArticleList))
