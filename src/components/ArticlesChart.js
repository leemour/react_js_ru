import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ArticlesChart extends Component {
  static propTypes = {

  }

  componentDidMount() {
    // d3 works with this.refs.container
  }

  componentWillReceiveProps(nextProps) {
    // update chart for new articles
  }

  componentWillUnmount() {
    // cleanup
  }

  render() {
    return (
      <div ref = "chart" />
    )
  }
}
