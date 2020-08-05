import React from 'react';
import About from './About';
import Appointment from './Appointment';
import Done from './Done';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import NNPage from './NNPage';
import TestDone from './TestDone';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ () => <Home /> } />
          <Route path="/About" exact component={ () => <About /> } />
          <Route path="/Appointment" exact component={ () => <Appointment /> } />
          <Route path="/Done" exact component={ () => <Done /> } />
          <Route path="/NNPage" exact component={ () => <NNPage /> } />
          <Route path="/TestDone" exact component={ () => <TestDone /> } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;