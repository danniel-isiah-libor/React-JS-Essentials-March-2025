import React from "react";
import './Home.css'
import Register from './Register'
import Login from "./Login";
export default function Home() {

const url = window.location.pathname

console.log(url)

const Router = () => {

  switch(url){
    case "/register":
      return <Register/>
    case "/login":
      return <Login/>
      default: 
      return <h1>Page Not Found</h1>
  }
}


  return (
    <div>
      <h1>Welcome to React</h1>
      <Router/>
    </div>
  );
}
