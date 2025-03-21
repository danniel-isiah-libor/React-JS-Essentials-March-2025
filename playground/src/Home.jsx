import "./Home.css";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from './Dashboard.jsx';
import Profile from './Profile.jsx';

function Home() {
  const url = window.location.href;

  console.log(window.location.href);
  const Router = () => {
    switch (url) {
      case "http://localhost:5173/login":
        return <Login />;
        break;
      case "http://localhost:5173/register":
        return <Register />;
        break;
      case "http://localhost:5173/dashboard":
        return <Dashboard />;
        break;
      case "http://localhost:5173/profile":
        return <Profile />;
        break;
      default:
        return <><h1>Page Not Found</h1></>;
        break;
    }
  };

  return (
    <>
      <Router />
    </>
  );
}

export default Home;
