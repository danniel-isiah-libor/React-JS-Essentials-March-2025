import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/Home.css";
import Register from "./Register.jsx";

import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import Layout from '../Layout.jsx' ;
import NoPage from './NoPage.jsx';
// function Home() {
//   const url = window.location.href;
//   const Router = () => {
//     switch (url) {
//       case "http://localhost:5173/Login":
//         return <Login />;
//       case "http://localhost:5173/Register":
//         return <Register />;
//       case "http://localhost:5173/Dashboard":
//         return <Dashboard />;
//       case "http://localhost:5173/Profile":
//         return <Profile />; 
//       default:
//         return <>Page not Found</>;
//     }
//   };
//   return (
//     <>
//       <h1>Welcome to react</h1>
//       <Router />
//     </>
//   );
// }


function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>

                <Route path="/" element={<Layout/>}>
                    <Route index path="dashboard" element={<Dashboard/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Home;
