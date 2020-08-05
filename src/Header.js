import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img id="logo" src="https://cdn1.flamp.ru/dc648c46e17076daf4310fc5d0e967c7.png" />
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