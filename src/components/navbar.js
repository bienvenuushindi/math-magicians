import './css/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyles = {
    nav: {
      display: 'flex',
    },
  };
  return (
    <nav className="nav" style={navbarStyles.nav}>
      <Link to="/" className="link">Home</Link>
      <Link to="/calculator" className="link">Calculator</Link>
      <Link to="/quote" className="link">Quote</Link>
    </nav>
  );
};
export default Navbar;
