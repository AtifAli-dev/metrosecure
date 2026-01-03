import React from 'react';
import { CheckCircle, PoundSterling, Info, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DomesticCleaning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pb-20">
      <section className="bg-secondary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-black font-heading">Residential & Domestic Cleaning</h1>
          <button onClick={() => navigate('/cleaning')} className="text-primary font-bold hover:underline">
            ← Back to Services
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MetroSecure provides professional domestic cleaning services for homeowners, landlords, and short-term rental hosts.
            </p>
            <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">Domestic services include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Routine household cleaning', 'End-of-tenancy cleaning', 'Serviced accommodation cleaning', 'Landlord support', 'Home office cleaning'].map(item => (
                <li key={item} className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-xl h-fit">
            <div className="text-center p-8 bg-white rounded-xl border border-primary/20 shadow-sm mb-8">
              <span className="text-gray-400 block text-sm mb-2 uppercase tracking-widest font-bold">Starting from</span>
              <div className="text-5xl font-black text-secondary mb-2">£15<span className="text-xl font-medium text-gray-500">/hr</span></div>
              <p className="text-primary font-bold">Minimum 5h booking</p>
            </div>
            <div className="space-y-3">
               <a href="mailto:control@metrosecure.co.uk" className="flex items-center justify-center space-x-2 w-full bg-secondary text-white py-4 rounded-lg font-bold">
                  <Mail size={20} /><span>Email Us</span>
               </a>
               <a href="https://wa.me/441316666666" className="flex items-center justify-center space-x-2 w-full bg-[#25D366] text-white py-4 rounded-lg font-bold">
                  <Phone size={20} /><span>WhatsApp Us</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomesticCleaning;