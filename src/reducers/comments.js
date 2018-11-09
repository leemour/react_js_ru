import {ADD_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrToMap} from '../helpers'

const commentsMap = arrToMap(defaultComments)

export default (comments = commentsMap, action) => {
  const {type, payload} = action

  switch (type) {
    case ADD_COMMENT:
      return { ...comments, [payload.id]: payload.comment }
    default:
      return comments
  }
}
