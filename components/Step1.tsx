
import React, { useState, useEffect } from 'react';
import { Plus, Minus, Check, Shirt, WashingMachine, Layout, Archive, Flame, AlertCircle } from 'lucide-react';
import { BookingState, EXTRA_TASKS } from '../type';

interface Props {
  data: BookingState;
  onChange: (d: Partial<BookingState>) => void;
  onNext: () => void;
}

const Step1: React.FC<Props> = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState<{ postcode?: string; email?: string }>({});
  const [touched, setTouched] = useState<{ postcode?: boolean; email?: boolean }>({});

  const validatePostcode = (pc: string) => {
    const regex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
    if (!pc) return 'Postcode is required';
    if (!regex.test(pc)) return 'Please enter a valid UK postcode';
    return undefined;
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!regex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  useEffect(() => {
    if (touched.postcode) setErrors(prev => ({ ...prev, postcode: validatePostcode(data.postcode) }));
    if (touched.email) setErrors(prev => ({ ...prev, email: validateEmail(data.email) }));
  }, [data.postcode, data.email, touched]);

  const toggleExtra = (id: string) => {
    const current = [...data.extras];
    const index = current.indexOf(id);
    if (index > -1) current.splice(index, 1);
    else current.push(id);
    onChange({ extras: current });
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt': return <Shirt size={24} />;
      case 'WashingMachine': return <WashingMachine size={24} />;
      case 'Layout': return <Layout size={24} />;
      case 'Archive': return <Archive size={24} />;
      case 'Flame': return <Flame size={24} />;
      default: return null;
    }
  };

  const isFormValid = !validatePostcode(data.postcode) && !validateEmail(data.email) && data.hours > 0;

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-black text-secondary mb-2">Customise your clean</h2>
        <div className="space-y-2">
          <label className="block text-sm font-black text-secondary uppercase tracking-widest">Postcode</label>
          <input
            type="text"
            value={data.postcode}
            onChange={(e) => onChange({ postcode: e.target.value.toUpperCase() })}
            onBlur={() => setTouched(prev => ({ ...prev, postcode: true }))}
            className={`w-full max-w-xs px-4 py-3 rounded-xl border-2 outline-none font-bold transition-all ${
              touched.postcode && errors.postcode ? 'border-red-500 bg-red-50' : 'border-gray-100 focus:border-primary'
            }`}
          />
          {touched.postcode && errors.postcode && (
            <p className="text-red-500 text-sm font-bold flex items-center gap-1">
              <AlertCircle size={14} /> {errors.postcode}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <label className="block text-lg font-bold text-secondary">How many bedrooms?</label>
          <div className="flex items-center gap-6 bg-white p-2 rounded-2xl border border-gray-200 w-fit">
            <button 
              onClick={() => onChange({ bedrooms: Math.max(0, data.bedrooms - 1) })}
              className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Minus size={20} />
            </button>
            <span className="text-2xl font-black w-8 text-center">{data.bedrooms}</span>
            <button 
              onClick={() => onChange({ bedrooms: data.bedrooms + 1 })}
              className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <label className="block text-lg font-bold text-secondary">How many bathrooms?</label>
          <div className="flex items-center gap-6 bg-white p-2 rounded-2xl border border-gray-200 w-fit">
            <button 
              onClick={() => onChange({ bathrooms: Math.max(0, data.bathrooms - 1) })}
              className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Minus size={20} />
            </button>
            <span className="text-2xl font-black w-8 text-center">{data.bathrooms}</span>
            <button 
              onClick={() => onChange({ bathrooms: data.bathrooms + 1 })}
              className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      <p className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-primary font-semibold">
        Your cleaner will also clean your kitchen, lounge and common areas.
      </p>

      <div>
        <h3 className="text-xl font-bold text-secondary mb-6">Extra tasks (optional)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {EXTRA_TASKS.map(task => (
            <button
              key={task.id}
              onClick={() => toggleExtra(task.id)}
              className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${
                data.extras.includes(task.id) 
                ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10' 
                : 'border-gray-100 bg-white text-gray-400 hover:border-gray-200'
              }`}
            >
              {renderIcon(task.icon)}
              <span className="mt-3 font-bold text-sm text-center leading-tight">{task.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-secondary mb-2">Duration</h3>
        <p className="text-gray-500 mb-6 font-medium">We recommend selecting 2.0 hours</p>
        <div className="flex flex-wrap gap-3">
          {[2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6].map(h => (
            <button
              key={h}
              onClick={() => onChange({ hours: h })}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                data.hours === h 
                ? 'bg-secondary text-white shadow-xl' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-secondary'
              }`}
            >
              {h}h
            </button>
          ))}
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Other"
              value={data.hours > 6 ? data.hours : ''}
              onChange={(e) => onChange({ hours: parseFloat(e.target.value) || 0 })}
              className="w-24 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-secondary mb-6">Cleaning products</h3>
        <p className="text-gray-500 mb-6 text-sm">Includes sprays and cloths. Your Housekeeper cannot bring a vacuum, mop or bucket.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onChange({ bringProducts: true })}
            className={`p-6 rounded-2xl border-2 flex items-center justify-between transition-all ${
              data.bringProducts ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'
            }`}
          >
            <span className={`font-bold ${data.bringProducts ? 'text-primary' : 'text-gray-600'}`}>Bring cleaning products</span>
            <span className="text-sm font-black">+£6.00</span>
          </button>
          <button
            onClick={() => onChange({ bringProducts: false })}
            className={`p-6 rounded-2xl border-2 flex items-center justify-between transition-all ${
              !data.bringProducts ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'
            }`}
          >
            <span className={`font-bold ${!data.bringProducts ? 'text-primary' : 'text-gray-600'}`}>I will provide</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-secondary">How often?</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
              <h4 className="font-black text-secondary uppercase tracking-widest text-xs">Recurring</h4>
              <div className="space-y-3">
                {[
                  "That clean home feeling on repeat",
                  "Keep your preferred cleaner",
                  "Flexible & commitment-free"
                ].map(text => (
                  <div key={text} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-2 pt-4">
                {['MORE_THAN_WEEKLY', 'WEEKLY', 'FORTNIGHTLY'].map(freq => (
                   <button
                    key={freq}
                    onClick={() => onChange({ frequency: freq as any })}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      data.frequency === freq 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-primary'
                    }`}
                  >
                    {freq.replace('_', ' ').toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black text-secondary opacity-0 md:opacity-100">&nbsp;</h3>
          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 h-full flex flex-col justify-between">
            <div>
              <h4 className="font-black text-secondary uppercase tracking-widest text-xs mb-4">One-off</h4>
              <div className="space-y-3 mb-6">
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Great for deeper cleans</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Cleans on demand</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onChange({ frequency: 'ONE_OFF' })}
              className={`py-4 rounded-xl font-black transition-all text-lg ${
                data.frequency === 'ONE_OFF' 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              One-off Clean
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-12 border-t border-gray-100">
        <label className="block text-xl font-bold text-secondary">Email Address</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
          placeholder="Enter your email"
          className={`w-full px-6 py-4 rounded-xl border-2 outline-none font-medium text-lg transition-all ${
            touched.email && errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary'
          }`}
          required
        />
        {touched.email && errors.email && (
          <p className="text-red-500 text-sm font-bold flex items-center gap-1">
            <AlertCircle size={14} /> {errors.email}
          </p>
        )}
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-xl hover:bg-secondary/90 transition-all disabled:opacity-50"
        >
          Next: Choose time & access
        </button>
      </div>
    </div>
  );
};

export default Step1;

