import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES} from '../constants'
import {Map, Record} from 'immutable'
import {arrToMap} from '../helpers'

const ArticleRecord = new Record({
  id: undefined,
  title: '',
  text: undefined,
  comments: []
})

export default (articles = new Map({}), action) => {
  const {type, payload, response} = action

  switch (type) {
    case DELETE_ARTICLE:
      // const {[payload.id]: _, ...newArticles} = articles
      return articles.delete(payload.id)
    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, 'comments'], comments => {
        return comments.concat(payload.id)
      })
    case LOAD_ARTICLES:
      return arrToMap(response, ArticleRecord)
    default:
      return articles
  }
}
