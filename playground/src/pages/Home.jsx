import "../css/Home.css";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import Layout from "../components/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hooks from "./Hooks.jsx";
import Post from "./Post.jsx";
import Memo from "./Memo.jsx";


function Home() {
  const url = window.location.href;

  console.log(window.location.href);
  const Router = () => {
    // switch (url) {
    //   case "http://localhost:5173/login":
    //     return <Login />;
    //     break;
    //   case "http://localhost:5173/register":
    //     return <Register />;
    //     break;
    //   case "http://localhost:5173/dashboard":
    //     return <Dashboard />;
    //     break;
    //   case "http://localhost:5173/profile":
    //     return <Profile />;
    //     break;
    //   default:
    //     return <><h1>Page Not Found</h1></>;
    //     break;
    // }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="post" element={<Post />} />
          <Route path="memo" element={<Memo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
