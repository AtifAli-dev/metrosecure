import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, CheckCircle, Info, Clock, PoundSterling, Mail, Phone } from 'lucide-react';

const CleaningServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'landing' | 'domestic' | 'commercial'>('landing');

  if (activeTab === 'domestic') return <DomesticCleaningView onBack={() => setActiveTab('landing')} />;
  if (activeTab === 'commercial') return <CommercialCleaningView onBack={() => setActiveTab('landing')} />;

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-8 font-heading">
            Cleaning Services
          </h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              At MetroSecure Cleaning, we believe that a clean, safe, and well-maintained environment is essential to the user experience. 
              It promotes wellbeing, strengthens brand image, and creates positive first impressions.
            </p>
            <p>
              Through trained teams, structured processes, and a commitment to sustainability, we deliver consistent, 
              high-quality cleaning services across residential, commercial, and managed environments throughout the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Domestic Card */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=800&h=1000&auto=format&fit=crop" 
                alt="Domestic Cleaning" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Home className="text-primary mb-4" size={40} />
                <h2 className="text-3xl font-black mb-4 font-heading">Domestic Cleaning for Residential Sites</h2>
                <p className="mb-6 opacity-80">Professional domestic cleaning services for homeowners, landlords, and short-term rental hosts.</p>
                <button 
                  onClick={() => setActiveTab('domestic')}
                  className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-bold uppercase transition-all shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&h=1000&auto=format&fit=crop" 
                alt="Commercial Cleaning" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Building2 className="text-primary mb-4" size={40} />
                <h2 className="text-3xl font-black mb-4 font-heading">Commercial Cleaning for Businesses</h2>
                <p className="mb-6 opacity-80">Reliable commercial cleaning services for both small and large organisations across the UK.</p>
                <button 
                  onClick={() => setActiveTab('commercial')}
                  className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-bold uppercase transition-all shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DomesticCleaningView: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="bg-white pb-20">
    <section className="bg-secondary py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-black font-heading">Residential & Domestic Cleaning</h1>
        <button onClick={onBack} className="text-primary font-bold hover:underline">← Back to Services</button>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            MetroSecure provides professional domestic cleaning services for homeowners, landlords, letting agents, 
            serviced accommodation providers, and short-term rental hosts (including Airbnb properties).
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We offer flexible solutions ranging from one-off cleans to regular scheduled services, including daily, weekly, fortnightly, 
            and monthly cleaning. For regular bookings, clients benefit from the same cleaner assigned to each visit.
          </p>
          <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">Domestic services include:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Routine household cleaning',
              'End-of-tenancy cleaning',
              'Serviced accommodation cleaning',
              'Landlord & property management support',
              'Home office cleaning'
            ].map(item => (
              <li key={item} className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-primary flex-shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-xl h-fit">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-primary rounded-lg text-white">
              <PoundSterling size={24} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-secondary font-heading">Pricing</h4>
              <p className="text-gray-500">Simple and transparent</p>
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl border border-primary/20 shadow-sm mb-8">
            <span className="text-gray-400 block text-sm mb-2 uppercase tracking-widest font-bold">Starting from</span>
            <div className="text-5xl font-black text-secondary mb-2">£15<span className="text-xl font-medium text-gray-500">/hr</span></div>
            <p className="text-primary font-bold">Minimum 5h booking</p>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 text-sm text-gray-600">
              <Info className="text-primary flex-shrink-0" size={18} />
              <p>No hidden charges. We only charge a booking fee to the customer.</p>
            </div>
            <div className="flex items-start space-x-3 text-sm text-gray-600">
              <CheckCircle className="text-primary flex-shrink-0" size={18} />
              <p>Customers can pay cleaners directly via cash or online banking.</p>
            </div>
          </div>
          <div className="space-y-3">
             <a href="mailto:control@metrosecure.co.uk" className="flex items-center justify-center space-x-2 w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-black transition-colors">
                <Mail size={20} />
                <span>Email: control@metrosecure.co.uk</span>
             </a>
             <a href="https://wa.me/441316666666" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 w-full bg-[#25D366] text-white py-4 rounded-lg font-bold hover:opacity-90 transition-colors">
                <Phone size={20} />
                <span>WhatsApp: 01316666666</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CommercialCleaningView: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="bg-white pb-20">
    <section className="bg-secondary py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-black font-heading">Commercial Cleaning</h1>
        <button onClick={onBack} className="text-primary font-bold hover:underline">← Back to Services</button>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div className="order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&h=600&auto=format&fit=crop" 
            alt="Office Cleaning" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            MetroSecure delivers reliable commercial cleaning services for both small and large organisations across the UK. 
            We work in partnership with businesses and FM providers to deliver services that align with operational requirements 
            and compliance standards.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            From general office environments to specialist sites, our teams operate to agreed specifications, schedules, and site procedures.
          </p>
          <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">Commercial Services Include:</h3>
          <ul className="space-y-4">
            {[
              'Regular Office Cleaning',
              'Retail Cleaning Services',
              'Gym & Leisure Facility Cleaning',
              'School & Educational Facility Cleaning',
              'Warehouse & Industrial Cleaning',
              'Restaurant & Hospitality Cleaning',
              'Washroom Hygiene Services',
              'Waste Management Services'
            ].map(item => (
              <li key={item} className="flex items-center space-x-3 text-gray-700 font-medium">
                <CheckCircle className="text-primary" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            className="mt-12 inline-block bg-primary hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest transition-all shadow-xl"
          >
            Contact Us for a Quote
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CleaningServices;
