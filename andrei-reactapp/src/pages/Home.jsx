import '../css/Home.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import Profile from './Profile.jsx'
import Nopage from './Nopage.jsx'
import Layout from '../Layout.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function Home() {
  // console.log(window.location.href);
  // const url = window.location.href;
  
  // const Router = () => {
  //   switch (url) {
  //     case "http://localhost:5173/login":
  //       return <Login/>
  //       break;
  //     case "http://localhost:5173/register":
  //       return <Register/>
  //       break;
  //     case "http://localhost:5173/dashboard":
  //       return <Dashboard/>
  //       break;
  //     case "http://localhost:5173/profile":
  //       return <Profile/>
  //       break;

  //     default:
  //       return <h1>Page not found</h1>
  //       break;
  //   }
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Layout />}>
            <Route index  element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default Home