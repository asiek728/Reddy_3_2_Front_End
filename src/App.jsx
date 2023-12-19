import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Threads, Entry, Comments, FlashStacksPage, CardsPage, NewFlashCardFormPage, Login, Signup } from './pages'
import { NavBar } from "./components"

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
          <Route path="/flashStacks/:id/new" element={<NewFlashCardFormPage />} />
          <Route path="/thread" element={<Threads />} />
          <Route path="/comments/:id" element={<Comments />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
