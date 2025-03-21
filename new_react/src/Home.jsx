import "./Home.css";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";

function Home() {
  const url = window.location.href;
  const Router = () => {
    switch (url) {
      case "http://localhost:5174/login":
        return <Login />;
      case "http://localhost:5174/register":
        return <Register />;
      case "http://localhost:5174/dashboard":
        return <Dashboard />;
      case "http://localhost:5174/profile":
        return <Profile />;
      default:
        return <> Page Not Found</>;
    }
  };

  return (
    <>
      <h1>Welcome to React</h1>

      <Router />
    </>
  );
}
export default Home;
