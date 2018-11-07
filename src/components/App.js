import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Filters from './Filters'
import Counter from './Counter'

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    return (
      <div>
        <Counter />
        <Filters articles = {this.props.articles} />
        <ArticleList
          articles = {this.props.articles}
          defaultOpenId = {this.props.articles[0].id}
        />
        <ArticlesChart articles = {this.props.articles} />
      </div>
    )
  }
}
