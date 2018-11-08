import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {changeSelection} from '../../actions'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired
  }

  handleChange = (selected) => {
    console.log(this.props.selected, selected.map(option => option.value))
    this.props.changeSelection(
      selected.map(option => option.value)
    )
  }
  render() {
    const { articles, selected } = this.props
    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div className = 'article-select'>
        <Select
          options = {options}
          value = {selected}
          onChange = {this.handleChange}
          multi = {true}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  selected: state.filters.selected,
  articles: state.articles
}), { changeSelection })(Filters)
