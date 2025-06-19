import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";

import ManageIPO from "./pages/ManageIPO";
import RegisterIPO from "./pages/IPORegister";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function AppWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Sidebar />}
      <div style={{ marginLeft: hideLayout ? 0 : "220px", padding: "20px", width: "100%" }}>
        {!hideLayout && <Navbar />}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<ManageIPO />} />
          <Route path="/manage-ipo" element={<ManageIPO />} />
          <Route path="/register-ipo" element={<RegisterIPO />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
