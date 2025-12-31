import React from 'react';
import { ShieldCheck, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Introduction */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-8 font-heading">
              About <span className="text-primary">MetroSecure</span>
            </h1>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                MetroSecure is an established, UK-registered provider of security, safety, and professional cleaning services, 
                delivering reliable, compliant, and high-quality workforce solutions across commercial, corporate, and event environments.
              </p>
              <p>
                We support Facilities Management companies by supplying fully vetted, well-trained personnel for a wide range of roles, 
                including static guarding, door supervision, event stewarding, site safety, front-of-house services, and professional cleaning operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our People - Realigned to Left */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&h=600&auto=format&fit=crop" 
                alt="Our People" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-black text-secondary mb-6 font-heading">Our People</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At MetroSecure, we recognise that our people are our greatest asset. From senior leadership to frontline operatives, 
                  the quality of our service is defined by the quality of our workforce.
                </p>
                <p>
                  We are committed to recruiting, developing, and retaining the best professionals in the industry. Every individual is 
                  carefully selected, provided with role-specific training, and supported to perform to the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=600&auto=format&fit=crop" 
                alt="Our Approach" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-black text-secondary mb-6 font-heading">Our Approach</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every client environment is different, and we treat it as such. Personnel are selected and deployed based on role suitability, 
                  experience, training, and responsibility.
                </p>
                <p>
                  Before deployment, staff are clearly briefed on site requirements, expectations, and authorised duties. We work closely 
                  with our clients to ensure seamless integration with existing teams and processes.
                </p>
                <p className="font-bold text-primary">
                  Compliance sits at the heart of everything we do. Our services are delivered using a compliance-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Standards - Realigned to Left */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 h-full">
              <img 
                src="https://res.cloudinary.com/dyb9eyvex/image/upload/v1767183410/ourstandards_image_kymvd1.png" 
                alt="Business Standards" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-black text-secondary mb-6 font-heading">Business Standards</h2>
              <p className="text-gray-600 mb-6">
                MetroSecure understands the importance of strict adherence to recognised industry standards when delivering security and cleaning services.
              </p>
              <ul className="space-y-3">
                {['BS7858 Employment Screening', 'Baseline Personnel Security Standard (BPSS)', 'Counter Terrorist Check (CTC)', 'Security Check (SC)', 'Developed Vetting (DV)'].map((std) => (
                  <li key={std} className="flex items-center justify-start text-gray-700 font-medium">
                    <ShieldCheck className="text-primary mr-3" size={20} /> {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-8 font-heading">Our Vision</h2>
            <p className="text-xl leading-relaxed opacity-90 italic">
              "To be the premier UK partner for facilities management, setting the benchmark for security and cleanliness 
              through innovation, integrity, and unparalleled workforce excellence."
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Target size={300} />
        </div>
      </section>
    </div>
  );
};

export default About;
