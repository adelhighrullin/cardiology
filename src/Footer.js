import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to="/About">О нас</Link>
      </div>
    </div>
  )
}

export default Footer;