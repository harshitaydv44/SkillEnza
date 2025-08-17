import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coins } from "lucide-react";
import SkillCoinBadge from "../ui/SkillCoinBadge";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = true; // TODO: Replace with auth context
  const skillCoinBalance = 25; // TODO: Replace with user context

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Discover Skills", path: "/discover" },
    { name: "My Skills", path: "/my-skills" },
    { name: "Book Session", path: "/book-session" },
    { name: "Streak Tracker", path: "/streak" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Profile", path: "/profile" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Sk
              </span>
              <Coins className="text-yellow-500 w-3 h-3 -mt-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                llEnza
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(item.path)
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/logout"
              className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Logout
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                    isActiveLink(item.path)
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/logout"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 transition-colors duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Floating SkillCoin Badge */}
      {isLoggedIn && <SkillCoinBadge balance={skillCoinBalance} floating />}
    </nav>
  );
}
