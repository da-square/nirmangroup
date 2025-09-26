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

const socialLinks = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Twitter },
  { href: "#", icon: Linkedin },
  { href: "#", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="border-t border-gray-800 text-gray-500"></div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-16">
        {/* Brand + About */}
        <div className="flex-1 text-center md:text-left">
          <Image
            src="/images/logo/header-logo.png"
            alt="Dholera Nirman Group"
            width={200}
            height={70}
            className="mx-auto md:mx-0 mb-6"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            Building the future of smart cities with trust, innovation, and
            sustainability.
          </p>
          <p className="mt-3 text-yellow-400 font-semibold">
            Your vision, our commitment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-yellow-400 shrink-0" />
              <span>
                303, Titanium One, Pakwan Cross Road, S.G. Highway, Bodakdev,
                Ahmedabad-380054
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-yellow-400 shrink-0" />
              <a
                href="tel:+919998842046"
                className="hover:text-yellow-400 transition-colors"
              >
                +91-9998842046
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-yellow-400 shrink-0" />
              <a
                href="mailto:info@dholeranirmangroup.com"
                className="hover:text-yellow-400 transition-colors"
              >
                info@dholeranirmangroup.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map(({ href, icon: Icon }, idx) => (
              <a
                key={idx}
                href={href}
                className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors shadow-md"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} Dholera Nirman Group. All Rights Reserved.
      </div>
    </footer>
  );
}
