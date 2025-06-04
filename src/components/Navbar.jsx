import React, { useState } from "react";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Design"];

  return (
    <nav className="bg-gradient-to-b from-slate-800 to-slate-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-start items-center">
        {/* Logo */}
        

        {/* Nav items (hidden on mobile) */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavItem key={item} label={item} />
          ))}
        </div>

        {/* Hamburger menu button (visible on mobile) */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileMenu items={navItems} />}
    </nav>
  );
}

