
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hawk-dark-blue py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">HAWK<span className="text-hawk-accent-blue">WRX</span></h3>
            <p className="text-gray-400 mb-4">
              Next-generation tactical collaboration solutions for defense and security operations.
            </p>
            <p className="text-gray-400">
              Developed in partnership with the British Army.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-hawk-accent-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-hawk-accent-blue transition-colors">
                  VBT Features
                </a>
              </li>
              <li>
                <a href="#deployment" className="text-gray-400 hover:text-hawk-accent-blue transition-colors">
                  Deployment Options
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-hawk-accent-blue transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic">
              <p className="text-gray-400 mb-2">
                United Kingdom
              </p>
              <p className="text-gray-400 mb-2">
                <a href="mailto:contact@hawkwrx.com" className="hover:text-hawk-accent-blue transition-colors">
                  contact@hawkwrx.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="https://www.hawkwrx.com" target="_blank" rel="noopener noreferrer" className="hover:text-hawk-accent-blue transition-colors">
                  www.hawkwrx.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} HAWKWRX. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hawk-accent-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-hawk-accent-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
