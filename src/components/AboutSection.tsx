
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          ABOUT <span className="text-solox-blue">SOLOX SPACE MINING</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg" 
              alt="Mining minerals" 
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-solox-blue font-semibold text-xl">Our Vision</h3>
            <p className="text-gray-300">
              Solox Space Mining is a pioneering company at the forefront of space resource utilization and critical mineral discovery on Earth. We are developing cutting-edge remote sensing technology to identify valuable resources on the Moon and Mars, while simultaneously applying our expertise to locate critical minerals on our home planet.
            </p>
            <p className="text-gray-300">
              Our team combines decades of experience in geology, aerospace engineering, and remote sensing to create solutions that will support humanity's journey to become a multi-planetary species while addressing the growing demand for critical minerals needed for clean energy technologies and modern electronics.
            </p>
            <p className="text-gray-300">
              Through our innovative approach, we aim to contribute to a sustainable future both on Earth and beyond, ensuring responsible resource utilization while enabling the next generation of space exploration and settlement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
