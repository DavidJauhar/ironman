"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white text-black border-b border-gray-200 py-2"
            : "bg-transparent text-white py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl tracking-tighter uppercase">
                Ironman 70.3
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <NavItem href="#training" label="TRAINING" />
              <NavItem href="#nutrition" label="NUTRITION" />
              <NavItem href="#gear" label="GEAR" />
              <NavItem href="#races" label="RACES" />
              <NavItem href="#philanthropy" label="SUPPORT" />
            </div>

            {/* Action Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <FaSearch className="text-lg" />
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <FaUser className="text-lg" />
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <FaHeart className="text-lg" />
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <FaShoppingBag className="text-lg" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-black border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
              <MobileNavItem
                href="#training"
                label="TRAINING"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavItem
                href="#nutrition"
                label="NUTRITION"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavItem
                href="#gear"
                label="GEAR"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavItem
                href="#races"
                label="RACES"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavItem
                href="#philanthropy"
                label="SUPPORT"
                onClick={() => setIsOpen(false)}
              />

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <Link
                    href="#"
                    className="text-black hover:text-gray-600 flex items-center space-x-2"
                  >
                    <FaUser className="text-lg" />
                    <span>Account</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:text-gray-600 flex items-center space-x-2"
                  >
                    <FaHeart className="text-lg" />
                    <span>Favorites</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:text-gray-600 flex items-center space-x-2"
                  >
                    <FaShoppingBag className="text-lg" />
                    <span>Bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

// Desktop navigation item
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-bold text-sm tracking-wide hover:text-gray-600 transition-colors"
    >
      {label}
    </Link>
  );
}

// Mobile navigation item
function MobileNavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="block font-bold text-lg hover:text-gray-600 transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
