import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Header from './Components/Header/Header'
import Dashboard from './pages/Dashboard'
import Hooks from './pages/Hooks'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
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
      <Route path="/dashboard" element={
        <>
          <Header />
          <Dashboard />
        </>
      } />
      <Route path="/hooks" element={
        <>
          <Header />
          <Hooks />
        </>
      } />
      <Route path="/post" element={
        <>
          <Header />
          <Post />
        </>
      } />
      <Route path="/create-post" element={
        <>
          <Header />
          <CreatePost />
        </>
      } />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
