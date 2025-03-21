import React from "react";
// import './Home.css'
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import Layout from "../Layout.jsx";
import Error from "./Error.jsx";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
// export default function Home() {
//   const path = window.location.pathname;
//   const Router = () => {
//     switch (path) {
//       case "/login":
//         return <Login />;
//       case "/register":
//         return <Register />;
//       case "/dashboard":
//         return <Dashboard />;
//       case "/profile":
//         return <Profile/>
//       default:
//         return <h1>Page Not Found!</h1>;
//     }
//   };
//   return (
//     <div>
//       <h1>Welcome to React</h1>
//       <Router />
//     </div>
//   );
// }


export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path="*" element={<Error/>} />
          </Route>
          
      </Routes>
    </BrowserRouter>    
  )
}
