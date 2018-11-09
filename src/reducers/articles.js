import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'

const articlesMap = arrToMap(defaultArticles)

export default (articles = articlesMap, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE:
      const {[payload.id]: _, ...newArticles} = articles
      return newArticles
    case ADD_COMMENT:
      const comments = [...articles[payload.articleId].comments, payload.id]
      const updatedArticle = {...articles[payload.articleId], comments }
      // return Object.assign({}, articles, {[payload.articleId]: updatedArticle})
      return {...articles, [payload.articleId]: updatedArticle }
    default:
      return articles
  }
}
