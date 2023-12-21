import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { Threads, Entry, Comments, FlashStacksPage, CardsPage, NewFlashCardFormPage, Login, Signup, NotFound } from './pages'
import { NavBar } from "./components"
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <div className='backgroundContainer'></div>
      <Routes>
        <Route path="/" element={ user ? <NavBar /> : ''}>
          <Route index element={<Entry />} />
          <Route path="/flashStacks">
            <Route index element={user ? <FlashStacksPage /> : <Entry/>} />
            <Route path=":id" element={ user ? <CardsPage /> : <Entry/>} />
          </Route>
          <Route
            path="/flashStacks/:id/new"
            element={ user ? <NewFlashCardFormPage /> : <Entry/>}
          />
            <Route path="/thread" element={ user ? <Threads /> : <Entry/>} />
            <Route path="/comments/:id" element={user ? <Comments />: <Entry/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound /> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
