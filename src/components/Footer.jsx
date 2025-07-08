import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Name + Year */}
        <p className="text-sm text-center sm:text-left">
          © {year} Nishchith Rao Palimar Raghupathi. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/NishchithRao-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nishchith-rao-p-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
