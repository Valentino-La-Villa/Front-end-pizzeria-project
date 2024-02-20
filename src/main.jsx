import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {LocalProvider} from './components/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </LocalProvider>
  </React.StrictMode>,
)
