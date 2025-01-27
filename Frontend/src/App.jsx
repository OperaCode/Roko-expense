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
import DashLayout from "./components/Layouts/DashLayout.jsx";
import HomeDash from "./components/Dashboard/HomeDash.jsx";
import InvoiceView from "./components/Dashboard/invoiceView.jsx";
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
      <Route path="/history" element={
      <DashLayout>
      <History />
    </DashLayout>
    } />
      <Route path="/profile-setting" element={<ProfileSettings/>}/>
      <Route path="/invoice" element={
      <DashLayout>
      <InvoiceView />
    </DashLayout>
    } />
            <Route path="/profile-setting" element={<ProfileSettings/>}/>
      <Route
        path="/history"
        element={
          <DashLayout>
            <History />
          </DashLayout>
        }
      />
    </Routes>
  );
  return <> {RenderRoute()}</>;
}

export default App;
