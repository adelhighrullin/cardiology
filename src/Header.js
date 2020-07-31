import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <img src="https://cdn1.flamp.ru/dc648c46e17076daf4310fc5d0e967c7.png" />
      <div>
        <Link to="/About">О нас</Link>
      </div>
    </div>
  )
}

export default Header;