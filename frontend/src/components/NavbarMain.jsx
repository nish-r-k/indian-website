
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SisuniLogo from "../assets/SisuniLogo.png";
import { HashLink } from "react-router-hash-link";

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphic Navbar */}
      <nav className="bg-white/60 backdrop-blur-lg border-b border-gray-200/50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between py-4">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-2">
              <img
                src={SisuniLogo}
                alt="Sisuni Logo"
                className="h-12 w-12 object-contain"
              />
              <Link to="/" className="text-xl md:text-2xl font-bold tracking-wide">
                <span className="text-[#0268C7]">Sisuni</span>{" "}
                <span className="text-[#0268C7]">Infotech</span>
              </Link>
            </div>

        
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors">
                Home
              </Link>
              
              <Link to="/services" className="text-gray-700 hover:text-black transition-colors">
                Services
              </Link>

              <Link to="/careers" className="text-gray-700 hover:text-black transition-colors">
                Careers
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
                About Us
              </Link>

              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-black"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Overlay Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out z-40">

            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-gray-700 hover:text-black"
            >
              <X size={32} />
            </button>

            <Link to="/" onClick={toggleMenu} className="text-xl font-semibold hover:text-blue-600">
              Home
            </Link>

            <Link to="/about" onClick={toggleMenu} className="text-xl font-semibold hover:text-blue-600">
              About Us
            </Link>

            <Link to="/services" onClick={toggleMenu} className="text-xl font-semibold hover:text-blue-600">
              Services
            </Link>

            <Link to="/careers" onClick={toggleMenu} className="text-xl font-semibold hover:text-blue-600">
              Careers
            </Link>

            <Link to="/contact" onClick={toggleMenu}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarMain;


