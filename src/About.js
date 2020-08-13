import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="column">
      <p>О нас........</p>
      <Link to="/"><button>Вернуться на главную страницу</button></Link>
    </div>
  )
}

export default About;