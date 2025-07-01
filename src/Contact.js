import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("https://formspree.io/f/mnnvwgaz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-bold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-bold">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded"
        >
          {status}
        </button>
      </form>
    </div>
  );
}
