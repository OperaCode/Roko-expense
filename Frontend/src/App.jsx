import {Routes, Route} from "react-router-dom"
import Header from './components/Layouts/Header'
import Register from './components/Register/Register.jsx'
import Footer from './components/Layouts/Footer.jsx'
import LandingPage from './components/landingPage.jsx'
import './App.css'
import Login from './components/Login/Login.jsx'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route  path="/login" element={<Login />} />
    </Routes>
  
    </>
  )
}

export default App
