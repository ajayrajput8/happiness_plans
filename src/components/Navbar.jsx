import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 sm:p-6 text-black shadow relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Title */}
        <div className="text-xl font-bold hover:scale-105">Happiness Plans</div>

        {/* Hamburger menu - visible on small screens */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Center nav links */}
        <div className="hidden sm:flex space-x-12 text-lg absolute sm:static left-1/2 sm:left-auto transform sm:transform-none -translate-x-1/2 sm:translate-x-0">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Right: Download */}
        <div className="hidden sm:block text-lg hover:underline cursor-pointer">Download</div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-center space-y-4 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <div className="hover:underline cursor-pointer">Download</div>
        </div>
      )}
    </nav>
  );
}
