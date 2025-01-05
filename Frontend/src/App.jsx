import {Routes, Route} from "react-router-dom"
import Header from './components/Layouts/Header'
import Register from './components/Register/Register.jsx'
import Footer from './components/Layouts/Footer.jsx'
import LandingPage from './components/landingPage.jsx'
import './App.css'
import Login from './components/Login/Login.jsx'
import SideBar from "./components/Layouts/SideBar.jsx"

function App() {
  const RenderRoute = () => (

  
     <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/side" element={<SideBar/>} />
    </Routes>
     
   

  );

  return <> {RenderRoute()};</>
  
  
}

export default App
