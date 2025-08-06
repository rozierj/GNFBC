import React from 'react';

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <h1 className="text-4xl text-center my-8">Church Events Calendar</h1>

      <div className="w-full max-w-6xl">
        {/* Desktop View */}
        <div className="hidden sm:block">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=gnfbc.webdesign%40gmail.com&ctz=America%2FNew_York"
            title="Church Events Calendar"
            className="w-full rounded-lg shadow-lg"
            style={{ height: '800px', border: 'none' }}
          ></iframe>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=gnfbc.webdesign%40gmail.com&ctz=America%2FNew_York"
            title="Church Events Calendar (Mobile)"
            className="w-full rounded-lg shadow-lg"
            style={{ height: '500px', border: 'none' }}
          ></iframe>
        </div>

        {/* Printable Month View Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://calendar.google.com/calendar/embed?src=gnfbc.webdesign%40gmail.com&mode=MONTH&ctz=America%2FNew_York"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Open Printable Calendar View
          </a>
        </div>

        <p className="text-center text-sm text-gray-600 mt-2">
          Press <strong>Ctrl + P</strong> (or <strong>Cmd + P</strong> on Mac) to print the calendar.
        </p>
      </div>
    </div>
  );
}
