import React from 'react';
import About from './About';
import Appointment from './Appointment';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import NNPage from './NNPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ () => <Home /> } />
          <Route path="/About" exact component={ () => <About /> } />
          <Route path="/NNPage" exact component={ () => <NNPage /> } />
          <Route path="/Appointment" exact component={ () => <Appointment /> } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;