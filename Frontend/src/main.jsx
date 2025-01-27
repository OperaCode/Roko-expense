import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/merriweather";
import "@fontsource/inter";
import UserProvider from "./components/context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" />
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
