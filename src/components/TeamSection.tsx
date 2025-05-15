
import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">OUR TEAM</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
              alt="Team member" 
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="section-subtitle">CHRISTINA VALLEJO DRAKE</h3>
            <p className="text-gray-300 mb-4">
              Co-founder & Chief Executive Officer
            </p>
            <p className="text-gray-300">
              Christina brings over 15 years of experience in aerospace engineering and mineral resource management. After earning her Ph.D. in Aerospace Engineering from MIT, she worked with leading space agencies and mining corporations to develop innovative remote sensing technologies for resource identification.
            </p>
            <p className="text-gray-300">
              Her vision for sustainable resource utilization both on Earth and in space has been the driving force behind Solox Space Mining's mission. Christina has published numerous papers on extra-terrestrial resource extraction and is a frequent speaker at international space symposiums.
            </p>
            <p className="text-gray-300">
              Under her leadership, Solox has developed proprietary remote sensing technology that is revolutionizing how we identify critical mineral deposits both on our planet and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
