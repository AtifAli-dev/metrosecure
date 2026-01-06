
import React from 'react';
import { CheckCircle, PartyPopper, Calendar, MapPin, Clock } from 'lucide-react';
import { BookingState, EXTRA_TASKS } from '../type';

interface Props {
  data: BookingState;
  totalPrice: number;
}

const Summary: React.FC<Props> = ({ data, totalPrice }) => {
  const selectedExtras = EXTRA_TASKS.filter(t => data.extras.includes(t.id));

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
          <PartyPopper size={40} />
        </div>
        <h2 className="text-4xl font-black text-secondary mb-4">Booking Confirmed!</h2>
        <p className="text-xl text-gray-500">Thank you for choosing <span className="text-primary font-bold">MetroSecure Cleaning</span></p>
      </div>

      <div className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-secondary p-8 text-white">
          <h3 className="text-2xl font-black">Booking Summary</h3>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-lg text-secondary">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Services</p>
                  <p className="font-bold text-secondary">
                    {data.bedrooms} Bedrooms, {data.bathrooms} Bathrooms
                  </p>
                  {selectedExtras.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      Extras: {selectedExtras.map(e => e.label).join(', ')}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-lg text-secondary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Duration & Frequency</p>
                  <p className="font-bold text-secondary">{data.hours} hours</p>
                  <p className="text-sm text-gray-500">{data.frequency.replace('_', ' ').toLowerCase()}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-lg text-secondary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">First Arrival</p>
                  <p className="font-bold text-secondary">{new Date(data.date).toLocaleDateString('en-GB', { dateStyle: 'long' })}</p>
                  <p className="text-sm text-gray-500">{data.arrivalWindow?.toLowerCase()} window</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-lg text-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Location</p>
                  <p className="font-bold text-secondary">{data.addressLine1}</p>
                  <p className="text-sm text-gray-500">{data.city}, {data.postcode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-gray-400">Total Price</p>
              <p className="text-4xl font-black text-secondary">£{totalPrice.toFixed(2)}</p>
            </div>
            <div className="bg-primary/10 px-4 py-2 rounded-full">
              <p className="text-primary font-black text-xs uppercase tracking-widest">Payment on Completion</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 font-medium mb-6">A confirmation email has been sent to {data.email}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-secondary text-white px-8 py-4 rounded-xl font-black hover:bg-secondary/90 transition-all"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Summary;

