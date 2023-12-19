import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Threads, Comments, Entry, FlashStacksPage, CardsPage } from './pages'
import { Comment, NavBar } from "./components"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Entry />} />
          <Route path="/flashStacks">
            <Route index element={<FlashStacksPage />} />
            <Route path=":id" element={<CardsPage />} />
          </Route>
          <Route path="/thread" element={<Threads />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/comments/:id" element={<Comment />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
