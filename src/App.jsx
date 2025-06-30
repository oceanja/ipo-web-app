import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ManageIPO from "./pages/ManageIPO";
import RegisterIPO from "./pages/IPORegister";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewIPO from "./pages/ViewIPO";
import UpdateIPO from "./pages/UpdateIPO";

function AppWrapper() {
  const location = useLocation();
  const hideLayout = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Sidebar />}

      <div
        style={{
          marginLeft: hideLayout ? 0 : "220px",
          padding: "20px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!hideLayout && <Navbar />}

        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-ipo"
              element={
                <ProtectedRoute>
                  <ManageIPO />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register-ipo"
              element={
                <ProtectedRoute>
                  <RegisterIPO />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view-ipo/:id"
              element={
                <ProtectedRoute>
                  <ViewIPO />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update-ipo/:id"
              element={
                <ProtectedRoute>
                  <UpdateIPO />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
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
