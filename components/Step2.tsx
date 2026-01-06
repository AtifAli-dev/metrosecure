
import React, { useState } from 'react';
import { Key, User, Shield, Lock, Search, Calendar as CalendarIcon, Clock, AlertCircle } from 'lucide-react';
import { BookingState, AccessMethod, ArrivalWindow } from '../type';

interface Props {
  data: BookingState;
  onChange: (d: Partial<BookingState>) => void;
  onNext: () => void;
}

const Step2: React.FC<Props> = ({ data, onChange, onNext }) => {
  const [touched, setTouched] = useState(false);

  const ACCESS_OPTIONS: { id: AccessMethod; label: string; sub?: string; icon: any; placeholder?: string; requiredDetails?: boolean }[] = [
    { id: 'SPARE_KEYS', label: 'Spare keys', sub: 'Best', icon: Key },
    { id: 'SOMEONE_HOME', label: 'Someone at home', icon: User },
    { id: 'CONCIERGE', label: 'Concierge', icon: Shield, placeholder: 'Where is the concierge?', requiredDetails: true },
    { id: 'KEY_SAFE', label: 'Key safe', icon: Lock, placeholder: 'What is the code to the key safe?', requiredDetails: true },
    { id: 'KEY_HIDDEN', label: 'Key hidden', icon: Search, placeholder: 'Where is the key hidden?', requiredDetails: true },
  ];

  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const ARRIVAL_WINDOWS: { id: ArrivalWindow; label: string; time: string }[] = [
    { id: 'MORNING', label: 'Morning arrival', time: '07:00-12:00' },
    { id: 'AFTERNOON', label: 'Afternoon arrival', time: '12:00-17:00' },
    { id: 'EVENING', label: 'Evening', time: '17:00-20:00' },
    { id: 'DAYTIME', label: 'Daytime', time: '09:00-17:00' },
  ];

  const selectedOption = ACCESS_OPTIONS.find(o => o.id === data.accessMethod);
  const isAccessValid = data.accessMethod && (!selectedOption?.requiredDetails || data.accessDetails.trim().length > 0);
  const isFormValid = isAccessValid && data.arrivalWindow;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-black text-secondary mb-2">Choose your time</h2>
        <p className="text-gray-500 font-medium">Almost there! We just need to know how to get in and when.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-secondary mb-6">How can your cleaner access the property?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ACCESS_OPTIONS.map(opt => (
            <div key={opt.id} className="space-y-3">
              <button
                onClick={() => onChange({ accessMethod: opt.id })}
                className={`w-full p-6 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${
                  data.accessMethod === opt.id ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <div className={`p-3 rounded-xl ${data.accessMethod === opt.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <opt.icon size={24} />
                </div>
                <div>
                  <div className="font-bold text-secondary">{opt.label}</div>
                  {opt.sub && <span className="text-xs font-black text-primary uppercase tracking-widest">{opt.sub}</span>}
                </div>
              </button>
              {data.accessMethod === opt.id && opt.placeholder && (
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder={opt.placeholder}
                    value={data.accessDetails}
                    onChange={(e) => onChange({ accessDetails: e.target.value })}
                    onBlur={() => setTouched(true)}
                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none font-medium animate-in slide-in-from-top-2 transition-all ${
                      touched && opt.requiredDetails && !data.accessDetails.trim() ? 'border-red-500 bg-red-50' : 'border-primary'
                    }`}
                  />
                  {touched && opt.requiredDetails && !data.accessDetails.trim() && (
                    <p className="text-red-500 text-xs font-bold flex items-center gap-1">
                      <AlertCircle size={12} /> This information is required for access
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <CalendarIcon size={20} className="text-primary" />
          <h3 className="text-xl font-bold text-secondary">When would you like your first clean?</h3>
        </div>
        <p className="text-gray-500 mb-6 font-medium">Cleaners work from 07:00-20:00, Monday-Sunday.</p>
        
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {next7Days.map(date => {
            const isSelected = data.date === date.toISOString().split('T')[0];
            return (
              <button
                key={date.getTime()}
                onClick={() => onChange({ date: date.toISOString().split('T')[0] })}
                className={`flex-shrink-0 w-24 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                  isSelected ? 'border-primary bg-primary text-white shadow-xl' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <span className={`text-xs uppercase font-black ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>{DAYS[date.getDay()]}</span>
                <span className="text-xl font-black">{date.getDate()}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-6">
          <Clock size={20} className="text-primary" />
          <h3 className="text-xl font-bold text-secondary">What time would you like your cleaner to arrive?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ARRIVAL_WINDOWS.map(win => (
            <button
              key={win.id}
              onClick={() => onChange({ arrivalWindow: win.id })}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                data.arrivalWindow === win.id ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <div className={`font-black text-lg ${data.arrivalWindow === win.id ? 'text-primary' : 'text-secondary'}`}>{win.label}</div>
              <div className="text-sm font-bold text-gray-500">{win.time}</div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!isFormValid}
        className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-xl hover:bg-secondary/90 transition-all disabled:opacity-50 shadow-xl"
      >
        Next: Your Details
      </button>
    </div>
  );
};

export default Step2;

