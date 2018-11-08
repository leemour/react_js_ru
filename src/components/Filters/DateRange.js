import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {changeDateRange} from '../../actions'

class Filters extends Component {
  static propTypes = {
    range: PropTypes.object
  }

  handleDayClick = (day) => {
    const {changeDateRange, range} = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }
  handleResetClick = () => {
    const {changeDateRange} = this.props
    changeDateRange({from: null, to: null})
  }

  render() {
    const {from, to} = this.props.range
    return (
      <div className = 'date-range'>
        <DayPicker
          ref = 'datepicker'
          onDayClick = {this.handleDayClick}
          selectedDays = {[from, { from, to }]}
        />
        <p className="date-range__selected-range">
          Selected dates from {from ? from.toLocaleDateString() : '__'} {' '}
          to {to ? to.toLocaleDateString() : '__'} {' '}
          <button className="date-range__reset-button" onClick={this.handleResetClick}>
            Reset
          </button>
        </p>
      </div>
    )
  }
}

export default connect((state) => ({
  range: state.filters.dateRange
}), { changeDateRange })(Filters)
