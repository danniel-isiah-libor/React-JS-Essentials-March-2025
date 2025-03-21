import React from "react";
import "./Home.css";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
export default function Home() {
  const url = window.location.pathname;

  console.log(url);

  const Router = () => {
    switch (url) {
      case "/register":
        return <Register />;
      case "/login":
        return <Login />;
      case "/dashboard":
        return <Dashboard />;
        case "/profile":
        return <Profile />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div className="p-5 flex flex-col space-y-5">
      <h1 className="text-5xl font-medium">Welcome to React</h1>
      <Router />
    </div>
  );
}
