import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { Threads, Entry, Comments, FlashStacksPage, CardsPage, NewFlashCardFormPage, Login, Signup, NotFound } from './pages'
import { NavBar } from "./components"

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  // will fix this tomorrow - needs to have login/sign up page to start
  // maybe access to different pages idk - then has section for note cards and forum etc
  // will need user ? Login : Home     !user ? Home : login

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Entry />} />
          <Route path="/flashStacks">
            <Route index element={<FlashStacksPage />} />
            <Route path=":id" element={<CardsPage />} />
          </Route>
          <Route
            path="/flashStacks/:id/new"
            element={<NewFlashCardFormPage />}
          />
            <Route path="/thread" element={<Threads />} />
            <Route path="/comments/:id" element={<Comments />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound /> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
