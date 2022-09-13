import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </header>
  );
}

export default Header
