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
import DownloadModal from "./components/Modals/downloadModal";
import Modal_2 from "./components/Modals/sortByModal.jsx";
import Modal_3 from "./components/Modals/iconModal.jsx";
import Modal_4 from "./components/Modals/editModal.jsx";
import deleteModal from "./components/Modals/deleteModal.jsx";
import Modal_7 from "./components/Modals/navBarModal.jsx";
import Modal_6 from "./components/Modals/addExpense.jsx";
import ExpensePage from "./components/Pages/ExpensePage.jsx";
import DashLayout from "./components/Layouts/DashLayout.jsx";
import HomeDash from "./components/Dashboard/HomeDash.jsx";
import ProfilePictureUpload from "./components/Layouts/ProfilePictureUpload.jsx";
import Profile from "./components/Login/profilePicture.jsx";
import RecentTransactionsCom from "./components/Layouts/recentTransaction.jsx";
import RecentTransactions from "./components/Layouts/recentTransaction.jsx";
import InvoiceView from "./components/Dashboard/invoiceView.jsx";

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
      <Route path="/modal" element={<DownloadModal />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/uploadpicture" element={<ProfilePictureUpload />} />
      <Route path="/profilePicture" element={<Profile />} />
      <Route path="/recent" element={<ExpensePage />} />
      <Route path="/recents" element={<RecentTransactions />} />
      <Route path="/invoice" element={<InvoiceView />} />
    </Routes>
  );
  return <> {RenderRoute()}</>;
}

export default App;
