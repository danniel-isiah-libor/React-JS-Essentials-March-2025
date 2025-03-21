import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Header from './Components/Header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Home() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={
        <>
          <Header />
          <Profile /> 
        </>
      } />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
