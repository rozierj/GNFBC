
import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function SocialHighlight() {
  // Check if current time is Sunday between 11:00 AM and 12:30 PM
  function isSundayBetween11And1230() {
    const now = new Date();
    const isSunday = now.getDay() === 0; // Sunday = 0
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    return isSunday && totalMinutes >= 660 && totalMinutes <= 750; // 11:00 to 12:30
  }

  const showYouTube = isSundayBetween11And1230();

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl max-w-6xl mx-auto my-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
      {/* Facebook and YouTube section */}
      <div className="flex-1 text-left">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-2 flex items-center gap-2">
            <FaFacebookF className="text-purple-600 w-6 h-6" />
            Stay Connected with Us!
          </h2>
          <p className="text-purple-900 text-md">
            Follow our church on social media for the latest updates, livestreams, and inspiration.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="https://www.facebook.com/greaterdublin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transform transition-all duration-300"
          >
            <FaFacebookF className="w-5 h-5" />
            Visit Our Facebook Page
          </a>

          <a
            href="https://www.youtube.com/@greaterdublin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transform transition-all duration-300"
          >
            <FaYoutube className="w-5 h-5" />
            Visit Our YouTube Channel
          </a>
        </div>
      </div>

      {/* YouTube Live banner only on Sunday 11–12:30 */}
      {showYouTube && (
        <div className="flex-1 text-left flex flex-col justify-center items-start bg-white p-6 rounded-2xl shadow-lg border border-red-300">
          <h2 className="text-2xl font-bold text-red-700 mb-4">🎥 We’re Live Now on YouTube!</h2>
          <a
            href="https://www.youtube.com/@greaterdublin/live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300"
          >
            <FaYoutube className="w-6 h-6" />
            Watch Live on YouTube
          </a>
        </div>
      )}
    </div>
  );
}
