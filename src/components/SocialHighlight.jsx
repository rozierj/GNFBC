import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function SocialHighlight() {
  return (
    <div className="bg-purple-100 p-10 rounded-3xl shadow-lg max-w-6xl mx-auto my-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
      {/* Facebook section */}
      <div className="flex-1 text-left">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Stay Connected with Us!</h2>
        <p className="text-purple-900 mb-6">
          Follow our church on Facebook for the latest updates, live streams, and community events.
        </p>
        <a
          href="https://www.facebook.com/greaterdublin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-purple-800 transition duration-300"
        >
          <FaFacebookF className="w-5 h-5" />
          Visit Our Facebook Page
        </a>
      </div>

      {/* YouTube Live Embed section */}
      <div className="flex-1 text-left">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Watch Live on YouTube</h2>
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/RG2sw0Er8IQ?autoplay=1"
        title="YouTube Live Stream"
        allow="autoplay; encrypted-media"
        allowFullScreen
        ></iframe>

        </div>
        <p className="text-sm text-purple-900 mt-2">
          If we’re not live right now, check back Sunday at 11:00 a.m.!
        </p>
        <a
          href="https://www.youtube.com/@greaterdublin/live"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-purple-700 underline hover:text-purple-900"
        >
          Or click here to watch directly on YouTube
        </a>
      </div>
    </div>
  );
}
