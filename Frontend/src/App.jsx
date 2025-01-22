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
import deleteModal from "./components/Modals/deleteModal.jsx";
import ExpensePage from "./components/Pages/ExpensePage.jsx";
import DashLayout from "./components/Layouts/DashLayout.jsx";
import HomeDash from "./components/Dashboard/HomeDash.jsx";
import ProfilePictureUpload from "./components/Layouts/ProfilePictureUpload.jsx";
import Profile from "./components/Login/profilePicture.jsx";
import RecentTransactionsCom from "./components/Layouts/recentTransaction.jsx";
import RecentTransactions from "./components/Layouts/recentTransaction.jsx";
import InvoiceView from "./components/Dashboard/invoiceView.jsx";
import ProfileSettings from "./components/Dashboard/ProfileSettings.jsx";
import History from "./components/Dashboard/History.jsx";
import AddExpenseModal from "./components/Modals/addExpenseModal.jsx";
// import AddExpenseModal from "./components/Modals/AddExpenseModal.jsx";


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
      <Route path="/dashboard/add-expense" element={<AddExpenseModal/>} />
      <Route path="/history" element={<History/>}/>
      <Route path="/profile-setting" element={<ProfileSettings/>}/>

      

      <Route path="/modal" element={<DownloadModal />} />
      {/* to be linked to the upload icon from profile settings page */}
      <Route path="/uploadpicture" element={<ProfilePictureUpload />} />

      {/* could be deleted---useful for backend */}
      <Route path="/profilePicture" element={<Profile />} />

      {/* could be deleted---already built */}
      {/* <Route path="/recent" element={<ExpensePage />} /> */}

        {/* could be deleted, already built */}
      {/* <Route path="/recents" element={<RecentTransactions />} /> */}

      {/* to be edited with dashlayout, and added to code */}
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
      <Route path="/invoice" element={<InvoiceView />} />
      
      
    </Routes>
  );
  return <> {RenderRoute()}</>;
}

export default App;
