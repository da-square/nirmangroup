"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactFormModal() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Show modal only for first-time users, after 2 seconds
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => setAnimate(true), 50);
        localStorage.setItem("hasVisited", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // reset
    setFormData({ name: "", email: "", phone: "", message: "" });

    // close modal after submit
    handleClose();
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      {/* Modal content */}
      <div
        className={`w-full max-w-lg bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-8 border border-white/20 relative transform transition-all duration-300 ${
          animate ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-yellow-400 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Get Started with{" "}
          <span style={{ color: "lab(83.2664% 8.65132 106.895)" }}>
            Dholera Nirman Group
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          {[
            { id: "name", type: "text", label: "Full Name" },
            { id: "email", type: "email", label: "Email ID" },
            { id: "phone", type: "tel", label: "Phone Number" },
          ].map((field) => (
            <div key={field.id} className="relative">
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={(formData as any)[field.id]}
                onChange={handleChange}
                className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-400 focus:border-yellow-400 focus:outline-none transition"
                placeholder=" "
                required
              />
              <label
                htmlFor={field.id}
                className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-yellow-400 peer-focus:text-sm"
              >
                {field.label}
              </label>
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-400 focus:border-yellow-400 focus:outline-none transition resize-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-yellow-400 peer-focus:text-sm"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
