import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Entry, FlashStacksPage, CardsPage } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Entry />} />
        <Route path="/flashStacks">
          <Route index element={<FlashStacksPage />} />
          <Route path=":id" element={<CardsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
