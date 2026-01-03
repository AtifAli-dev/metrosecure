import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CommercialCleaning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pb-20">
      <section className="bg-secondary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-black font-heading">Commercial Cleaning</h1>
          <button onClick={() => navigate('/cleaning')} className="text-primary font-bold hover:underline">
            ← Back to Services
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800" 
              alt="Office Cleaning" className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">Commercial Services Include:</h3>
            <ul className="space-y-4">
              {['Regular Office Cleaning', 'Retail Cleaning', 'Gym Cleaning', 'School Cleaning', 'Warehouse Cleaning'].map(item => (
                <li key={item} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <CheckCircle className="text-primary" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-12 inline-block bg-primary text-white px-10 py-4 rounded-lg font-black uppercase shadow-xl">
              Contact Us for a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialCleaning;