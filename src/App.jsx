import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Threads, Entry, Comments } from './pages'
import { Comment } from "./components/index"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Entry/>}/>
      <Route path="/thread" element={<Threads/>}/>
      <Route path="/comments" element={<Comments />}/>
      <Route path="/comments/:id" element={<Comment/>}/>
    </Routes>
    </>
  )
}

export default App
