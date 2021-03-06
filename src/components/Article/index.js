import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import toggleOpen from '../../decorators/toggleOpen'
import CommentList from '../CommentList'
import {CSSTransitionGroup} from 'react-transition-group'
import './style.css'
import {deleteArticle, loadArticle} from '../../actions'
import Loader from '../Loader'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      loading: PropTypes.bool,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  state = {
    updateIndex: 0
  }

  componentWillReceiveProps({isOpen, loadArticle, article}) {
    if (isOpen && !article.text && !article.loading) loadArticle(article.id)
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    return (
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick = {this.handleDelete}>
          Delete me
        </button>
        <CSSTransitionGroup
          transitionName = 'article'
          transitionAppear
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}
          transitionAppearTimeout = {500}
          component = 'div'
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.isOpen !== nextProps.isOpen
  // }

  handleDelete = () => {
    const {deleteArticle, article} = this.props
    deleteArticle(article.id)
    console.log('---', 'deleting article')
  }

  setContainerRef = ref => {
    this.container = ref
    // console.log('----', ref)
  }
  getBody = () => {
    const {article, isOpen} = this.props
    if (!isOpen) return null
    if (article.loading) return <Loader />
    return (
      <section>
        {article.text}
        <button onClick = {this.updateIndex}>
          Update
        </button>
        <CommentList
          ref = {this.setCommentListRef}
          comments = {article.comments}
          articleId = {article.id}
        />
      </section>
    )
  }
  setCommentListRef = ref => {
    ref
    // console.log('----', ref)
  }
  updateIndex = () => {
    this.setState({updateIndex: this.state.updateIndex + 1})
  }

  // Good callbacks
  // getDerivedStateFromProps = () => {
  //   console.log('---------', 'receiving props')
  // }
  // componentDidMount = () => {
  //   console.log('-----', `mounted ${this.props.article.id}`)
  // }
  componentDidUpdate = () => {
    console.log('-----', `updated ${this.props.article.id}`)
  }

  // // Deprecated now
  // componentWillReceiveProps(nextProps) {
  //   console.log('-----', this.props.isOpen, nextProps.isOpen)
  // }
  // componentWillMount() {
  //   console.log('-----', 'mounting')
  // }
}

// export default toggleOpen(Article)

export default connect(null, { deleteArticle, loadArticle })(Article)
