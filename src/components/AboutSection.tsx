
import React from 'react';
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
          ABOUT <span className="text-gradient">SOLOX SPACE</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <img 
                src="https://soloxspace.com/wp-content/uploads/2022/09/About-photo-high-res-1.jpg" 
                alt="Mars surface" 
                className="rounded-lg w-full h-auto object-cover shadow-xl shadow-solox-blue/10 hover-scale"
              />
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-solox-blue rounded-full flex items-center justify-center text-black font-audiowide text-xl opacity-90">2023</div>
            </div>
          </div>
          
          <div className={`md:w-1/2 space-y-6 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-solox-blue font-audiowide text-2xl">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              SOLOX applies remote sensing science to identify and characterize valuable resources on Earth and the Moon.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              For Earth, we discover and monitor critical minerals
              needed for the ongoing energy transition 
              (such as lithium, copper, nickel, etc) with unprecedented detail, 
              which significantly decreases investment risk and promotes the efficient use of these limited resources.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              For the Moon, we identify the resources necessary 
              to establish a sustainable human presence.
            </p>
            
            <div className="pt-4">
              <a href="#solution" className="solox-button">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
