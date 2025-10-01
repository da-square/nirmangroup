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

  useEffect(() => {
    // Open modal automatically on first visit
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setAnimate(true), 50);
    }, 2000); // show after 2 seconds

    return () => clearTimeout(timer);
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

    setFormData({ name: "", email: "", phone: "", message: "" });
    handleClose();
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div
        className={`w-full max-w-lg bg-white/10 backdrop-blur-xl
          rounded-2xl p-8 border border-white/20
          relative transform transition-all duration-500
          ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}
          shadow-[0_0_40px_rgba(34,197,94,0.4),0_0_40px_rgba(56,189,248,0.4)]`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-green-300 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Get Started with{" "}
          <span className="bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text text-transparent">
            Dholera Nirman Group
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {[
            { id: "name", type: "text", label: "Full Name" },
            { id: "email", type: "email", label: "Email ID" },
            { id: "phone", type: "tel", label: "Phone Number" },
          ].map((field) => (
            <div key={field.id} className="relative group">
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={(formData as any)[field.id]}
                onChange={handleChange}
                className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-500/30 focus:outline-none transition focus:border-transparent"
                placeholder=" "
                required
              />
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-sky-400 scale-x-0 peer-focus:scale-x-100 transition-transform origin-left"></div>
              <label
                htmlFor={field.id}
                className="absolute left-3 top-2 text-gray-400 text-sm transition-all
                           peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 
                           peer-placeholder-shown:text-base 
                           peer-focus:top-2 peer-focus:bg-gradient-to-r peer-focus:from-green-400 peer-focus:to-sky-400 peer-focus:bg-clip-text peer-focus:text-transparent peer-focus:text-sm"
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative group">
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-500/30 focus:outline-none transition resize-none focus:border-transparent"
              placeholder=" "
              required
            />
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-sky-400 scale-x-0 peer-focus:scale-x-100 transition-transform origin-left"></div>
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-gray-400 text-sm transition-all
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 
                         peer-placeholder-shown:text-base 
                         peer-focus:top-2 peer-focus:bg-gradient-to-r peer-focus:from-green-400 peer-focus:to-sky-400 peer-focus:bg-clip-text peer-focus:text-transparent peer-focus:text-sm"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-sky-400 hover:from-green-500 hover:to-sky-500 text-white font-semibold py-3 rounded-lg shadow-[0_0_25px_rgba(34,197,94,0.6),0_0_25px_rgba(56,189,248,0.6)] transition transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Submit</span>
            <div className="absolute inset-0 bg-white/20 blur-sm opacity-0 hover:opacity-30 transition"></div>
          </button>
        </form>
      </div>
    </div>
  );
}
