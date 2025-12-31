
import React from 'react';
import { MapPin } from 'lucide-react';

const Areas: React.FC = () => {
  const regions = [
    'Greater London & South East',
    'West Midlands & Birmingham',
    'Manchester & North West',
    'Yorkshire & North East',
    'South West & Bristol',
    'All Regions of Wales',
    'Major Cities of Scotland (Edinburgh, Glasgow)',
    'East Midlands & Leicester'
  ];

  return (
    <div className="bg-white pb-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-8 font-heading">
            Areas Covered
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We provide services across the entirety of England and Wales, as well as major cities in Scotland, 
            using our highly trained staff and fully trusted suppliers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&h=1000&auto=format&fit=crop" 
                alt="UK Coverage" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-full shadow-xl flex items-center space-x-3 border-2 border-primary animate-bounce">
                <MapPin className="text-primary" />
                <span className="font-bold text-secondary">UK Wide Coverage</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-secondary mb-8 font-heading">Nationwide Reliability</h2>
              <p className="text-gray-600 mb-12 text-lg">
                Our operational reach allows us to support multi-site FM contracts and local businesses alike. 
                Whether you need a one-off retail guard in Leeds or a full cleaning team for a corporate HQ in London, 
                MetroSecure is positioned to respond rapidly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {regions.map((region) => (
                  <div key={region} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-gray-700 font-medium">{region}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-secondary rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4 font-heading">Need service in your area?</h3>
                <p className="opacity-80 mb-6">Our response teams are standing by to verify coverage and deployment times for your specific location.</p>
                <a href="#/contact" className="inline-block bg-primary text-white px-8 py-3 rounded font-bold uppercase transition-all hover:bg-orange-600">
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;
