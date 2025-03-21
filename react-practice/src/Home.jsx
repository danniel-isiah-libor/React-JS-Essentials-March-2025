import React from "react";
// import './Home.css'
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";

export default function Home() {
  const path = window.location.pathname;
  const Router = () => {
    switch (path) {
      case "/login":
        return <Login />;
      case "/register":
        return <Register />;
      case "/dashboard":
        return <Dashboard />;
      default:
        return <h1>Page Not Found!</h1>;
    }
  };
  return (
    <div>
      <h1>Welcome to React</h1>
      <Router />
    </div>
  );
}
