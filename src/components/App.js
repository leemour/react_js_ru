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
        <UserForm />
        <ArticleList articles = {this.props.articles} />
        <ArticlesChart articles = {this.props.articles} />
      </div>
    )
  }
}
