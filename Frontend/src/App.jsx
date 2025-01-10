import {Routes, Route} from "react-router-dom"
import Header from './components/Layouts/Header'
import Register from './components/Register/Register.jsx'
import LandingPage from './components/landingPage.jsx'
import './App.css'
import Login from './components/Login/Login.jsx'
import SideBar from "./components/Layouts/SideBar.jsx"
import Layout from "./components/Layouts/Layout.jsx"
import AboutUs from "./components/Pages/AboutUs.jsx"
import Blog from "./components/Pages/Blog.jsx"
import HowItWorks from "./components/Pages/HowItWorks.jsx"
import TandC from "./components/Pages/TandC.jsx"

function App() {
  const RenderRoute = () => (
     <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/side" element={<SideBar/>} />
      <Route path='/about' element={
          <Layout>
            <AboutUs/>
          </Layout>
      }/>
      <Route path='/blog' element={
          <Layout>
            <Blog/>
          </Layout>
      }/>
      <Route path='/how-it-works' element={
          <Layout>
            <HowItWorks/>
          </Layout>
      }/>
      <Route path='/terms-and-conditions' element={
          <Layout>
            <TandC/>
          </Layout>
      }/>
    </Routes>
  );
  return <> {RenderRoute()}
  </>  
}

export default App
