
import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { BookingState, EXTRA_TASKS } from '../type';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Summary from './Summary';
import { sendBookingEmail } from '../resend';

interface Props {   
  initialPostcode: string;
  onCancel: () => void;
}

const BookingWorkflow: React.FC<Props> = ({ initialPostcode, onCancel }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<BookingState>({
    postcode: initialPostcode,
    bedrooms: 1,
    bathrooms: 1,
    extras: [],
    hours: 2,
    bringProducts: false,
    frequency: 'WEEKLY',
    email: '',
    accessMethod: null,
    accessDetails: '',
    date: new Date().toISOString().split('T')[0],
    arrivalWindow: null,
    fullName: '',
    mobile: '',
    addressLine1: '',
    city: '',
  });

  const totalPrice = useMemo(() => {
    const isRecurring = bookingData.frequency !== 'ONE_OFF';
    const h = bookingData.hours;
    let rate = 0;

    if (h < 5) {
      rate = isRecurring ? 18.5 : 20.0;
    } else {
      rate = isRecurring ? 16.5 : 18.5;
    }

    let total = h * rate;
    if (bookingData.bringProducts) {
      total += 6.0;
    }
    return total;
  }, [bookingData.hours, bookingData.frequency, bookingData.bringProducts]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => {
    if (step === 1) onCancel();
    else setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await sendBookingEmail(bookingData, totalPrice);
      setStep(4); // Summary Step
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-secondary py-6 text-white sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <button onClick={handleBack} className="flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft size={18} /> Back
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 w-12 rounded-full ${step >= i ? 'bg-primary' : 'bg-white/20'}`} />
            ))}
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Estimated Total</p>
            <p className="text-xl font-black text-white">£{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {step === 1 && (
          <Step1 
            data={bookingData} 
            onChange={(d) => setBookingData(prev => ({ ...prev, ...d }))} 
            onNext={handleNext} 
          />
        )}
        {step === 2 && (
          <Step2 
            data={bookingData} 
            onChange={(d) => setBookingData(prev => ({ ...prev, ...d }))} 
            onNext={handleNext} 
          />
        )}
        {step === 3 && (
          <Step3 
            data={bookingData} 
            onChange={(d) => setBookingData(prev => ({ ...prev, ...d }))} 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
        {step === 4 && (
          <Summary 
            data={bookingData} 
            totalPrice={totalPrice} 
          />
        )}
      </div>
    </div>
  );
};

export default BookingWorkflow;

