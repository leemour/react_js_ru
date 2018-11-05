import React, {Component} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentList from './CommentList'

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    return (
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  setContainerRef = ref => {
    this.container = ref
    // console.log('----', ref)
  }
  getBody = () => {
    const {article, isOpen} = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <CommentList comments = {article.comments} ref = {this.setCommentListRef}/>
      </section>
    )
  }
  setCommentListRef = ref => {
    ref
    // console.log('----', ref)
  }

  // getDerivedStateFromProps = () => {
  //   console.log('---------', 'receiving props')
  // }
  // componentDidMount = () => {
  //   console.log('-----', 'mounted')
  // }
  // componentDidUpdate = () => {
  // }

  // // Deprecated now
  // componentWillReceiveProps(nextProps) {
  //   console.log('-----', this.props.isOpen, nextProps.isOpen)
  // }
  // componentWillMount() {
  //   console.log('-----', 'mounting')
  // }
}

// export default toggleOpen(Article)
