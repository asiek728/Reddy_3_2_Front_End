import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Entry/>}/>
    </Routes>
    </>
  )
}

export default App
