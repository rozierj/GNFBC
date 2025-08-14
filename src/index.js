// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";

// ✅ ADDED: HelmetProvider
import { HelmetProvider } from 'react-helmet-async';

const TRACKING_ID = "G-ENXXWPDTY0"; // Replace with your GA4 Measurement ID
ReactGA.initialize(TRACKING_ID); // ✅ Initialize GA4 once here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ ADDED: Wrap app so pages can inject <Helmet> */}
    <HelmetProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
