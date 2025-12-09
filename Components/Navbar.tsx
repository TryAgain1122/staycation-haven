"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = ["Havens", "Contacts", "Location", "About"];

  // Hide navbar on Login page
  if (pathname === "/Login") {
    return null;
  }

  return (
    <nav className="fixed w-full h-16 px-6 bg-white shadow-md z-50">
      <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo with animation */}
        <Link href={"/"}>
          <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="/Images/shlogo.png"
              alt="Staycation Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Staycation
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => {
            let href = "/";
            if (item === "Contacts") href = "/Contacts";
            else if (item === "Location") href = "/Location";
            else if (item === "Login") href = "/Login";
            else if (item === "Havens") href = "/Rooms";

            const isActive = pathname === href;

            return (
              <Link key={idx} href={href}>
                <div className="relative cursor-pointer group">
                  <span className={`${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-yellow-600"
                  } transition-colors duration-300 font-medium`}>
                    {item}
                  </span>
                  {/* Animated underline - always visible when active */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </div>
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link href="/Login">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {menuItems.map((item, idx) => {
            let href = "/";
            if (item === "Contacts") href = "/Contacts";
            else if (item === "Location") href = "/Location";
            else if (item === "Login") href = "/Login";
            else if (item === "Havens") href = "/Rooms";

            const isActive = pathname === href;

            return (
              <div
                key={idx}
                className={`transform transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <Link href={href}>
                  <div className={`${
                    isActive
                      ? "text-orange-600 bg-orange-50 font-semibold border-l-4 border-orange-600"
                      : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  } transition-colors duration-300 font-medium py-2 px-4 rounded-lg cursor-pointer`}>
                    {item}
                  </div>
                </Link>
              </div>
            );
          })}

          {/* Mobile CTA Button */}
          <div
            className={`transform transition-all duration-300 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: `${menuItems.length * 50}ms` }}
          >
            <Link href="/Login">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-md">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm top-16 z-40 animate-fade-in"
        ></div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
