import {createSelector} from 'reselect'

const filtersGetter   = state => state.filters
const arcitclesGetter = state => state.articles.entities
const commentsGetter  = state => state.comments
const commentIdGetter = (state, props) => props.id

export const filteredArticlesSelector = createSelector(
  filtersGetter, arcitclesGetter,
  (filters, articles) => {
    const {selected, dateRange: {from, to}} = filters
    // console.log('---', 'reselect articles')

    // if (selected.length > 0) {
    //   console.log('if')
    //   let selectedArticles = selected.reduce((acc, id) => {
    //     acc[id] = articles[id]
    //     return acc
    //   }, {})
    // } else {
    //   let selectedArticle = articles
    //   console.log('else', selectedArticles)
    // }
    // console.log('before', selectedArticles)

    return articles.filter(article => {
      if (selected.length && !selected.includes(article.id)) return false
      const published = Date.parse(article.date)
      if ((from && published < from) || (to && published > to)) return false
      return true
    })
  }
)

export const commentSelectorFactory = () => createSelector(
  commentsGetter, commentIdGetter,
  (comments, id) => {
    console.log('---', 'reselect comment')
    return comments[id]
  }
)
