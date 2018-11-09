import {
  DELETE_ARTICLE,
  INCREMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTED,
  ADD_COMMENT
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
