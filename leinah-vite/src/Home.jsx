import Login from "./Components/Login.jsx";
import "./Home.css"
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";

function Home() {

  const Router = () => {
    switch (window.location.href) {
      case "http://localhost:5173/login":
        return <Login />;
      case "http://localhost:5173/register":
        return <Register />
      case "http://localhost:5173/dashboard":
        return <Dashboard />
      default:
        return <>Page not found</>
    }
  }

  return (
    <>
      <h1 className="text-blue">Welcome to React</h1>

      <Router />
    </>
  )
}

export default Home