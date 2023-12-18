import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Entry, FlashStacksPage } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Entry />} />
        <Route path="/flashStacks">
          <Route index element={<FlashStacksPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
