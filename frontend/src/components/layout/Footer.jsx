import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  const socials = [
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Social Icons */}
          <div className="flex space-x-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SkillEnza – Your Time is Currency
          </p>
        </div>
      </div>
    </footer>
  );
}
