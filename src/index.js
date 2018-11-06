import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'
import App from './components/App'
import 'react-select/dist/react-select.css'

// function HelloWorld() {
//   return <h1>HelloWorld</h1>
// }

render(<App articles = {articles}/>, document.querySelector('#container'))
// render(<HelloWorld/>, document.querySelector('#container'))
