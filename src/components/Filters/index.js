import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

export default class Filters extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  state = {
    userName: '',
    selected: null,
    selectedDays: {
      from: null,
      to:   null
    }
  }

  MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]
  WEEKDAYS_LONG = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
  WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

  render() {
    const options = this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
    const {from, to} = this.state.selectedDays
    return (
      <div>
        <label>Name</label>
        <input type="text"
          value = {this.state.userName}
          onChange = {this.handleInputChange}
        />
        <Select
          options = {options}
          value = {this.state.selected}
          onChange = {this.changeSelected}
          multi
        />
        <DayPicker
          locale = 'ru'
          months = {this.MONTHS}
          weekdaysLong = {this.WEEKDAYS_LONG}
          weekdaysShort = {this.WEEKDAYS_SHORT}
          onDayClick = {this.handleDayClick}
          selectedDays = {[from, { from, to }]}
        />
        <p>
          Выбраны даты с {from ? from.toLocaleDateString('ru') : '__'} {' '}
          по {to ? to.toLocaleDateString('ru') : '__'} {' '}
          <button className="link" onClick={this.handleResetClick}>
            Reset
          </button>
        </p>
      </div>
    )
  }

  handleInputChange = (ev) => {
    this.setState({userName: ev.target.value})
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state.selectedDays);
    this.setState({selectedDays: range})
  }

  handleResetClick = () => {
    this.setState({selectedDays: {from: null, to: null}});
  }

  changeSelected = (selected) => {
    this.setState({selected})
  }
}
