import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
  } from "react-router-dom"
import './styles/index.css';
import App from './components/App/App';

import contacts from "./contacts.json";


ReactDOM.render(<Router><App contacts = {contacts} /></Router>, document.getElementById('root'));


// Inside index.js, import React Router and pass it to ReactDOM.render() as the root component with <App> as a child component. We've imported the starter contacts for you, pass these in to your <App> component as a prop, contacts.