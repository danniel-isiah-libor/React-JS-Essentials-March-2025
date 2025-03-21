import Header from './Components/Header/Header.jsx'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh' }} className="bg-[#e7ecf2] py-1">
        
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
