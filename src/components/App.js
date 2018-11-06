import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    return (
      <div>
        <UserForm articles = {this.props.articles} />
        <ArticleList
          articles = {this.props.articles}
          defaultOpenId = {this.props.articles[0].id}
        />
        <ArticlesChart articles = {this.props.articles} />
      </div>
    )
  }
}
