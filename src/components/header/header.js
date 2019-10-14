import React from 'react';
import style from './header.styl'

function Header(props) {
  return (
    <header className="header">
      <img className="header_img" src="/img/logo.png" alt="Логотип"/>
    </header>
  )
}

export default Header;