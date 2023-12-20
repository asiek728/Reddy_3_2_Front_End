import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'
import { ThreadProvider } from "./context/ThreadContext";
import { ScoreProvider } from "./context/ScoreContext";
import { TimerProvider } from "./context/TimerContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThreadProvider>
        <ScoreProvider>
          <TimerProvider>
            <Router>
              <App />
            </Router>
          </TimerProvider>
        </ScoreProvider>
      </ThreadProvider>
    </AuthProvider>
  </React.StrictMode>,
)
