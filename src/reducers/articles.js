import {DELETE_ARTICLE} from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articles = articlesMap, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE:
      const {[payload.id]: _, ...newArticles} = articles
      return newArticles
    default:
      return articles
  }
}
