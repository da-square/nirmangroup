"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-green-100 to-sky-300 text-gray-800 flex flex-col items-center justify-start py-16 px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-12 mt-5">Contact Us</h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 from-sky-400 via-green-500 to-sky-500 text-gray-800 backdrop-blur-sm shadow-lg rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-gray-400"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-gray-400 resize-y"
                placeholder="Type your message here"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-sky-400 hover:from-green-500 hover:to-sky-500 text-white font-semibold py-3 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              Submit
            </button>

            {/* Status Message */}
            {status && (
              <p className="mt-2 text-center text-gray-800 font-medium">{status}</p>
            )}
          </form>
        </div>

        {/* Company Info Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-green-600 mb-4 text-center lg:text-left">
            Dholera Nirman Group
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center lg:text-left text-xl">
            Dholera Nirman Group stands at the forefront of real estate development, specializing in the acquisition and sale of premium residential plots.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-green-600 font-semibold">📞</span>
              <a
                href="tel:+919998842046"
                className="text-gray-800 hover:text-green-600 transition text-md font-medium"
              >
                +91-9998842046
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 font-semibold">✉️</span>
              <a
                href="mailto:info@dholeranirmangroup.com"
                className="text-gray-800 hover:text-green-600 transition text-md font-medium break-all"
              >
                info@dholeranirmangroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
