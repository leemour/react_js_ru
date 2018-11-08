import {DELETE_ARTICLE} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

export default (comments = defaultComments, action) => {
  const {type, payload} = action

  switch (type) {
  }

  return comments
}
