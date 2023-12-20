import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'
import { ThreadProvider } from "./context/ThreadContext";
import { ScoreProvider } from "./context/ScoreContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThreadProvider>
        <ScoreProvider>
          <Router>
            <App />
          </Router>
        </ScoreProvider>
      </ThreadProvider>
    </AuthProvider>
  </React.StrictMode>,
)
