import {DELETE_ARTICLE} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (comments = commentsMap, action) => {
  const {type, payload} = action

  switch (type) {
  }

  return comments
}
