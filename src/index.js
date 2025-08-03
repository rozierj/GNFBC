// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-ENXXWPDTY0"; // Replace with your GA4 Measurement ID
ReactGA.initialize(TRACKING_ID); // ✅ Initialize GA4 once here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
