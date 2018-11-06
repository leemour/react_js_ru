import React, {Component as ReactComponent} from 'react'

export default Component => class Accordion extends ReactComponent {
  state = {
    openItemId: null
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
