import React from 'react';
import logo from '../logo-symbol.svg';

const logoStyle = {
  maxHeight: '27px'
}

const Navbar = () => (

  <nav className="navbar">
    <img src={logo} style={logoStyle} alt="Helpful Humans" />
    <form className="form-inline ml-auto">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
    </form>
  </nav>

);

export default Navbar;
