
import React from 'react';
import { Mail, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-mars-pattern bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">CONTACT US</h2>
        
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            Interested in learning more about our technologies or potential collaborations? Reach out to our team.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <a href="mailto:info@soloxspace.com" className="flex items-center text-solox-blue hover:underline">
              <Mail size={20} className="mr-2" />
              info@soloxspace.com
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-white hover:text-solox-blue transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-solox-blue transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
