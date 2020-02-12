import React from 'react';
import './styles.scss';
import Logo from './../../assets/img/logo.png';

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo"></img>
        </div>
      </div>
    </header>
  )
}

export default Header;
