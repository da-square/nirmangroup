"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { CONTACT_MODAL_EVENT, triggerDownloadAfterForm } from "@/utils/contactModalEvent";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  // message omitted from errors
}

export default function ContactFormModal() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [status, setStatus] = useState<string>("");

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

    // reopen after 2 min if not submitted
    const reopenTimer = setTimeout(() => {
      const stillNotSubmitted = localStorage.getItem("contactFormSubmitted");
      if (stillNotSubmitted !== "true") openModal();
    }, 2 * 60 * 1000);

    const handleOpenEvent = () => openModal();
    window.addEventListener(CONTACT_MODAL_EVENT, handleOpenEvent);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(reopenTimer);
      window.removeEventListener(CONTACT_MODAL_EVENT, handleOpenEvent);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: undefined }); // clear error while typing
  };

  const validate = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return; // stop submit if validation fails

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
        localStorage.setItem("contactFormSubmitted", "true");

        // trigger download event if any
        triggerDownloadAfterForm();

        // reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFormErrors({});
        setTimeout(() => handleClose(), 1500);
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ An error occurred. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]">
      <div
        className={`w-[90%] max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 relative transform transition-all duration-500 ${
          animate ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Required fields with asterisk */}
          {[
            { id: "name", type: "text", label: "Full Name" },
            { id: "email", type: "email", label: "Email ID" },
            { id: "phone", type: "tel", label: "Phone Number" },
          ].map((field) => (
            <div key={field.id} className="relative group">
              <label
                htmlFor={field.id}
                className="absolute left-3 top-2 text-gray-400 text-sm flex items-center gap-1"
              >
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={(formData as any)[field.id]}
                onChange={handleChange}
                placeholder=" "
                className={`peer w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 focus:outline-none ${
                  formErrors[field.id as keyof FormErrors]
                    ? "border-red-500"
                    : "border-gray-500/30"
                }`}
              />
              {formErrors[field.id as keyof FormErrors] && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors[field.id as keyof FormErrors]}
                </p>
              )}
            </div>
          ))}

          {/* Message (no star, no validation) */}
          <div className="relative group">
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-gray-400 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-3 pt-5 pb-2 text-white bg-transparent border-b-2 border-gray-500/30 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-sky-400 text-white font-semibold py-3 rounded-lg"
          >
            Submit
          </button>

          {status && (
            <p className="mt-2 text-center text-white font-medium">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
