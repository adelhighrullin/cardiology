import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <p>О нас........</p>
      <Link to="/"><p>Вернуться на главную страницу</p></Link>
    </div>
  )
}

export default About;