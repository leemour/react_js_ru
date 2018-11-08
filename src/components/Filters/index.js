import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import DateRange from './DateRange'
import Select from './Select'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <Select />
        <DateRange />
      </div>
    )
  }
}
