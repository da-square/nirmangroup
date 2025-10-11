"use client";

import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Download } from "lucide-react";
import {
  triggerContactModal,
  DOWNLOAD_AFTER_FORM_EVENT,
} from "@/utils/contactModalEvent";

const BroucherPage = () => {
  const pdfFile = "/Dholera-Brochure-HSC-A4-size-1.pdf";
  const pdfPages = [
    "/Brochure1.jpg",
    "/Broucher2.jpg",
    "/Broucher3.jpg",
    "/Broucher4.jpg",
    "/Broucher5.jpg",
  ];

  // ✅ Listen for form submit -> auto download
  useEffect(() => {
    const handleAutoDownload = () => {
      console.log("📥 Auto-downloading brochure after form submit...");
      const link = document.createElement("a");
      link.href = pdfFile;
      link.download = "Dholera-Brochure.pdf";
      link.click();
    };

    window.addEventListener(DOWNLOAD_AFTER_FORM_EVENT, handleAutoDownload);
    return () =>
      window.removeEventListener(DOWNLOAD_AFTER_FORM_EVENT, handleAutoDownload);
  }, []);

  // ✅ Download button click handler
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const submitted = localStorage.getItem("contactFormSubmitted");
    if (submitted !== "true") {
      e.preventDefault(); // stop download
      triggerContactModal(); // open form
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20
      bg-gradient-to-b from-green-200 via-sky-100 to-sky-300 overflow-hidden"
    >
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-sky-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-green-300/40 rounded-full blur-3xl"></div>

      <div
        className="relative z-10 max-w-4xl w-full backdrop-blur-xl bg-white/40 border border-white/60
        rounded-2xl shadow-xl p-10 text-center flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-sky-700">
          Preview Our Brochure
        </h1>
        <p className="mt-4 text-gray-700">
          Flip through our brochure like a real book and download it below.
        </p>

        <div className="mt-8 w-full flex justify-center">
          <HTMLFlipBook
            width={400}
            height={550}
            size="stretch"
            minWidth={315}
            maxWidth={550}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            className="shadow-2xl rounded-2xl"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={900} // smooth flip
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={false}
            disableFlipByClick={false}
          >
            {pdfPages.map((page, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-white/80 rounded-2xl shadow-lg"
              >
                <img
                  src={page}
                  alt={`Page ${idx + 1}`}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* ✅ Download button */}
        <a
          href={pdfFile}
          download
          onClick={handleDownload}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-medium
            bg-gradient-to-r from-sky-500 to-green-400 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default BroucherPage;
