import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
// import {BrowserRouter as Router } from "react-router-dom";

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <App />
// </Router>
// );
