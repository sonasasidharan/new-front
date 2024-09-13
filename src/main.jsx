import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextapi from './ContextApis/AuthContextapis.jsx'



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <AuthContextapi>
    <App />
   </AuthContextapi>
    </BrowserRouter>
  </React.StrictMode>,
)
