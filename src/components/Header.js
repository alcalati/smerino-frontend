import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>SMERINO</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
      </nav>
    </header>
  );
};

export default Header;
