import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import articles from '../fixtures'
import logger from '../middlewares/logger'
import idGenerator from '../middlewares/idGenerator'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, api, idGenerator, logger)

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store
