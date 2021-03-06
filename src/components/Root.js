import React from 'react'
import PropTypes from 'prop-types'
import store from '../store'
import {Provider} from 'react-redux'
import App from './App'

function Root() {
  return (
    <Provider store = {store} >
      <App />
    </Provider>
  )
}

export default Root
