import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer.jsx';
import UserLogin from './Components/UserLogin.jsx';
import AdminLogin from './Components/AdminLogin.jsx';
import Register from './Components/Register.jsx';
import AvailableBuses from './Components/AvailabeBuses.jsx';
import TicketList from './Components/TicketList.jsx'; // Import TicketList
import './App.css'; // Add your custom styles

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AvailableBuses />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/available-buses" element={<AvailableBuses />} />
          <Route path="/ticket-list" element={<TicketList />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
