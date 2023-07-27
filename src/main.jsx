import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/styles.css'

import Routes from './routes'

const adoptaUnAmigo = ReactDOM.createRoot(document.getElementById('root'))

adoptaUnAmigo.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
