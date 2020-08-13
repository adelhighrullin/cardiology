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
        <Link to="/About"><button type="button">О нас</button></Link>
        </li>
        <li>
          г. Казань, ул. Ю. Фучика, д. 50, 1 этаж
        </li>
        <li>
          <p>+7 (843) 211‒88‒77</p>
        </li>
      </ul>
    </div>
  )
}

export default Header;