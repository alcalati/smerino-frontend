import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LoginRegisterForm from './components/LoginRegisterForm';
import EmailVerified from './pages/EmailVerified';
import Profile from './pages/Profile';
import VerifyEmail from './pages/VerifyEmail';
import Training from './pages/Training';
import styled from 'styled-components';

const Pages = styled.main`
  margin-top: 10vh;
  margin-bottom: 5vh;
  height: 85vh;
  overflow-y: auto;
  background-color: white;
  color: black;
  width: 100%;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 5vh;
  font-size: 70%;
  background-color: var(--primaryColor);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const App = () => {
  return (
    <Router>
      <Header />
      <Pages>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegisterForm isLogin={true} />} />
          <Route path="/register" element={<LoginRegisterForm isLogin={false} />} />
          <Route path="/email-verified" element={<EmailVerified />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/training" element={<Training />} />
        </Routes>

      </Pages >
      <Footer>
        SMERINO
      </Footer>
    </Router>
  );
};

export default App;
