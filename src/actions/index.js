import {
  DELETE_ARTICLE,
  LOAD_ARTICLES,
  LOAD_ARTICLE,
  INCREMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTED,
  ADD_COMMENT,
  START,
  FAIL,
  SUCCESS
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTED,
    payload: { selected }
  }
}

export function addComment(articleId, comment) {
  return {
    type: ADD_COMMENT,
    generateId: true,
    payload: { articleId, comment }
  }
}

export function loadArticles() {
  return {
    type: LOAD_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    setTimeout(() => {
      fetch(`/api/article/${id}`)
        .then(res => res.json())
        .then(response => dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id, response }
        }))
        .catch(error => dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id, error }
        })
      )
    }, 1000)
  }
}
