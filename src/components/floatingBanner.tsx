"use client";
import React, { useState, useEffect, useRef } from "react";

// -------------------------
// Festival Config
// -------------------------
interface Festival {
  name: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  greeting: string;
  offerMessage: string;
}

// -------------------------
// Floating Banner Component
// -------------------------
export default function FloatingBanner() {
  const [mounted, setMounted] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currentFestival, setCurrentFestival] = useState<Festival | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const repeatCount = 10;

  // Festival list
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  const festivals: Festival[] = [
  // ---------- 2025 ----------
  {
    name: "Diwali 2025",
    startDate: todayStr,
    endDate: todayStr,
    greeting: "🪔 Happy Diwali!",
    offerMessage: "Light up your life with our special festive offers! ✨",
  },
  {
    name: "Diwali 2025",
     startDate: "2025-10-18",
      endDate: "2025-10-23",
    greeting: "🪔 Happy Diwali!",
    offerMessage: "Light up your life with our special festive offers! ✨",
  },
  {
    name: "Christmas 2025",
    startDate: "2025-12-20",
    endDate: "2025-12-26",
    greeting: "🎄 Merry Christmas!",
    offerMessage: "Enjoy the festive cheer with our Christmas specials! 🎅",
  },

  // ---------- 2026 ----------
  {
    name: "Republic Day 2026",
    startDate: "2026-01-23",
    endDate: "2026-01-29",
    greeting: "🇮🇳 Happy Republic Day!",
    offerMessage: "Celebrate Republic Day with amazing offers! 🎉",
  },
  {
    name: "Holi 2026",
    startDate: "2026-03-01",
    endDate: "2026-03-07",
    greeting: "🌈 Happy Holi!",
    offerMessage: "Enjoy vibrant colors and special festive discounts! 🎨",
  },
  {
    name: "Independence Day 2026",
    startDate: "2026-08-12",
    endDate: "2026-08-18",
    greeting: "🇮🇳 Happy Independence Day!",
    offerMessage: "Enjoy freedom with special deals and discounts! 🛍️",
  },
  {
    name: "Dussehra 2026",
    startDate: "2026-10-18",
    endDate: "2026-10-24",
    greeting: "🪔 Happy Dussehra!",
    offerMessage: "Celebrate Dussehra with our exclusive festive offers! 🎉",
  },
  {
    name: "Diwali 2026",
    startDate: "2026-10-05",
    endDate: "2026-10-11",
    greeting: "🪔 Happy Diwali!",
    offerMessage: "Celebrate Diwali with our exclusive festive offers! ✨",
  },
  {
    name: "Christmas 2026",
    startDate: "2026-12-20",
    endDate: "2026-12-26",
    greeting: "🎄 Merry Christmas!",
    offerMessage: "Spread holiday cheer with our Christmas specials! 🎅",
  },

  // ---------- 2027 ----------
  {
    name: "Republic Day 2027",
    startDate: "2027-01-23",
    endDate: "2027-01-29",
    greeting: "🇮🇳 Happy Republic Day!",
    offerMessage: "Celebrate Republic Day with amazing offers! 🎉",
  },
  {
    name: "Holi 2027",
    startDate: "2027-03-18",
    endDate: "2027-03-26",
    greeting: "🌈 Happy Holi!",
    offerMessage: "Enjoy colors and festive discounts! 🎨",
  },
  {
    name: "Independence Day 2027",
    startDate: "2027-08-12",
    endDate: "2027-08-20",
    greeting: "🇮🇳 Happy Independence Day!",
    offerMessage: "Celebrate freedom with exclusive deals! 🛍️",
  },
  {
    name: "Dussehra 2027",
    startDate: "2027-10-07",
    endDate: "2027-10-13",
    greeting: "🪔 Happy Dussehra!",
    offerMessage: "Celebrate Dussehra with our exclusive festive offers! 🎉",
  },
  {
    name: "Diwali 2027",
    startDate: "2027-10-27",
    endDate: "2027-12-01",
    greeting: "🪔 Happy Diwali!",
    offerMessage: "Light up your life with our special festive offers! ✨",
  },
  {
    name: "Christmas 2027",
    startDate: "2027-12-20",
    endDate: "2027-12-26",
    greeting: "🎄 Merry Christmas!",
    offerMessage: "Celebrate the holidays with festive specials! 🎅",
  },
];


  useEffect(() => setMounted(true), []);

  // -------------------------
  // Helper: check if today is in range (ignoring time)
  // -------------------------
  const isTodayInRange = (today: Date, startStr: string, endStr: string) => {
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const start = new Date(startStr);
    const end = new Date(endStr);
    const startOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const endOnly = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    return todayOnly >= startOnly && todayOnly <= endOnly;
  };

  // Determine current festival
  useEffect(() => {
    if (!mounted) return;
    const festival = festivals.find(f => isTodayInRange(today, f.startDate, f.endDate));
    setCurrentFestival(festival || null);
  }, [mounted]);

  // Inject blink animation
  useEffect(() => {
    if (!mounted) return;
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blink {
        0%, 50%, 100% { opacity: 1; }
        25%, 75% { opacity: 0.8; }
      }
      .animate-blink {
        animation: blink 1s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [mounted]);

  // Infinite scroll logic
  useEffect(() => {
    if (!mounted || !currentFestival) return;
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    const textWidth = textEl.offsetWidth / repeatCount; // width of single text
    let pos = 0;

    const step = () => {
      pos -= 1; // speed of movement
      if (Math.abs(pos) >= textWidth) pos = 0; // reset
      setOffset(pos);
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [mounted, currentFestival]);

  if (!mounted || !currentFestival) return null;

  const fullText = `${currentFestival.greeting} ${currentFestival.offerMessage}`;

  return (
    <div
      className="fixed top-[55px] w-full z-40 overflow-hidden
        backdrop-blur-md border-y border-gray-700/20
        shadow-[0_0_20px_rgba(0,255,255,0.05)] animate-blink"
      style={{ backgroundColor: "#FF9933" }} // saffron
    >
      <div
        className="relative py-3 flex"
        ref={containerRef}
        style={{ height: "2.5rem" }}
      >
        <div
          ref={textRef}
          className="absolute whitespace-nowrap flex"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {Array.from({ length: repeatCount }).map((_, i) => (
            <p
              key={i}
              className="text-base sm:text-lg md:text-xl font-medium tracking-wide text-gray-900 mr-16"
            >
              {fullText}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
