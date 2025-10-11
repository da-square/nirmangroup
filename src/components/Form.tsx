"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { CONTACT_MODAL_EVENT, triggerDownloadAfterForm } from "@/utils/contactModalEvent";

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

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => setAnimate(true), 50);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    const formSubmitted = localStorage.getItem("contactFormSubmitted");

    if (formSubmitted === "true") return;

    // 2s later open once
    const openTimer = setTimeout(() => openModal(), 2000);

    // reopen after 5 min
    const reopenTimer = setTimeout(() => {
      const stillNotSubmitted = localStorage.getItem("contactFormSubmitted");
      if (stillNotSubmitted !== "true") openModal();
    }, 1 * 60 * 1000);

    const handleOpenEvent = () => openModal();
    window.addEventListener(CONTACT_MODAL_EVENT, handleOpenEvent);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(reopenTimer);
      window.removeEventListener(CONTACT_MODAL_EVENT, handleOpenEvent);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // ✅ mark form as submitted
    localStorage.setItem("contactFormSubmitted", "true");

    // ✅ trigger download event
    triggerDownloadAfterForm();

    // close modal
    setFormData({ name: "", email: "", phone: "", message: "" });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]">
      <div
        className={`w-full max-w-lg bg-white/10 backdrop-blur-xl
          rounded-2xl p-8 border border-white/20
          relative transform transition-all duration-500
          ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
        <button
          onClick={handleClose}
          className="cursor-pointer absolute top-3 right-3 text-white hover:text-green-300 text-2xl"
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
          {[{ id: "name", type: "text", label: "Full Name" },
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
                required
                placeholder=" "
                className="peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-500/30 focus:outline-none"
              />
              <label htmlFor={field.id} className="absolute left-3 top-2 text-gray-400 text-sm">
                {field.label}
              </label>
            </div>
          ))}

          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-500/30 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-sky-400 text-white font-semibold py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
