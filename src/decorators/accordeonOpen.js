import React, {Component as ReactComponent} from 'react'

export default Component => class Accordeon extends ReactComponent {
  constructor(props) {
    super(props)
    this.state = {
      openItemId: props.defaultOpenId
    }
  }
  render() {
    return <Component {...this.props} {...this.state}
      toggleOpen = {this.toggleOpen} />
  }
  toggleOpen = (openItemId) => {
    if (openItemId === this.state.openItemId) openItemId = null
    this.setState({openItemId})
  }
}
