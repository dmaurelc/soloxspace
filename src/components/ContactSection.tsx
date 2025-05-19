
import React, { useState } from 'react';
import { Mail, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the code to send the contact form data
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-cover bg-center bg-fixed relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/planets1.jpg" 
          alt="Space background with planets" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">CONTACT US</h2>
        </div>
        
        <div className={`max-w-4xl mx-auto glass-card p-8 md:p-12 mt-12 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-audiowide mb-6 text-solox-blue">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-inter">
                Interested in learning more about our technologies or potential collaborations? Reach out to our team to discuss how SOLOX Space can help advance your projects.
              </p>
              
              <div className="flex items-center mb-6">
                <Mail size={20} className="text-solox-blue mr-4" />
                <a href="mailto:info@soloxspace.com" className="text-white hover:text-solox-blue transition-colors font-inter">
                  info@soloxspace.com
                </a>
              </div>
              
              <div className="flex items-center space-x-6 mb-8">
                <a href="https://twitter.com/SoloxSpace" target="_blank" rel="noopener noreferrer" className="text-white hover:text-solox-blue transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com/soloxspace/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-solox-blue transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-audiowide mb-6 text-solox-blue">Contact Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 focus:border-solox-blue text-white font-inter"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 focus:border-solox-blue text-white font-inter"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 focus:border-solox-blue text-white font-inter"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 focus:border-solox-blue text-white font-inter min-h-[120px]"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="solox-button group w-full flex justify-center items-center"
                  disabled={submitted}
                >
                  {submitted ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
                  {!submitted && <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
