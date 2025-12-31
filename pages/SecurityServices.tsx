
import React from 'react';
import { Link } from 'react-router-dom';

const securityServices = [
  {
    title: 'Event Security',
    description: 'MetroSecure provides professional event stewards to support the safe and efficient operation of events of all sizes. Our teams assist with crowd guidance, access coordination, and visitor support, helping to maintain an organised, controlled, and welcoming environment.',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Traffic Marshals',
    description: 'We supply trained traffic and car park marshals to manage vehicle movement and parking at events, venues, and commercial sites. Our marshals help reduce congestion, improve traffic flow, and support pedestrian safety in high-traffic environments.',
    image: 'https://images.unsplash.com/photo-1518086054817-21a4155986fc?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  },
  {
    title: 'Front-of-House Security Support',
    description: 'MetroSecure offers front-of-house security personnel for receptions, entrances, and public-facing areas. Our staff assist with visitor sign-in, provide guidance, and maintain a visible, professional presence that supports both security and customer experience.',
    image: 'https://images.unsplash.com/photo-1582653280643-e79c79219b19?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Corporate Concierge Services',
    description: 'We provide concierge services for corporate offices and residential developments, combining security awareness with a customer-focused approach. Our personnel support site management through professional communication, consistency, and attention to detail.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  },
  {
    title: 'Site Observation & Monitoring Staff',
    description: 'We supply site observation personnel to support asset protection and situational awareness. Duties include monitoring activity, recording incidents, and reporting concerns, providing added oversight without direct physical intervention.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Retail Presence Staff',
    description: 'MetroSecure supplies retail presence staff to support loss prevention through visible deterrence, observation, and reporting. Our teams contribute to a safe, professional retail environment while maintaining positive engagement with customers and staff.',
    image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  },
  {
    title: 'Security Guarding',
    description: 'We provide security guarding services to protect people, property, and premises. Where licensable activity is required, guarding services are delivered by fully SIA-licensed security officers, operating in accordance with site instructions, risk assessments, and UK regulatory requirements.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Door Supervision',
    description: 'MetroSecure offers door supervision services for licensed premises, venues, and events. Services are delivered by appropriately SIA-licensed door supervisors, supporting access control, venue safety, and customer management in line with legal obligations.',
    image: 'https://images.unsplash.com/photo-1549413243-7c390500735d?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  }
];

const SecurityServices: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-8 font-heading">
            Security Services
          </h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              MetroSecure delivers practical, compliant security solutions tailored to the needs of Facilities Management (FM) companies 
              and small to medium-sized enterprises (SMEs). Our services are designed to integrate seamlessly with site operations, 
              providing dependable personnel with clearly defined responsibilities.
            </p>
            <p>
              All services are delivered within established legal frameworks. Where licensable activity is required, services are provided 
              exclusively by appropriately SIA-licensed personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {securityServices.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  service.layout === 'left' ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-xl shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 rounded-xl border-4 border-primary/20 -m-4 -z-10 group-hover:m-0 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-black text-secondary font-heading">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8 font-heading">Supporting FM Companies & SMEs</h2>
          <p className="max-w-3xl mx-auto text-lg opacity-80 leading-relaxed">
            Our security services are designed to complement FM contracts and SME operations. We offer flexible deployment, 
            responsive management, and clear communication, ensuring smooth integration with existing site teams and procedures.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
