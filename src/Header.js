import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img id="logo" src={ logo } alt='Кардиологический центр "Здоровое сердце"'/>
      </Link>
      <ul>
        <li>
          <Link to="/About">О нас</Link>
        </li>
        <li>
          <p>+7 (843) 211‒88‒77</p>
        </li>
      </ul>
    </div>
  )
}

export default Header;