import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Appointment() {
  return (
    <div className="page">
      <p>Здесь будет запись</p>
      <Link to="/Done">Записаться</Link>
    </div>
  )
}

export default Appointment;