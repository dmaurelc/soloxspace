import React from "react";
import { ChevronUp, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/planets1.jpg"
          alt="Space background with planets"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-solox-blue/10 hover:bg-solox-blue/20 text-solox-blue p-3 rounded-full mb-8 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>

          <div className="text-3xl font-audiowide mb-4">
            <span className="text-solox-blue">Solox</span>{" "}
            <span className="text-white">Space</span>
          </div>

          {/* <div className="flex space-x-6 mb-12">
            <a
              href="https://twitter.com/SoloxSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-solox-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/solox-space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-solox-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/soloxspace/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-solox-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-4 md:mb-0">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <a
                href="#about"
                className="text-gray-400 hover:text-solox-blue transition-colors text-sm font-inter"
              >
                About
              </a>
              <a
                href="#solution"
                className="text-gray-400 hover:text-solox-blue transition-colors text-sm font-inter"
              >
                Solution
              </a>
              <a
                href="#team"
                className="text-gray-400 hover:text-solox-blue transition-colors text-sm font-inter"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-solox-blue transition-colors text-sm font-inter"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-gray-500 text-sm font-inter">
              &copy; {currentYear} Solox Space. All rights reserved.
            </p>
            <a
              href="https://www.dmaurel.cl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Diseñador Web Freelance"
              className="text-solox-blue hover:text-solox-blue/80 text-xs font-inter transition-colors"
            >
              dmaurel.cl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
