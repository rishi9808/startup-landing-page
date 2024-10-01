"use client";
import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border w-10 h-10 rounded-lg inline-flex justify-center items-center border-white/15 mx-4">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>

          {/* Navigation Links (Hidden on small screens) */}
          <div className="hidden md:block">
            <nav className="flex space-x-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Home
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                About
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Projects
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Mobile Menu Icon and Button */}
          <div className="ml-6 flex items-center gap-4">
            {/* Mobile Menu Icon */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? (
                <MenuIcon className="w-6 h-6" /> // Close icon when menu is open
              ) : (
                <MenuIcon className="w-6 h-6" /> // Menu icon when menu is closed
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu (only visible when menuOpen is true) */}
        {menuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-4 text-sm text-center">
              <a href="#" className="text-white/70 hover:text-white transition">
                Home
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                About
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Projects
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Contact Us
              </a>
              <Button>Contact Us</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
