import React from 'react';

export default function Giving() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl text-center my-8">Online Giving</h1>

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
