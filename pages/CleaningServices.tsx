import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2 } from 'lucide-react';

/**
 * CleaningServices Component
 * This is the main landing page for the cleaning section.
 * It provides two clear paths for the user: Domestic or Commercial.
 */
const CleaningServices: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Intro Section: High-level overview of MetroSecure Cleaning */}
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

      {/* 2. Selection Cards: The "Decision Point" for the user */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Domestic Card - Navigates to /cleaning/domestic */}
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
                
                {/* Updated from button to Link */}
                <Link 
                  to="/cleaning/domestic"
                  className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-bold uppercase transition-all shadow-lg text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Commercial Card - Navigates to /cleaning/commercial */}
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
                
                {/* Updated from button to Link */}
                <Link 
                  to="/cleaning/commercial"
                  className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-bold uppercase transition-all shadow-lg text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningServices;