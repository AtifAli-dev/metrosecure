
import React, { useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { BookingState } from '../type';

interface Props {
  data: BookingState;
  onChange: (d: Partial<BookingState>) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const Step3: React.FC<Props> = ({ data, onChange, onSubmit, isSubmitting }) => {
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors: Record<string, string | undefined> = {
    fullName: data.fullName.trim().length < 2 ? 'Please enter your full name' : undefined,
    mobile: !/^\+?[0-9\s-]{10,15}$/.test(data.mobile.replace(/\s/g, '')) ? 'Please enter a valid phone number (10-15 digits)' : undefined,
    addressLine1: data.addressLine1.trim().length < 3 ? 'Address is required' : undefined,
    city: data.city.trim().length < 2 ? 'City is required' : undefined,
  };

  const isFormValid = !Object.values(errors).some(e => e !== undefined);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const inputClasses = (field: string) => `w-full px-6 py-4 rounded-xl border-2 outline-none transition-all ${
    touched[field] && errors[field] ? 'border-red-500 bg-red-50' : 'border-gray-100 focus:border-primary'
  }`;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-black text-secondary mb-2">Your details</h2>
        <p className="text-gray-500 font-medium">Where should our professional cleaning team arrive?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-black text-secondary uppercase tracking-widest">Full Name</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            onBlur={() => handleBlur('fullName')}
            className={inputClasses('fullName')}
            required
          />
          {touched.fullName && errors.fullName && (
            <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-black text-secondary uppercase tracking-widest">Mobile Number</label>
          <input
            type="tel"
            value={data.mobile}
            onChange={(e) => onChange({ mobile: e.target.value })}
            onBlur={() => handleBlur('mobile')}
            className={inputClasses('mobile')}
            placeholder="e.g. 07123 456789"
            required
          />
          {touched.mobile && errors.mobile && (
            <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.mobile}</p>
          )}
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-black text-secondary uppercase tracking-widest">Address Line 1</label>
          <input
            type="text"
            value={data.addressLine1}
            onChange={(e) => onChange({ addressLine1: e.target.value })}
            onBlur={() => handleBlur('addressLine1')}
            className={inputClasses('addressLine1')}
            required
          />
          {touched.addressLine1 && errors.addressLine1 && (
            <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.addressLine1}</p>
          )}
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-black text-secondary uppercase tracking-widest">Address Line 2 (Optional)</label>
          <input
            type="text"
            value={data.addressLine2}
            onChange={(e) => onChange({ addressLine2: e.target.value })}
            className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-black text-secondary uppercase tracking-widest">City</label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            onBlur={() => handleBlur('city')}
            className={inputClasses('city')}
            required
          />
          {touched.city && errors.city && (
            <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.city}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-black text-secondary uppercase tracking-widest">Postcode</label>
          <div className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-500 font-bold flex items-center justify-between">
            {data.postcode}
            <span className="text-[10px] font-black bg-gray-200 px-2 py-1 rounded">LOCKED</span>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <p className="text-sm text-secondary font-medium leading-relaxed">
          By clicking confirm, you agree to our terms of service. Our team will review your booking and contact you shortly if any adjustments are needed.
        </p>
      </div>

      <button
        onClick={onSubmit}
        disabled={isSubmitting || !isFormValid}
        className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 disabled:opacity-50"
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : 'Confirm Booking'}
      </button>
    </div>
  );
};

export default Step3;

