import React from 'react'
import ReactDOM from 'react-dom'

import { SvcApp } from './App'
import { SvcProviders } from './providers'

ReactDOM.render(
  <SvcProviders>
    <SvcApp />
  </SvcProviders>,
  document.getElementById('root')
)
