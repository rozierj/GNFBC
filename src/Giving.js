import React from 'react';
import { trackEvent } from './analytics';
// ✅ ADDED
import { Helmet } from 'react-helmet-async';

export default function Giving() {
  const handleGiveClick = () => {
    trackEvent("outbound_click", {
      label: "Online Giving",
      url: "https://subsplash.com/u/-8CS9C9/give"
    });
    window.open("https://subsplash.com/u/-8CS9C9/give", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ ADDED canonical + title/description */}
      <Helmet>
        <title>Giving | Greater New Friendship</title>
        <meta name="description" content="Give online to support the ministry at Greater New Friendship Baptist Church." />
        <link rel="canonical" href="https://www.greaterdublin.org/giving" />
      </Helmet>

      <h1 className="text-4xl text-center my-8">Online Giving</h1>

      {/* ✅ Trackable Give Now button */}
      {/* <div className="text-center mb-6">
        <button
          onClick={handleGiveClick}
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-bold"
        >
          Give Now
        </button>
      </div> */}

      <div className="flex-grow">
        <iframe
          src="https://subsplash.com/u/-8CS9C9/give"
          title="Online Giving"
          className="w-full"
          style={{ minHeight: '800px', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}
