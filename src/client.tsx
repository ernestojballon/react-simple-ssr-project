declare global {
  interface Window {
    gists: any;
  }
}

import {hydrate } from 'react-dom'
import App from './app'

hydrate(
  <App gists={window.gists} />,
  document.getElementById('root') 
)