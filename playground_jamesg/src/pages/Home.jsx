import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../css/Home.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import SearchPage from  './SearchPage.jsx'
import Profile from './Profile.jsx'
import Layout from '../Layout.jsx'


// function Home () {
//     const url = window.location.href

//     const Router = () => {
//         switch (url) {
//             case 'http://localhost:5173/login':
//                 return <Login/>
//             case 'http://localhost:5173/register':
//                 return <Register/>
//             case 'http://localhost:5173/dashboard':
//                 return <Dashboard/>
//             case 'http://localhost:5173/profile':
//                 return <Profile/>
//             default:
//                 return <>Page Not Found</>
//         }
//     }

//     return (
//         <>
//             <h1>Welcome to React</h1>
//             <Router/>
//             {/* {Router()} */}
//         </>
//     )
// }

function Home () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>           
                <Route path="/" element={<Layout/>}>
                    <Route path="Dashboard" element={<Dashboard/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="Register" element={<Register/>}/>
                    <Route path="SearchPage" element={<SearchPage/>}/>
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default Home