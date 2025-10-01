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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-sky-400 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_40px_rgba(34,197,94,0.4),0_0_40px_rgba(56,189,248,0.4)]">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Get Started with{" "}
          <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
            Dholera Nirman Group
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-transparent focus:outline-none transition"
                placeholder=" "
                required
              />
              {/* Gradient underline always visible */}
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-sky-400 scale-x-100 origin-left"></div>

              <label
                htmlFor={field.id}
                className="absolute left-3 top-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sky-600 text-sm transition-all
                        peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
                        peer-focus:top-2 peer-focus:text-sm"
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative group">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-transparent focus:outline-none transition resize-none"
              placeholder=" "
              required
            />
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-green-600 to-sky-600 scale-x-100 origin-left"></div>
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sky-600 text-sm transition-all
                        peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
                        peer-focus:top-2 peer-focus:text-sm"
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
