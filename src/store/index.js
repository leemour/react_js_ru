import {createStore} from 'redux'
import reducer from '../reducers'
import articles from '../fixtures'


const defaultFilter = {
  selectedArticle: null,
  selectedDays: {
    from: null,
    to:   null
  }
}
const store = createStore(reducer, {})

// dev only
window.store = store

export default store
