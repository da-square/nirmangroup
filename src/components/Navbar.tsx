"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Dholera News", href: "/news" },
  { name: "Download Brochure", href: "/brochure" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-[12%] z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
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
              className=""
              width={96}
              height={96}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-lg transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-yellow-400"
                    : "text-gray-200 hover:text-yellow-300"
                }`}
              >
                {link.name}
                {/* Underline effect */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 transform scale-x-0 transition-transform duration-300 ${
                    pathname === link.href ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-200 hover:text-yellow-400"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative block rounded-lg px-2 py-2 text-base font-medium tracking-wide transition-all duration-300
          ${
            pathname === link.href
              ? "bg-yellow-400/10 text-yellow-400"
              : "text-gray-300 hover:text-yellow-300 hover:bg-white/5"
          }`}
              >
                {link.name}

                {/* Active underline accent */}
                {pathname === link.href && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-yellow-400"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
