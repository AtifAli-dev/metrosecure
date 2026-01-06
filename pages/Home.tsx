import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Clock, Users, CheckCircle, Heart, Repeat, Handshake } from 'lucide-react';

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1600&h=900&auto=format&fit=crop',
    title: 'Manned Security Services',
    description: 'Reliable, fully trained officers standing ready to shield your business and assets.',
    link: '/security', // ✅ Link to security page
  },
  {
    image: 'https://res.cloudinary.com/dyb9eyvex/image/upload/v1767695516/deomostic_cleaning_a7kwly.png',
    title: 'Domestic Cleaning',
    description: 'Trusted, screened professionals dedicated to turning your home into a peaceful sanctuary.',
    link: '/cleaning', // ✅ Link to cleaning page
  },
  {
    image: 'https://res.cloudinary.com/dyb9eyvex/image/upload/v1767699829/commerical_cleaning_pa9ycr.png',
    title: 'Commercial Cleaning',
    description: 'Highly trained experts creating an attractive, hygienic, and secure environment for your brand.',
    link: '/cleaning', // ✅ You can change this to a separate commercial cleaning page if you have one
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section Carousel */}
      <section className="relative h-[80vh] top-6 w-full overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out scale-110"
              style={{ backgroundImage: `url('${item.image}')`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
            >
              <div className="absolute inset-0 bg-secondary/40" />
            </div>
            
            {/* Realignment: Heading and Paragraph now Left-aligned, Heading is Primary color */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-left">
              <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 font-heading drop-shadow-lg leading-tight">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-xl mb-8 font-light drop-shadow-md">
                {item.description}
              </p>
              <Link
                to={item.link}
                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introductory Section - Realigned to Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-8 font-heading">
              Welcome to <span className="text-primary">MetroSecure</span>
            </h2>
            <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                MetroSecure is a trusted UK provider of highly screened and vetted security and cleaning staff, 
                supporting Facilities Management companies with both long-term contract cover and short-notice, 
                ad-hoc requirements.
              </p>
              <p>
                Built for responsiveness and reliability, we rapidly source, deploy, and support high-quality 
                personnel across the UK — helping FM partners maintain service continuity without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MetroSecure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-16 font-heading text-center">
            Why Choose MetroSecure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseCard 
              title="Rapid Deployment" 
              description="Short-notice cover when operational pressures demand immediate action."
              icon={<Zap className="w-16 h-16 opacity-5 absolute -right-2 -bottom-2" />}
            />
            <WhyChooseCard 
              title="Flexible Workforce Solutions" 
              description="Reliable support for seasonal peaks, temporary cover, and long-term deployments."
              icon={<Users className="w-16 h-16 opacity-5 absolute -right-2 -bottom-2" />}
            />
            <WhyChooseCard 
              title="24/7 Operational Support" 
              description="Around-the-clock control and coordination for complete peace of mind."
              icon={<Clock className="w-16 h-16 opacity-5 absolute -right-2 -bottom-2" />}
            />
            <WhyChooseCard 
              title="Fully Vetted & Compliant Staff" 
              description="Every individual is carefully screened to meet UK regulatory and client standards."
              icon={<CheckCircle className="w-16 h-16 opacity-5 absolute -right-2 -bottom-2" />}
            />
          </div>
        </div>
      </section>

      {/* Our Core Values Section - Improved card styling for separation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-16 font-heading text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <CoreValueItem 
              title="Integrity" 
              description="Ethical, transparent processes underpin everything we do."
              icon={<Shield className="text-white w-6 h-6" />}
            />
            <CoreValueItem 
              title="Dependability" 
              description="We deliver consistently — when we commit, we perform."
              icon={<Handshake className="text-white w-6 h-6" />}
            />
            <CoreValueItem 
              title="Flexibility" 
              description="Adaptable, responsive staffing solutions shaped around your needs."
              icon={<Repeat className="text-white w-6 h-6" />}
            />
            <CoreValueItem 
              title="Long-Term Partnerships" 
              description="We focus on relationships that last, not short-term placements."
              icon={<Heart className="text-white w-6 h-6" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const WhyChooseCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
    {icon}
    <h3 className="text-xl font-bold text-secondary mb-4 relative z-10 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed relative z-10">
      {description}
    </p>
  </div>
);

const CoreValueItem: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center text-center p-8 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20 transform transition-transform hover:scale-110">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-secondary mb-4 font-heading">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
