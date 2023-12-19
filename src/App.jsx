import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Threads, Comments, Entry, FlashStacksPage, CardsPage } from './pages'
import { Comment } from "./components/index"

function App() {

  return (
    <>

      <Routes>
        <Route index element={<Entry />} />
        <Route path="/flashStacks">
          <Route index element={<FlashStacksPage />} />
          <Route path=":id" element={<CardsPage />} />
        </Route>
      <Route path="/thread" element={<Threads/>}/>
      <Route path="/comments" element={<Comments />}/>
      <Route path="/comments/:id" element={<Comment/>}/>
      </Routes>
    </>
  )
}

export default App
