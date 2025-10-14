"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react"; // using existing lucide icon

export default function FloatingWhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const whatsappNumber = "919998842046";
  const message = "Hello! I would like to know more about your project.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
      bg-green-600 hover:bg-green-700
      text-white font-semibold rounded-full
      px-4 py-2.5 md:px-5 md:py-3
      shadow-[0_0_15px_rgba(34,197,94,0.4)]
      hover:shadow-[0_0_25px_rgba(34,197,94,0.7)]
      hover:scale-105 transition-all duration-300
      backdrop-blur-md border border-white/10
      flex items-center gap-2 md:gap-2.5"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
      <span className="text-sm md:text-base font-medium text-white">
        +91-9998842046
      </span>
    </a>
  );
}
