
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hawk-dark-blue bg-opacity-95 shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-bold">HAWK<span className="text-hawk-accent-blue">WRX</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-hawk-accent-blue transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-hawk-accent-blue transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-hawk-dark-blue bg-opacity-95 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                <div className="rounded-md py-1">
                  <a
                    href="#features"
                    className="block px-4 py-2 text-sm text-white hover:bg-hawk-medium-blue"
                  >
                    Virtual Bird Table
                  </a>
                  <a
                    href="#deployment"
                    className="block px-4 py-2 text-sm text-white hover:bg-hawk-medium-blue"
                  >
                    Deployment Options
                  </a>
                </div>
              </div>
            </div>
            <a href="#contact" className="text-white hover:text-hawk-accent-blue transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-hawk-accent-blue hover:bg-blue-600 text-white"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-hawk-dark-blue bg-opacity-95 animate-slide-in-right">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-hawk-medium-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-hawk-medium-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Virtual Bird Table
            </a>
            <a
              href="#deployment"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-hawk-medium-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Deployment Options
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-hawk-medium-blue"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-hawk-accent-blue hover:bg-blue-600 text-white mt-4"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
