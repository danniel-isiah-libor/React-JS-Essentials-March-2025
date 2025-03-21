import React from 'react'
// import './Home.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
export default function Home() {
  
  return (
    <div>
      <h1>Welcome to React</h1>
      {window.location.pathname=="/login"?<Login/>:<Register/>}
      
    </div>
  )
}
