import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES, LOAD_ARTICLE, START,
  SUCCESS, FAIL} from '../constants'
import {OrderedMap, Record} from 'immutable'
import {arrToMap} from '../helpers'

const ArticleRecord = new Record({
  id: undefined,
  title: '',
  text: undefined,
  loading: false,
  comments: []
})

const ReducerState = new Record({
  loading:  false,
  loaded:   false,
  entities: new OrderedMap({})
})
const defaultState = new ReducerState()

export default (articles = defaultState, action) => {
  const {type, payload, response} = action

  switch (type) {
    case DELETE_ARTICLE:
      // const {[payload.id]: _, ...newArticles} = articles
      console.log('DEL', payload.id)
      return articles.deleteIn(['entities', payload.id])
    case ADD_COMMENT:
      return articles.updateIn(
        ['entities', payload.articleId, 'comments'],
        comments => comments.concat(payload.id)
      )
    case LOAD_ARTICLES + START:
      return articles.set('loading', true)
    case LOAD_ARTICLES + SUCCESS:
      return articles
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
    case LOAD_ARTICLE + START:
      return articles.setIn(['entities', payload.id, 'loading'], true)
    case LOAD_ARTICLE + SUCCESS:
      return articles.setIn(['entities', payload.id],
        new ArticleRecord(payload.response))
    default:
      return articles
  }
}
