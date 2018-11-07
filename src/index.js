import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'
import Root from './components/Root'

// function HelloWorld() {
//   return <h1>HelloWorld</h1>
// }

render(<Root articles = {articles}/>, document.querySelector('#container'))
// render(<HelloWorld/>, document.querySelector('#container'))
