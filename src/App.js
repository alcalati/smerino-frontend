import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LoginRegisterForm from './components/LoginRegisterForm';
import EmailVerified from './pages/EmailVerified';
import Profile from './pages/Profile';
import VerifyEmail from './pages/VerifyEmail';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegisterForm isLogin={true} />} />
        <Route path="/register" element={<LoginRegisterForm isLogin={false} />} />
        <Route path="/email-verified" element={<EmailVerified />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
