import './init'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kvao52wx8eofrt5s.us.auth0.com"
      clientId="QcvcFb2SzdGerSy1TN8rTKvVqjaFADY1"
      redirectUri={ window.location.origin }
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
)
