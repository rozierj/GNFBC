// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";

// ✅ HelmetProvider for SEO + safe head injection
import { HelmetProvider, Helmet } from 'react-helmet-async';

const TRACKING_ID = "G-ENXXWPDTY0"; // GA4 Measurement ID
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* ✅ Add JSON-LD with obfuscated contact info */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Greater New Friendship Baptist Church",
            "url": "https://www.greaterdublin.org",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3265 Hwy 19S",
              "addressLocality": "Dublin",
              "addressRegion": "GA",
              "postalCode": "31021",
              "addressCountry": "US"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "(478) 463-3746",
                "contactType": "customer service",
                "email": "gnfbc.info\u0040gmail.com" // obfuscated @
              }
            ]
          })}
        </script>
      </Helmet>

      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
