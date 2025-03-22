import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Home from './Pages/Home'
//import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
