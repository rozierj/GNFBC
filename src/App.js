import React from "react";
import ChurchGallery from './components/ChurchGallery';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';



export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="bg-purple-800 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Greater New Friendship Baptist Church</h1>
        <p className="mt-2 text-xl italic">Creating Space for Greater</p>
      </header>

      {/* Intro Video */}
      <section className="bg-purple-100 text-white-900 text-center p-8">
        <div className="max-w-6xl mx-auto">
          <video
            src="/images/intro.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="flex p-8 bg-purple-50 text-purple-900 gap-8">
        {/* Left Column - Our Mission */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="max-w-3xl">
            The mission of Greater New Friendship Baptist church is the same mission Jesus gave his followers: Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.
          </p>
        </div>

        {/* Right Column - Our Vision */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="max-w-3xl">
            The vision of Greater New Friendship Baptist church is to create a community of authentic believers and witness a city transformed by the life-changing reality of the gospel, as people come to know Jesus as their Lord and Savior.
          </p>
        </div>
      </section>

      {/* Image Carousel Section */}
      <ChurchGallery />

      {/* Ministries and Pastor's Message */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-purple-100 text-purple-900">
        <div>
          <h2 className="text-2xl font-bold mb-2">Ministries</h2>
          <ul className="list-disc list-inside">
            <li><strong>Youth Ministry:</strong> Guiding young people in their spiritual journey.</li>
            <li><strong>Men’s Ministry:</strong> Encouraging and equipping men for spiritual leadership.</li>
            <li><strong>Women’s Ministry:</strong> Empowering women in their walk with Christ.</li>
          </ul>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow text-purple-900">
          <h2 className="text-2xl font-bold text-purple-800">Pastor’s Message</h2>
          <img
            src="/pastor.jpg"
            alt="Pastor"
            className="w-32 h-32 rounded-full my-4 mx-auto"
          />
          <p className="italic">“I am excited to see what God has in store for our church family.”</p>
        </div>
      </section>

      {/* Events */}
      <section className="p-8 bg-purple-50 text-purple-900">
        <h2 className="text-2xl font-bold mb-4">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Sunday School</strong>: 09:30 AM</p>
            <p><strong>Sunday Worship Service</strong>: 11:00 AM</p>
          </div>
          <div>
            <p><strong>Bible Study</strong>: 6:00 PM | Wednesday evening</p>
          </div>
        </div>
      </section>

      {/* Giving Section */}
      <section className="p-8 flex flex-col md:flex-row gap-8 justify-center bg-purple-50 text-purple-900">
        <div className="bg-purple-100 w-full md:w-1/2 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Online Giving</h3>
          <p>Watch or listen to our latest sermons online.</p>
          <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
        <div className="bg-purple-100 w-full md:w-1/2 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Donate Now</h3>
          <p>Support our ministry by making a donation online.</p>
          <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded">
            Give Online
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Greater New Friendship Baptist Church. All rights reserved.
      </footer>
    </div>
  );
}
