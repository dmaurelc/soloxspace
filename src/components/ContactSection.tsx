
import React, { useState } from 'react';
import { Mail, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Aquí iría el código para enviar el email
      console.log('Subscribed with:', email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-24 bg-mars-pattern bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">CONTACT US</h2>
        </div>
        
        <div className={`max-w-4xl mx-auto glass-card p-8 md:p-12 mt-12 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-solox-blue">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Interested in learning more about our technologies or potential collaborations? Reach out to our team to discuss how Solox Space Mining can help advance your projects.
              </p>
              
              <div className="flex items-center mb-6">
                <Mail size={20} className="text-solox-blue mr-4" />
                <a href="mailto:info@soloxspace.com" className="text-white hover:text-solox-blue transition-colors">
                  info@soloxspace.com
                </a>
              </div>
              
              <div className="flex items-center space-x-6 mb-8">
                <a href="#" className="text-white hover:text-solox-blue transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-solox-blue transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
              </div>
              
              <div className="hidden md:block mt-12">
                <div className="relative inline-flex items-center justify-center w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-solox-blue border-dashed animate-spin-slow"></div>
                  <div className="text-center">
                    <div className="text-solox-blue text-3xl font-bold">24/7</div>
                    <div className="text-sm text-gray-400">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-solox-blue">Newsletter</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Stay updated with our latest developments, space mining insights, and industry news by subscribing to our newsletter.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/50 border-gray-700 focus:border-solox-blue text-white"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="solox-button group w-full flex justify-center items-center"
                  disabled={submitted}
                >
                  {submitted ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
                  {!submitted && <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />}
                </button>
              </form>
              
              <div className="mt-8 p-4 bg-black/30 border border-gray-700 rounded-md">
                <h4 className="text-white font-semibold mb-2">Our Location</h4>
                <p className="text-gray-400">
                  SOLOX Space Mining HQ<br />
                  1250 Innovation Drive<br />
                  Houston, TX 77058
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
