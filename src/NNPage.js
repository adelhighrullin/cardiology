import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NNPage() {
  return (
    <div className="page">
      <p>Здесь будет тест</p>
      <Link to="/TestDone">Пройти тест</Link>
    </div>
  )
}

export default NNPage;