import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import BookingWorkflow from '../components/BookingWorkflow';

const DomesticCleaning: React.FC = () => {
  const [postcode, setPostcode] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (postcode.length >= 5) {
      setShowBooking(true);
    }
  };

  if (showBooking) {
    return <BookingWorkflow initialPostcode={postcode} onCancel={() => setShowBooking(false)} />;
  }

  return (
    <div className="bg-white min-h-screen font-[Roboto]">
      {/* HERO SECTION */}
      <section className="bg-[#1b2a59] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f45228]/5 -skew-x-12 transform translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black font-[Lato] mb-6 leading-tight">
              Premium Residential <br />
              <span className="text-[#f45228]">Cleaning Services</span>
            </h1>

            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Find a vetted, reliable cleaner in your area. Booking takes less than 60 seconds.
            </p>

            <form onSubmit={handleStartBooking} className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1b2a59]/50"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-[#1b2a59] font-semibold focus:ring-4 focus:ring-[#f45228]/20 outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#f45228] hover:bg-[#f45228]/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#f45228]/20"
              >
                Find your cleaner <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-[#f45228]/10 rounded-2xl flex items-center justify-center text-[#f45228] mx-auto mb-6">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold font-[Lato] text-[#1b2a59] mb-4">
              Enter Postcode
            </h3>
            <p className="text-gray-600">
              Quickly check availability and pricing in your local area.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-[#f45228]/10 rounded-2xl flex items-center justify-center text-[#f45228] mx-auto mb-6">
              <ArrowRight size={32} />
            </div>
            <h3 className="text-xl font-bold font-[Lato] text-[#1b2a59] mb-4">
              Customise Clean
            </h3>
            <p className="text-gray-600">
              Choose your rooms, extra tasks, and preferred cleaning time.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-[#f45228]/10 rounded-2xl flex items-center justify-center text-[#f45228] mx-auto mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold font-[Lato] text-[#1b2a59] mb-4">
              Confirm & Pay
            </h3>
            <p className="text-gray-600">
              Relax while our vetted professional takes care of your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Re-using icon from previous snippet to maintain consistency
const CheckCircle: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default DomesticCleaning;
