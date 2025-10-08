"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { socialLinks } from "@/data/socialLinks ";

const socialMediaLinks = [
  { href: socialLinks.facebook, icon: Facebook },
  { href: socialLinks.linkedin, icon: Linkedin },
  { href: socialLinks.instagram, icon: Instagram },
  { href: "#", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-sky-500 via-sky-400 to-green-300 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-300/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-300/20 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-16 relative z-10">
        {/* Brand + About */}
        <div className="flex-1 text-center md:text-left">
          <Image
            src="/images/logo/header-logo.png"
            alt="Dholera Nirman Group"
            width={200}
            height={70}
            className="mx-auto md:mx-0 mb-6"
          />
          <p className="text-sky-100 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            Building the future of smart cities with trust, innovation, and
            sustainability.
          </p>
          <p className="mt-3 text-sky-200 font-semibold">
            Your vision, our commitment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-sky-100 mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm text-sky-100">
            <li className="flex items-start justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-sky-200 shrink-0" />
              <span>
                303, Titanium One, Pakwan Cross Road, S.G. Highway, Bodakdev,
                Ahmedabad-380054
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-sky-200 shrink-0" />
              <a
                href="tel:+919998842046"
                className="hover:text-sky-100 transition-colors"
              >
                +91-9998842046
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-sky-200 shrink-0" />
              <a
                href="mailto:info@dholeranirmangroup.com"
                className="hover:text-sky-100 transition-colors"
              >
                info@dholeranirmangroup.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-sky-100 mb-6">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialMediaLinks.map(({ href, icon: Icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-sky-400 hover:bg-sky-300 hover:text-black transition-colors shadow-md"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-200/40 py-6 text-center text-xs md:text-sm text-sky-100 relative z-10">
        © {new Date().getFullYear()} Dholera Nirman Group. All Rights Reserved.
      </div>
    </footer>
  );
}
