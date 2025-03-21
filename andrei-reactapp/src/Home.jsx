import './Home.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
function Home() {
  console.log(window.location.href);
  const url = window.location.href;
  
  const Router = () => {
    switch (url) {
      case "http://localhost:5173/login":
        return <Login/>
        break;
      case "http://localhost:5173/register":
        return <Register/>
        break;
      case "http://localhost:5173/dashboard":
        return <Dashboard/>
        break;

      default:
        return <h1>Page not found</h1>
        break;
    }
  }

  return (
    <>
      <h1 className="text-white text-6xl ">Welcome to React</h1>
      <Router/>
    </>
  );
  
}

export default Home