import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register.jsx";
import LandingPage from "./components/landingPage.jsx";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Layout from "./components/Layouts/Layout.jsx";
import AboutUs from "./components/Pages/AboutUs.jsx";
import Blog from "./components/Pages/Blog.jsx";
import HowItWorks from "./components/Pages/HowItWorks.jsx";
import TandC from "./components/Pages/TandC.jsx";
import Modal_1 from "./components/Modals/Modal 1.jsx";
import Modal_2 from "./components/Modals/Modal 2.jsx";
import Modal_3 from "./components/Modals/Modal 3.jsx";
import Modal_4 from "./components/Modals/Modal 4.jsx";
import Modal_5 from "./components/Modals/Modal 5.jsx";
import Modal_7 from "./components/Modals/Modal 7.jsx";
import Modal_6 from "./components/Modals/Modal 6.jsx";

import DashLayout from "./components/Layouts/DashLayout.jsx";
import HomeDash from "./components/Dashboard/HomeDash.jsx";
import ProfileSettings from "./components/Dashboard/ProfileSettings.jsx";
import History from "./components/Dashboard/History.jsx";


function App() {
  const RenderRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <DashLayout>
            <HomeDash />
          </DashLayout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />
      <Route
        path="/how-it-works"
        element={
          <Layout>
            <HowItWorks />
          </Layout>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <Layout>
            <TandC />
          </Layout>
        }
      />
      <Route path="/modal" element={<Modal_7 />} />
      <Route path="/profile-setting" element={<ProfileSettings/>}/>
      <Route path="/history" element={<History/>}/>
      
    </Routes>
  );
  return <> {RenderRoute()}</>;
}

export default App;
