import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES} from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'

export default (articles = {}, action) => {
  const {type, payload, response} = action

  switch (type) {
    case DELETE_ARTICLE:
      const {[payload.id]: _, ...newArticles} = articles
      return newArticles
    case ADD_COMMENT:
      const comments = [...articles[payload.articleId].comments, payload.id]
      const updatedArticle = {...articles[payload.articleId], comments }
      // return Object.assign({}, articles, {[payload.articleId]: updatedArticle})
      return {...articles, [payload.articleId]: updatedArticle }
    case LOAD_ARTICLES:
      return arrToMap(response)
    default:
      return articles
  }
}
