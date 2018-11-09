import {createSelector} from 'reselect'

const filtersGetter   = state => state.filters
const arcitclesGetter = state => state.articles
const commentsGetter  = state => state.comments
const commentIdGetter = (state, props) => props.id

export const filteredArticlesSelector = createSelector(
  filtersGetter, arcitclesGetter,
  (filters, articles) => {
    const {selected, dateRange: {from, to}} = filters
    // console.log('---', 'reselect articles')

    return articles.filter((article) => {
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
    return comments.find((comment) => comment.id === id)
  }
)
