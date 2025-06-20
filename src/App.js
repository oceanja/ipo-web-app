import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPOCard from './components/IPOCard';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import SharkPage from './pages/SharkPage';

const ipoData = [
  { name: "Company 1", priceLow: 100, priceHigh: 120, open: 110, close: 115, size: 500, type: "Book Building", listing: "2025-07-01" },
  { name: "Company 2", priceLow: 200, priceHigh: 250, open: 220, close: 240, size: 800, type: "Fixed Price", listing: "2025-08-15" },
  //  make sure every object has a unique name
];

// 👇 Home page for IPO cards
function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {ipoData.map((ipo) => (
        <IPOCard
          key={ipo.name} // Better than using index (if name is unique)
          name={ipo.name}
          priceLow={ipo.priceLow}
          priceHigh={ipo.priceHigh}
          open={ipo.open}
          close={ipo.close}
          size={ipo.size}
          type={ipo.type}
          listing={ipo.listing}
        />
      ))}
    </div>
  );
}

// 👇 Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} /> 
        <Route path="/sharks" element={<SharkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
