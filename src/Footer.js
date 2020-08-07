import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
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

export default Footer;