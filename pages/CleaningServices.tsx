import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const commercialCleaningServices = [
  {
    title: 'Office & Corporate Facility Cleaning',
    description: 'MetroSecure delivers regular contracted office cleaning tailored to modern corporate environments. From daily workstation sanitisation, boardroom detailing, and communal kitchen hygiene to waste segregation and washroom servicing, we maintain impeccable workplaces that enhance staff productivity and corporate reputation.',
    standards: ['BICs trained operatives', 'Daily and out-of-hours scheduling', 'Sustainable eco-friendly chemicals', 'Touchpoint sanitisation protocols'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Warehouse & Logistics Depot Cleaning',
    description: 'Designed for high-throughput distribution centres, e-commerce fulfillment hubs, and manufacturing plants across the UK. Our teams operate ride-on scrubber-dryers, clear high-level racking dust, and maintain clear transport lanes while adhering strictly to site Health & Safety RAMS.',
    standards: ['Industrial scrubber-dryer certified', 'COSHH & RAMS safety compliance', 'High-level dust & beam clearance', 'Loading bay & yard maintenance'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  },
  {
    title: 'Mall, Retail & Supermarket Cleaning',
    description: 'High-footfall retail centres demand rapid, discreet, and continuous cleanliness. MetroSecure provides day-janitors and night deep-clean teams for shopping centres, retail parks, and supermarkets to guarantee pristine floors, spotless glass atriums, and hygienic public amenities.',
    standards: ['Slip-hazard prevention & wet floor control', 'High-gloss hard floor burnishing', 'Public washroom continuous upkeep', 'Rapid spillage response teams'],
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Commercial Kitchen & Hospitality Deep Cleans',
    description: 'Comprehensive commercial kitchen degreasing, extraction canopy sanitisation, and food preparation hygiene. We support hotels, restaurants, and corporate catering facilities in surpassing Food Standards Agency (FSA) and TR19 fire safety hygiene criteria.',
    standards: ['TR19 grease extract compliance', 'Heavy equipment steam cleaning', 'Food-contact surface sanitisation', 'Certification provided post-clean'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  },
  {
    title: 'Educational & Institutional Cleaning',
    description: 'Providing trusted, DBS-vetted cleaning personnel for schools, colleges, universities, and public institutions. We offer flexible term-time daily cleaning regimes and comprehensive holiday deep cleans, prioritising infection control and safeguarding.',
    standards: ['Enhanced DBS-checked staff', 'Infection prevention sanitisation', 'Flexible term-time & holiday schedules', 'Classroom & science lab compliance'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'right'
  },
  {
    title: 'Post-Construction & Handover Sparkle Cleans',
    description: 'Specialist builder and handover cleans for contractors, fit-out specialists, and commercial landlords. Our teams remove plaster, dust, paint overspray, and protective films, transforming finished build sites into spotless, client-ready commercial properties.',
    standards: ['CSCS registered cleaning teams', 'Detailed architectural glass cleaning', 'Debris & fine silica dust removal', 'Full pre-occupation sign-off'],
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&h=600&auto=format&fit=crop',
    layout: 'left'
  }
];

const CleaningServices: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles size={16} />
            <span>Commercial Facilities Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-8 font-heading">
            Commercial Cleaning Services
          </h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              MetroSecure delivers dependable, high-standard commercial cleaning solutions specifically tailored for UK Facilities Management companies, corporate headquarters, logistics operations, and commercial venues.
            </p>
            <p>
              Our operatives are fully vetted, trained in British Institute of Cleaning Science (BICS) best practices, and equipped with industrial-grade machinery and eco-responsible consumables to keep your facilities pristine, compliant, and safe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {commercialCleaningServices.map((service, index) => (
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
                <div className="w-full md:w-1/2 space-y-6 text-left">
                  <h3 className="text-3xl font-black text-secondary font-heading">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {service.standards.map((std, sIdx) => (
                      <li key={sIdx} className="flex items-center text-gray-700 font-medium text-sm">
                        <CheckCircle2 className="text-primary mr-2.5 flex-shrink-0" size={18} />
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-3.5 rounded font-bold uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance Band */}
      <section className="py-16 bg-[#101935] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="mx-auto text-primary mb-4" size={36} />
              <h4 className="text-xl font-bold mb-2">COSHH & RAMS Certified</h4>
              <p className="text-slate-300 text-sm">Full health and safety documentation and risk assessments supplied for all contracted sites.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Sparkles className="mx-auto text-primary mb-4" size={36} />
              <h4 className="text-xl font-bold mb-2">BICS Methodologies</h4>
              <p className="text-slate-300 text-sm">Operatives trained according to colour-coded British Institute of Cleaning Science hygiene standards.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="mx-auto text-primary mb-4" size={36} />
              <h4 className="text-xl font-bold mb-2">24/7 Rapid Response</h4>
              <p className="text-slate-300 text-sm">Short-notice cover and emergency spill teams ready to deploy across UK metropolitan hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6 font-heading">
            Need Reliable Commercial Cleaners for Your Facilities?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Speak with our commercial facilities operations team today for a tailored quotation or site assessment.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider transition-all shadow-xl text-lg"
          >
            Contact Our Cleaning Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CleaningServices;