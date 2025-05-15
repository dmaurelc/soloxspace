
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-solox-darkgray py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-lg font-semibold">
              <span className="text-solox-blue">SOLOX</span> <span className="text-white">SPACE</span>
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Solox Space Mining. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
