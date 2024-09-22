// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import VerifyEmail from './pages/VerifyEmail';
import EmailVerified from './pages/EmailVerified';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/email-verified" element={<EmailVerified />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
