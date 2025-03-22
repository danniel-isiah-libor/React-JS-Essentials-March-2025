import React from "react";
import "../css/Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Layout from "../Layout";
import PageNotFound from "./PageNotFound";
import Dashboard from "./Dashboard";
import CreatePost from "./CreatePost";
// export default function Home() {
//   const url = window.location.pathname;

//   console.log(url);

//   const Router = () => {
//     switch (url) {
//       case "/register":
//         return <Register />;
//       case "/login":
//         return <Login />;
//       case "/dashboard":
//         return <Dashboard />;
//       case "/profile":
//         return <Profile />;
//       default:
//         return <h1>Page Not Found</h1>;
//     }
//   };

//   return (
//     <div className="p-5 flex flex-col space-y-5">
//       <h1 className="text-5xl font-medium">Welcome to React</h1>
//       <Router />
//     </div>
//   );
// }

export default function Home() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
