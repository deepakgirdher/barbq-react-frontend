import React from 'react';

import './header.styles.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-title">
          <img src="/assets/images/logo.png" alt="Logo Image" />
        </div>
        <div className="header-menu">
          <span>ADMIN</span>
          <span>POS</span>
        </div>
      </div>
    )
  }
}


export default Header;