import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'
import { ThreadProvider } from "./context/ThreadContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThreadProvider>
      <Router>
        <App />
      </Router>
      </ThreadProvider>
    </AuthProvider>
  </React.StrictMode>,
)
