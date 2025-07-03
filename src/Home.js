import React from "react";
import ChurchGallery from './components/ChurchGallery';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Home() {
  return (
    <>
      {/* ✅ Header */}
      {/* <header className="bg-purple-800 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Greater New Friendship Baptist Church</h1>
        <p className="mt-2 text-xl italic">Creating Space for Greater</p>
      </header> */}

      {/* ✅ Optional: Additional Navbar (skip if not needed) */}
   {/* <Navbar /> */}

      {/* ✅ Intro Video */}
      <section className="bg-purple-100 text-white text-center p-8">
        <div className="max-w-6xl mx-auto">
          <video
            src={`${process.env.PUBLIC_URL}/images/intro.mp4`}
            controls
            autoPlay
            loop
            muted
            playsInline
            poster={`${process.env.PUBLIC_URL}/images/intro-fallback.jpg`}
            className="w-full rounded-xl shadow-lg"
          >
            <p>Your browser does not support HTML5 video. Here is a <a href={`${process.env.PUBLIC_URL}/images/intro-fallback.jpg`} target="_blank" rel="noopener noreferrer">link to the image</a> instead.</p>
          </video>
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="flex p-8 bg-purple-50 text-purple-900 gap-8">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="max-w-3xl">
            The mission of Greater New Friendship Baptist church is the same mission Jesus gave his followers: Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="max-w-3xl">
            The vision of Greater New Friendship Baptist church is to create a community of authentic believers and witness a city transformed by the life-changing reality of the gospel, as people come to know Jesus as their Lord and Savior.
          </p>
        </div>
      </section>

      {/* ✅ Image Carousel */}
      <ChurchGallery />

      {/* ✅ Ministries & Pastor's Message */}
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
          <h2 className="text-2xl font-bold text-purple-800 text-center">Pastor’s Message</h2>
          <img
            src={`${process.env.PUBLIC_URL}/images/pastor.jpg`}
            alt="Pastor"
            className="w-64 h-64 my-4 mx-auto"
          />
          <p className="italic text-center">“I am excited to see what God has in store for our church family.”</p>
        </div>
      </section>

      {/* ✅ Events */}
      <section className="p-8 bg-purple-50 text-purple-900">
        <h2 className="text-2xl font-bold mb-4">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Sunday School</strong>: 9:30 AM</p>
            <p><strong>Sunday Worship Service</strong>: 11:00 AM</p>
          </div>
          <div>
            <p><strong>Bible Study</strong>: 6:00 PM | Wednesday evening</p>
          </div>
        </div>
      </section>

      {/* ✅ Giving Section */}
      <section className="p-8 flex flex-col md:flex-row gap-8 justify-center bg-purple-50 text-purple-900">
        <div className="bg-purple-100 w-full md:w-1/2 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Watch our Services</h3>
          <p>Watch or listen to our latest sermons online.</p>
          <a
            href="https://www.youtube.com/@greaterdublin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded">
              Watch our Services
            </button>
          </a>
        </div>
        <div className="bg-purple-100 w-full md:w-1/2 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Donate Now</h3>
          <p>Support our ministry by making a donation online.</p>
          <a
            href="https://subsplash.com/u/-8CS9C9/give"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded">
              Give Online
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
