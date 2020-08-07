import React from 'react';
import { Link } from 'react-router-dom';

function Appointment() {
  return (
    <div className="page">
      <p>Здесь будет запись</p>
      <Link to="/Done">Записаться</Link>
    </div>
  )
}

export default Appointment;