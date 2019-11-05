import React from 'react';
import './Nav.css';

const Navbar= (props) => {
  return(<div>
    <header className="Navbar">
      <nav className="Navbar_Nav">
      <div></div>
      <div className="Navlogo"><a href="/">logo</a></div>
      <div className="NavItem">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">ABOUT</a></li>
        </ul>
      </div>
      </nav>
    </header>
  </div>)
};

export default Navbar;
