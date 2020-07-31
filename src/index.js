import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export { default as About } from './About';
export { default as Appointment } from './Appointment';
export { default as Header } from './Header';
export { default as Home } from './Home';
export { default as NNPage } from './NNPage';
