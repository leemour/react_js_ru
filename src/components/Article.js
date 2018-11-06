import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentList from './CommentList'

export default class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  state = {
    updateIndex: 0
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.isOpen !== nextProps.isOpen
  // }

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
        <button onClick = {this.updateIndex}>
          Update
        </button>
        <CommentList comments = {article.comments} ref = {this.setCommentListRef}/>
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

  // getDerivedStateFromProps = () => {
  //   console.log('---------', 'receiving props')
  // }
  componentDidMount = () => {
    console.log('-----', `mounted ${this.props.article.id}`)
  }
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
