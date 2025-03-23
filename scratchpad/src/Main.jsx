import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
// import App from './App.jsx';
// import Register from './register.jsx';
import Home from "./pages/Home.jsx";
// import Profile from "./pages/Profile.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
