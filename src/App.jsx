import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar"; 
import ManageIPO from "./pages/ManageIPO";
import RegisterIPO from "./pages/IPORegister";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<ManageIPO />} />
            <Route path="/manage-ipo" element={<ManageIPO />} />
            <Route path="/register-ipo" element={<RegisterIPO />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
