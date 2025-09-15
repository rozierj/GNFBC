// About.js
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AccentCard from "./components/AccentCard";


export default function About() {
  return (
    <main className="font-sans bg-white text-gray-900 flex flex-col min-h-screen">
      <Helmet>
        <title>About | Greater New Friendship</title>
        <meta
          name="description"
          content="Learn about the history and mission of Greater New Friendship Baptist Church."
        />
        <link rel="canonical" href="https://www.greaterdublin.org/about" />
      </Helmet>

      {/* ✅ Our Story */}
      <AccentCard className="max-w-5xl mx-auto my-16 text-center">
        <h2 className="text-3xl font-bold mb-2 text-purple-800">Our Story</h2>
        <p className="text-lg mb-4 text-purple-700">
          How Greater New Friendship Baptist Church began
        </p>

        <img
          src={`${process.env.PUBLIC_URL}/images/church-history.png`}
          alt="Church History Graphic"
          className="w-full max-w-md mx-auto mb-8"
        />

        <p className="text-lg leading-relaxed mb-8">
          Members from Pearly Chapel and Mt. McCrae (Hatoff), two small, rural
          churches, joined together to form one congregation and to build a new
          sanctuary on the grounds of the Pearly Chapel site. On January 3,
          1999, the first worship service was held in the newly organized
          Greater New Friendship Baptist Church located on Highway 19 South in
          Laurens County, Georgia. Since that time, four pastors have served,
          new ministries have been instituted, and members continue to work and
          serve together in love and harmony.
        </p>
      </AccentCard>

      {/* ✅ Milestones */}
      <AccentCard className="max-w-3xl mx-auto my-12">
        <h3 className="text-xl font-bold mb-4 text-purple-800 text-center">
          Milestones
        </h3>
        <ul className="space-y-3 text-left">
          <li>
            ✅ <strong>1993:</strong> First planning meeting between Pearly and
            Mt. McCrae
          </li>
          <li>
            ✅ <strong>1999:</strong> First service held in the sanctuary with
            Rev. Daryl Moore as Pastor
          </li>
          <li>
            ✅ <strong>2006:</strong> Rev. Roger Edwards was installed as Pastor
          </li>
          <li>
            ✅ <strong>2017:</strong> Rev. Nathan Amest was installed as Pastor
          </li>
          <li>
            ✅ <strong>2022:</strong> Rev. Dr. Ernest C. Jones was installed as
            Pastor
          </li>
          <li>✅ <strong>Present:</strong> Initiated the Thanksgiving food give-away</li>
          <li>✅ <strong>Present:</strong> Off-site Trunk or Treat</li>
          <li>✅ <strong>Present:</strong> Random acts of kindness in the community</li>
          <li>✅ <strong>Present:</strong> Serving together in love & harmony</li>
        </ul>
      </AccentCard>

      {/* ✅ Call to Action */}
      <AccentCard className="max-w-2xl mx-auto my-12 text-center">
        <p className="mt-6 text-purple-800 font-semibold">
          We invite you to become part of our ongoing story — worship, serve,
          and grow with us!
        </p>
        <Link
          to="/contact"
          className="inline-block mt-4 bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-full transition"
        >
          Join Us
        </Link>
      </AccentCard>
    </main>
  );
}
