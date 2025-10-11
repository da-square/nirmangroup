"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import MapModal from "./MapModal";
import { projects } from "@/data/projectsData";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Download Brochure", href: "/brochure" },
  { name: "Dholera SIR", href: "/Dholera-sir" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show gradient if scrolled OR if route is not home/empty
  const showGradient = scrolled || (pathname !== "/" && pathname !== "");

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
          showGradient
            ? "bg-gradient-to-r from-green-400/80 via-green-300/60 to-sky-400/80 border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo/header-logo.png"
                alt="Logo"
                width={96}
                height={96}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              {links.map((link) => {
                const isActive = pathname === link.href;

                // Projects link
                if (link.name === "Our Projects") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setShowProjects(true)}
                      
                    >
                      <button
                        className={`relative font-sans text-lg transition-colors duration-300 ${
                          isActive
                            ? "text-green-400"
                            : "text-white hover:text-green-400"
                        }`}
                      >
                        {link.name}
                      </button>

                      {/* Dropdown */}
                      {showProjects && (
                        <div onMouseLeave={() => setShowProjects(false)} className="absolute font-sans text-lg transition-colors duration-300 left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
                          {projects.map((p, i) => (
                            <Link
                              key={i}
                              href={`/projects/${p.id}`}
                              className="block px-4 py-2 hover:bg-green-100"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Normal links
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-sans text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-green-400 transform transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
              <button
                onClick={() => setOpenMap(true)}
                className="relative font-sans text-lg text-white transition-colors duration-300 hover:text-green-400"
              >
                View City Map
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="text-white md:hidden hover:text-green-400"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/20">
            <div className="flex flex-col px-6 py-6 space-y-4">
              {links.map((link) => {
                const isActive = pathname === link.href;

                if (link.name === "Our Projects") {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() => setShowProjects((prev) => !prev)}
                        className={`relative flex justify-between items-center rounded-lg px-2 py-2 text-base font-medium tracking-wide transition-all duration-300 ${
                          isActive
                            ? "text-green-400 bg-green-400/10"
                            : "text-white hover:text-green-400 hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 ml-2 transform transition-transform ${
                            showProjects ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown list */}
                      {showProjects && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-white/10 pl-4">
                          {projects.map((p, i) => (
                            <Link
                              key={i}
                              href={`/projects/${p.id}`}
                              onClick={() => setOpen(false)}
                              className="text-base font-medium tracking-wide transition-all duration-300 text-gray-300 hover:text-green-400 "
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Normal links
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`relative block rounded-lg px-2 py-2 text-base font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-green-400 bg-green-400/10"
                        : "text-white hover:text-green-400 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-green-400" />
                    )}
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setOpen(false);
                  setOpenMap(true);
                }}
                className="relative block rounded-lg px-2 py-2 text-left text-base font-medium tracking-wide text-white hover:text-green-400 hover:bg-white/5 transition-all duration-300"
              >
                View City Map
              </button>
            </div>
          </div>
        )}
      </nav>

      <MapModal isOpen={openMap} onClose={() => setOpenMap(false)} />
    </>
  );
};

export default Navbar;
