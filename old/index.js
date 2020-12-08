import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import Home from './Home'
import './assets/fonts/fonts.css'

const rootContainer = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <Home />
    </Root>
  </React.StrictMode>,
  rootContainer
)
