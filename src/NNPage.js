import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NNForm from './NNForm';
import NNResult from './NNResult';

function NNPage() {
  return (
    <div>
      <NNForm />
      <NNResult />
    </div>
  )
}

export default NNPage;