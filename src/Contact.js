// Contact.js
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const response = await fetch("https://formspree.io/f/mnnvwgaz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    });

    if (response.ok) {
      setStatus("Submitted!");
      e.target.reset();
    } else {
      setStatus("Error! Try again.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Helmet>
        <title>Contact | Greater New Friendship</title>
        <meta name="description" content="Contact Greater New Friendship Baptist Church in Dublin, GA." />
        <link rel="canonical" href="https://www.greaterdublin.org/contact" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="mb-8 text-gray-700">We’d love to hear from you. Reach out directly or send a message below.</p>

      {/* New: quick contact + address cards */}
      <section className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="rounded-2xl border p-5">
          <h2 className="font-semibold mb-2">Email</h2>
          <a className="text-purple-700 hover:underline" href="mailto:gnfbc.info@gmail.com">
            gnfbc.info@gmail.com
          </a>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="font-semibold mb-2">Phone</h2>
          <a className="hover:underline" href="tel:+14784633746">
            (478) 463-3746
          </a>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="font-semibold mb-2">Address</h2>
          <address className="not-italic">
            3265 Hwy 19S
            <br />
            Dublin, GA 31021
          </address>
          <div className="mt-2">
            <a
              className="text-sm inline-block hover:underline"
              href="https://www.google.com/maps/search/?api=1&query=3265%20Hwy%2019S%20Dublin%2C%20GA%2031021"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      {/* Existing form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-bold">Name</label>
          <input type="text" id="name" name="name" required className="w-full border border-gray-300 p-2 rounded" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-bold">Email</label>
          <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-2 rounded" />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-bold">Message</label>
          <textarea id="message" name="message" rows="5" required className="w-full border border-gray-300 p-2 rounded"></textarea>
        </div>

        <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded">
          {status}
        </button>
      </form>
    </div>
  );
}
