import React from "react";
import ChurchGallery from './components/ChurchGallery';
import SocialHighlight from './components/SocialHighlight';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Home() {
  return (
    <>
      {/* ✅ Intro Video */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-6xl mx-auto text-center text-white px-4">
          <video
            src={`${process.env.PUBLIC_URL}/images/intro.mp4`}
            controls
            autoPlay
            loop
            muted
            playsInline
            poster={`${process.env.PUBLIC_URL}/images/intro-fallback.jpg`}
            className="w-full rounded-3xl shadow-lg"
          >
            <p>
              Your browser does not support HTML5 video. Here is a{" "}
              <a
                href={`${process.env.PUBLIC_URL}/images/intro-fallback.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                link to the image
              </a>{" "}
              instead.
            </p>
          </video>
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 text-purple-900 px-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              The mission of Greater New Friendship Baptist Church is the same
              mission Jesus gave his followers: Go therefore and make disciples
              of all nations, baptizing them in the name of the Father and of
              the Son and of the Holy Spirit.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              The vision of Greater New Friendship Baptist Church is to create
              a community of authentic believers and witness a city transformed
              by the life-changing reality of the gospel, as people come to
              know Jesus as their Lord and Savior.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Image Carousel */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <ChurchGallery />
        </div>
      </section>

      {/* ✅ Facebook & YouTube Highlight */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SocialHighlight />
        </div>
      </section>

      {/* ✅ Ministries & Pastor's Message */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-purple-900 px-4">
          <div className="bg-purple-100 p-10 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ministries</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Deacons Ministry:</strong> Serving the church through spiritual care and leadership.
              </li>
              <li>
                <strong>Deaconess Ministry:</strong> Supporting the church through service, prayer, and compassion.
              </li>
              <li>
                <strong>Men’s Ministry:</strong> Encouraging and equipping men
                for spiritual leadership.
              </li>
              <li>
                <strong>Women’s Ministry:</strong> Empowering women in their
                walk with Christ.
              </li>
              <li>
                <strong>Youth Ministry:</strong> Guiding young people in 
                their spiritual journey.
              </li>
              <li>
                <strong>Technology Ministry:</strong> Enhancing worship and outreach 
                through modern technology.
              </li>
              <li>
                <strong>Security Ministry:</strong> Ensuring a safe and secure 
                environment for all.
              </li>
              <li>
                <strong>Building & Grounds Ministry:</strong> Maintaining and beautifying 
                God’s house and grounds.
              </li>
              <li>
                <strong>Culinary Ministry:</strong> Serving fellowship and hospitality 
                through meals and events.
              </li>
              <li>
                <strong>Choir Ministry:</strong> Leading the congregation in praise 
                and worship through song.
              </li>
            </ul>
          </div>
          <div className="bg-purple-100 p-10 rounded-3xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Pastor’s Message
            </h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/pastor.jpg`}
              alt="Pastor"
              className="w-full max-w-md my-4 mx-auto object-cover border-4 border-purple-800 rounded"
            />
            <p className="italic">
              “On behalf of the Greater New Friendship Baptist Church family, we want to thank you for visiting
              our website. Here at Greater, we are intentionally creating space in our lives for God to do 
              GREATER works in us and through us! We hope your virtual visit turns into an in-person visit. 
              God bless you and we’ll see you soon.
              <br />
              <br />In His Service,
              Pastor Ernest Jones, Lady Persephone & Kristen ”
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Events */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-6xl mx-auto text-purple-900 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-3xl shadow">
              <p>
                <strong>Sunday School</strong>: 9:30 AM
              </p>
              <p>
                <strong>Sunday Worship Service</strong>: 11:00 AM
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-3xl shadow">
              <p>
                <strong>Bible Study</strong>: 6:00 PM | Wednesday evening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Visit Us */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto text-purple-900 px-4">
          <div className="bg-purple-100 p-10 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Visit Us</h2>
            <p className="mb-6">3265 Hwy 19 South, Dublin, GA 31021</p>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!4v1751576094856!6m8!1m7!1sinKzvwUIwb08Ck8pL-dhrQ!2m2!1d32.37165373576155!2d-82.8153898274284!3f276.9945!4f0!5f0.7820865974627469"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Street View"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir//3265+Hwy+19+South,+Dublin,+GA+31021"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Giving Section */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center text-purple-900 px-4">
          <div className="bg-purple-50 w-full md:w-1/2 p-10 text-center rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Watch our Services</h3>
            <p className="mb-4">
              Watch or listen to our latest sermons online.
            </p>
            <a
              href="https://www.youtube.com/@greaterdublin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-full transition duration-300">
                Watch our Services
              </button>
            </a>
          </div>
          <div className="bg-purple-50 w-full md:w-1/2 p-10 text-center rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Donate Now</h3>
            <p className="mb-4">
              Support our ministry by making a donation online.
            </p>
            <a
              href="https://subsplash.com/u/-8CS9C9/give"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-full transition duration-300">
                Give Online
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
