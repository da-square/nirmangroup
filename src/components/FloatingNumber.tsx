"use client";

import React, { useState, useEffect } from "react";

export default function FloatingContactButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <a
      href="tel:+919998842046"
      className="fixed bottom-6 right-6 z-50 
      bg-gradient-to-r from-teal-700 via-emerald-600 to-green-700
      text-white font-semibold tracking-wide
      px-4 py-2.5 rounded-full 
      shadow-[0_0_15px_rgba(16,185,129,0.4)] 
      hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] 
      hover:scale-105 transition-all duration-300 
      flex flex-col items-center text-center gap-0.5
      backdrop-blur-md border border-white/10 text-sm md:text-base"
    >
      <span className="flex items-center gap-1.5 text-sm md:text-base font-bold text-white">
        <span className="animate-pulse text-lime-300 text-sm md:text-base">📞</span>
        +91-9998842046
      </span>
    </a>
  );
}
