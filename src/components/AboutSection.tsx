
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-solox-blue/10 -top-[250px] -left-[250px] blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-solox-darkblue/10 bottom-[0px] right-[0px] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="section-title">
          ABOUT <span className="text-gradient">SOLOX SPACE MINING</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg" 
                alt="Mining minerals" 
                className="rounded-lg w-full h-auto object-cover shadow-xl shadow-solox-blue/10 hover-scale"
              />
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-solox-blue rounded-full flex items-center justify-center text-black font-bold text-xl opacity-90">2025</div>
            </div>
          </div>
          
          <div className={`md:w-1/2 space-y-6 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-solox-blue font-semibold text-2xl">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Solox Space Mining is a pioneering company at the forefront of space resource utilization and critical mineral discovery on Earth. We are developing cutting-edge remote sensing technology to identify valuable resources on the Moon and Mars, while simultaneously applying our expertise to locate critical minerals on our home planet.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team combines decades of experience in geology, aerospace engineering, and remote sensing to create solutions that will support humanity's journey to become a multi-planetary species while addressing the growing demand for critical minerals needed for clean energy technologies and modern electronics.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through our innovative approach, we aim to contribute to a sustainable future both on Earth and beyond, ensuring responsible resource utilization while enabling the next generation of space exploration and settlement.
            </p>
            
            <div className="pt-4">
              <a href="#minerals" className="solox-button">
                EXPLORE MINERALS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
