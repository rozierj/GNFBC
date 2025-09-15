import React from "react";
import ChurchGallery from './components/ChurchGallery';
import SocialHighlight from './components/SocialHighlight';
import SermonSnippet from "./components/sermonsnippet";
import MediaGallery from "./components/MediaGallery";
import AccentCard from "./components/AccentCard";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// ✅ ADDED
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      {/* ✅ canonical + title/description */}
      <Helmet>
        <title>Greater New Friendship | Creating Space for Greater</title>
        <meta
          name="description"
          content="Greater New Friendship Baptist Church — worship with us in Dublin, GA."
        />
        <link rel="canonical" href="https://www.greaterdublin.org/" />
      </Helmet>

      {/* ✅ Who We Are – compact + AccentCard */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            {/* Eyebrow + Title */}
            <p className="text-xs font-semibold tracking-widest text-purple-600 uppercase">
              About Our Church
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-purple-900">
              Who We Are
            </h2>

            {/* Intro */}
            <p className="mt-3 text-purple-900/90 leading-relaxed text-base">
              Greater New Friendship Baptist Church is a welcoming community rooted in faith, love, and transformation. We believe in creating
              space for “Greater”—greater faith, greater purpose, and greater impact in the lives of each person and our city.
            </p>

            {/* Two-column content */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-purple-900">Our Vision</h3>
                <p className="mt-2 text-purple-900/90 text-sm leading-relaxed">
                  To build a community of authentic believers—people who follow Christ not just in word, but in action—so that our city is transformed by the life-changing reality of Jesus Christ.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-900">Our Values</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-600/90 shrink-0" />
                    <p className="text-purple-900/90 text-sm"><span className="font-semibold">Authenticity:</span> Being honest about our struggles and joys, living out real faith.</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-600/90 shrink-0" />
                    <p className="text-purple-900/90 text-sm"><span className="font-semibold">Welcoming Spirit:</span> Everyone is welcome here, just as they are; we strive to be a church full of grace.</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-600/90 shrink-0" />
                    <p className="text-purple-900/90 text-sm"><span className="font-semibold">Transformation:</span> We believe God’s love changes hearts, lives, and communities for the better.</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-600/90 shrink-0" />
                    <p className="text-purple-900/90 text-sm"><span className="font-semibold">Faith in Action:</span> We put faith into practice through worship, teaching, service, and fellowship.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* What we do */}
            <div className="mt-6 border-t border-purple-200/60 pt-5">
              <h3 className="text-lg font-semibold text-purple-900">What We Do</h3>
              <p className="mt-2 text-purple-900/90 text-sm leading-relaxed">
                We offer meaningful worship and teaching; provide fellowship and support through Sunday School, Bible study, and community groups; and serve our local community through outreach, compassion, and love.
              </p>
            </div>
          </AccentCard>
        </div>
      </section>

      {/* ✅ Visions of Greater (Media Gallery) in AccentCard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <MediaGallery />
          </AccentCard>
        </div>
      </section>

      {/* ✅ Mission & Vision in AccentCard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <div className="text-purple-900 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>
                  The mission of Greater New Friendship Baptist Church is the same
                  mission Jesus gave his followers: Go therefore and make disciples
                  of all nations, baptizing them in the name of the Father and of
                  the Son and of the Holy Spirit.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p>
                  The vision of Greater New Friendship Baptist Church is to create
                  a community of authentic believers and witness a city transformed
                  by the life-changing reality of the gospel, as people come to
                  know Jesus as their Lord and Savior.
                </p>
              </div>
            </div>
          </AccentCard>
        </div>
      </section>

      {/* ✅ Sermon Snippet in AccentCard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <SermonSnippet />
          </AccentCard>
        </div>
      </section>

      {/* ✅ Image Carousel in AccentCard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <ChurchGallery />
          </AccentCard>
        </div>
      </section>

      {/* ✅ Facebook & YouTube Highlight in AccentCard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <SocialHighlight />
          </AccentCard>
        </div>
      </section>

      {/* ✅ Ministries & Pastor's Message in AccentCard */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-purple-900">
              <div className="bg-white/40 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Ministries</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Deacons Ministry:</strong> Serving the church through spiritual care and leadership.</li>
                  <li><strong>Deaconess Ministry:</strong> Supporting the church through service, prayer, and compassion.</li>
                  <li><strong>Men’s Ministry:</strong> Encouraging and equipping men for spiritual leadership.</li>
                  <li><strong>Women’s Ministry:</strong> Empowering women in their walk with Christ.</li>
                  <li><strong>Youth Ministry:</strong> To provide a ministry that gives youth an opportunity for both spiritual and social development.</li>
                  <li><strong>Technology Ministry:</strong> Enhancing worship and outreach through modern technology.</li>
                  <li><strong>Security Ministry:</strong> Ensuring a safe and secure environment for all.</li>
                  <li><strong>Building & Grounds Ministry:</strong> Maintaining and beautifying God’s house and grounds.</li>
                  <li><strong>Culinary Ministry:</strong> Serving fellowship and hospitality through meals and events.</li>
                  <li><strong>Choir Ministry:</strong> Leading the congregation in praise and worship through song.</li>
                </ul>
              </div>

              <div className="bg-white/40 p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Pastor’s Message</h2>
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
                  <br /><br />
                  In His Service, Pastor Ernest Jones, Lady Persephone & Kristen ”
                </p>
              </div>
            </div>
          </AccentCard>
        </div>
      </section>

      {/* ✅ Events in AccentCard */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-6xl mx-auto text-purple-900 px-4">
          <AccentCard>
            <h2 className="text-2xl font-bold mb-6 text-center">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-8 rounded-2xl shadow-sm">
                <p><strong>Sunday School</strong>: 9:30 AM</p>
                <p><strong>Sunday Worship Service</strong>: 11:00 AM</p>
              </div>
              <div className="bg-white/50 p-8 rounded-2xl shadow-sm">
                <p><strong>Bible Study</strong>: 6:00 PM | Wednesday evening</p>
              </div>
            </div>
          </AccentCard>
        </div>
      </section>

      {/* ✅ Visit Us in AccentCard */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto text-purple-900 px-4">
          <AccentCard>
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
          </AccentCard>
        </div>
      </section>

      {/* ✅ Giving in AccentCard */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AccentCard>
            <div className="flex flex-col md:flex-row gap-8 justify-center text-purple-900">
              <div className="bg-white/50 w-full md:w-1/2 p-10 text-center rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Watch our Services</h3>
                <p className="mb-4">Watch or listen to our latest sermons online.</p>
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
              <div className="bg-white/50 w-full md:w-1/2 p-10 text-center rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Donate Now</h3>
                <p className="mb-4">Support our ministry by making a donation online.</p>
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
          </AccentCard>
        </div>
      </section>
    </>
  );
}
