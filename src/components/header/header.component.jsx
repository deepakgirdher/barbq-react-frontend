import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-title">
          <img src="/assets/images/logo.png" alt="Logo Image" />
        </div>
        <div className="header-menu">
          <Link to="/admin" style={{ textDecoration: 'none' }}><span>ADMIN</span></Link>
          <Link to="/" style={{ textDecoration: 'none' }}><span>POS</span></Link>
        </div>
      </div>
    )
  }
}


export default Header;