import React, {Component} from 'react'
import PropTypes from 'prop-types'
import accordeonOpen from '../decorators/accordeonOpen'
import Article from './Article'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'
import {loadArticles} from '../actions'
import Loader from './Loader'

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.object.isRequired,
    // from accordeon
    openItemId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {loading, loaded, loadArticles} = this.props
    if (!loaded && !loading) loadArticles()
  }

  render() {
    const {loading, articles, openItemId, toggleOpen} = this.props
    if (loading) return <Loader />
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

export default connect((state) => {
  return {
    articles: filteredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  }
}, { loadArticles })(accordeonOpen(ArticleList))
