import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import articles from '../fixtures'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store
