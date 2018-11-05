import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  state = {
    openItemId: null
  }
  render() {
    return <OriginalComponent {...this.props} {...this.state}
      toggleOpen = {this.toggleOpen} />
  }
  toggleOpen = (openItemId) => {
    if (openItemId === this.state.openItemId) openItemId = null
    this.setState({openItemId})
  }
}
