
import React, { useState } from 'react';
import { MapPin, ShieldCheck, Sparkles, Clock, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CityHub {
  name: string;
  region: string;
  x: number; // percentage on map
  y: number; // percentage on map
  isHQ?: boolean;
  responseTime: string;
  personnelAvailable: string;
  services: string[];
}

const majorCities: CityHub[] = [
  {
    name: 'London',
    region: 'Greater London & South East',
    x: 74,
    y: 75,
    isHQ: true,
    responseTime: '< 1 Hour (HQ Control)',
    personnelAvailable: '250+ SIA & Cleaning Staff',
    services: ['Manned Guarding', 'Door Supervision', 'Corporate Front-of-House', 'Commercial Office Cleaning', 'Event Stewarding']
  },
  {
    name: 'Birmingham',
    region: 'West Midlands',
    x: 58,
    y: 65,
    responseTime: '< 2 Hours',
    personnelAvailable: '120+ Active Staff',
    services: ['Manned Security', 'Warehouse Cleaning', 'Traffic Marshals', 'Retail Security', 'Industrial Floor Scrubbing']
  },
  {
    name: 'Manchester',
    region: 'North West',
    x: 55,
    y: 53,
    responseTime: '< 2 Hours',
    personnelAvailable: '140+ Active Staff',
    services: ['Event Security', 'Office Cleaning', 'Door Supervision', 'CCTV Monitoring', 'Logistics Depot Cleans']
  },
  {
    name: 'Leeds',
    region: 'Yorkshire & Humber',
    x: 64,
    y: 49,
    responseTime: '< 2 Hours',
    personnelAvailable: '80+ Active Staff',
    services: ['Commercial Cleaning', 'Manned Security', 'Retail Presence', 'Sparkle Cleans']
  },
  {
    name: 'Liverpool',
    region: 'Merseyside & North West',
    x: 48,
    y: 54,
    responseTime: '< 2 Hours',
    personnelAvailable: '70+ Active Staff',
    services: ['Door Supervision', 'Event Stewarding', 'Commercial Cleaning', 'Traffic Marshals']
  },
  {
    name: 'Newcastle',
    region: 'North East',
    x: 64,
    y: 35,
    responseTime: '< 2.5 Hours',
    personnelAvailable: '60+ Active Staff',
    services: ['Security Guarding', 'Retail Security', 'Office Sanitisation', 'Site Observation']
  },
  {
    name: 'Bristol',
    region: 'South West',
    x: 49,
    y: 76,
    responseTime: '< 2 Hours',
    personnelAvailable: '75+ Active Staff',
    services: ['Front-of-House', 'Commercial Cleaning', 'Door Supervision', 'Post-Construction Cleans']
  },
  {
    name: 'Cardiff',
    region: 'South Wales',
    x: 44,
    y: 74,
    responseTime: '< 2.5 Hours',
    personnelAvailable: '65+ Active Staff',
    services: ['Event Stewarding', 'Commercial Cleaning', 'Manned Security', 'Car Park Marshals']
  },
  {
    name: 'Edinburgh',
    region: 'Scotland (East)',
    x: 52,
    y: 25,
    responseTime: '< 2.5 Hours',
    personnelAvailable: '55+ Active Staff',
    services: ['Corporate Security', 'Event Stewards', 'Office Cleaning', 'High-Level Cleaning']
  },
  {
    name: 'Glasgow',
    region: 'Scotland (West)',
    x: 45,
    y: 26,
    responseTime: '< 2.5 Hours',
    personnelAvailable: '60+ Active Staff',
    services: ['Door Supervision', 'Warehouse Cleaning', 'Security Guarding', 'Industrial Scrubbing']
  },
  {
    name: 'Sheffield',
    region: 'South Yorkshire',
    x: 63,
    y: 56,
    responseTime: '< 2 Hours',
    personnelAvailable: '50+ Active Staff',
    services: ['Manned Security', 'Factory Cleans', 'Traffic Marshals', 'Office Cleans']
  },
  {
    name: 'Nottingham',
    region: 'East Midlands',
    x: 65,
    y: 61,
    responseTime: '< 2 Hours',
    personnelAvailable: '55+ Active Staff',
    services: ['Commercial Cleaning', 'Retail Security', 'Door Supervision', 'Site Monitoring']
  }
];

const Areas: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityHub>(majorCities[0]);

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <MapPin size={16} />
            <span>National Coverage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-6 font-heading">
            Areas & Major Cities Covered
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            MetroSecure provides comprehensive security and commercial cleaning solutions across England, Wales, and Scotland. 
            Explore our operational hubs across all major UK cities below.
          </p>
        </div>
      </section>

      {/* Main Interactive Map & Cities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Interactive UK Map Representation */}
            <div className="lg:col-span-6 bg-[#101935] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-[#1b2a59]">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">UK Operational Map</h3>
                  <p className="text-slate-400 text-xs mt-1">Select any marked city pin to view local deployment</p>
                </div>
                <div className="flex items-center space-x-2 text-xs text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span>Live 24/7 Dispatch</span>
                </div>
              </div>

              {/* Vector UK Map Surface */}
              <div className="relative w-full aspect-[4/5] max-h-[620px] bg-[#0c142b] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
                {/* SVG UK Outline Silhouette */}
                <svg
                  viewBox="0 0 500 700"
                  className="w-full h-full max-h-[580px] object-contain select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Grid Lines */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* UK & Ireland Landmass stylized vector outline */}
                  {/* Scotland */}
                  <path
                    d="M 230 40 C 260 30, 290 60, 280 110 C 310 130, 300 170, 270 180 C 260 190, 250 200, 220 200 C 190 200, 180 160, 200 120 C 210 90, 200 60, 230 40 Z"
                    fill="#172347"
                    stroke="#273b75"
                    strokeWidth="2"
                    className="transition-colors hover:fill-[#1f2f5c]"
                  />
                  {/* Northern England */}
                  <path
                    d="M 220 200 C 250 200, 270 180, 290 210 C 320 240, 340 290, 310 330 C 290 350, 260 340, 240 320 C 220 300, 210 230, 220 200 Z"
                    fill="#1b2a59"
                    stroke="#273b75"
                    strokeWidth="2"
                    className="transition-colors hover:fill-[#22356e]"
                  />
                  {/* Midlands & Southern England */}
                  <path
                    d="M 240 320 C 260 340, 290 350, 330 360 C 370 380, 390 430, 370 470 C 340 510, 280 500, 240 480 C 210 460, 220 420, 240 380 C 230 350, 230 330, 240 320 Z"
                    fill="#1b2a59"
                    stroke="#273b75"
                    strokeWidth="2"
                    className="transition-colors hover:fill-[#22356e]"
                  />
                  {/* South West (Cornwall / Devon) */}
                  <path
                    d="M 240 480 C 210 490, 170 510, 140 530 C 130 540, 140 550, 170 540 C 210 520, 240 510, 250 490 Z"
                    fill="#172347"
                    stroke="#273b75"
                    strokeWidth="2"
                  />
                  {/* Wales */}
                  <path
                    d="M 220 370 C 230 400, 220 440, 190 450 C 160 440, 160 390, 190 370 C 205 365, 215 365, 220 370 Z"
                    fill="#152142"
                    stroke="#273b75"
                    strokeWidth="2"
                    className="transition-colors hover:fill-[#1c2c59]"
                  />
                  {/* Northern Ireland */}
                  <path
                    d="M 120 220 C 150 210, 160 250, 140 270 C 120 280, 100 260, 110 230 Z"
                    fill="#131e3b"
                    stroke="#233566"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                </svg>

                {/* City Pins Overlaid Absolutely */}
                {majorCities.map((city) => {
                  const isSelected = selectedCity.name === city.name;
                  return (
                    <button
                      key={city.name}
                      onClick={() => setSelectedCity(city)}
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                      title={`${city.name} (${city.region})`}
                      aria-label={`Select ${city.name}`}
                    >
                      {/* Pulse Circle */}
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          isSelected
                            ? 'w-7 h-7 -left-1.5 -top-1.5 bg-primary/40 animate-ping'
                            : 'w-4 h-4 bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-150'
                        }`}
                      />

                      {/* Pin Core */}
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                          isSelected
                            ? 'bg-primary ring-4 ring-white scale-125'
                            : city.isHQ
                            ? 'bg-primary ring-2 ring-primary/50'
                            : 'bg-white ring-2 ring-primary hover:bg-primary'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? 'bg-white' : 'bg-primary group-hover:bg-white'
                          }`}
                        />
                      </div>

                      {/* City Label Badge */}
                      <span
                        className={`absolute left-5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[11px] font-bold tracking-tight whitespace-nowrap pointer-events-none transition-all duration-200 ${
                          isSelected
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-slate-900/90 text-slate-200 border border-slate-700/80 group-hover:bg-white group-hover:text-secondary'
                        }`}
                      >
                        {city.name} {city.isHQ && '★'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Map Footer Note */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
                <span>★ London Operations HQ</span>
                <span>Click any pin to inspect deployment</span>
              </div>
            </div>

            {/* Selected City Details Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {selectedCity.region}
                    </span>
                    <h2 className="text-3xl font-black text-secondary font-heading mt-2 flex items-center gap-2">
                      {selectedCity.name}
                      {selectedCity.isHQ && (
                        <span className="text-xs bg-secondary text-white px-2.5 py-1 rounded-md font-sans font-semibold">
                          National HQ
                        </span>
                      )}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block">Typical Response</span>
                    <span className="text-sm font-bold text-green-600 flex items-center justify-end gap-1">
                      <Clock size={14} />
                      {selectedCity.responseTime}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Local Vetted Workforce:</span>
                    <span className="font-bold text-secondary">{selectedCity.personnelAvailable}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Active Local Services in {selectedCity.name}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCity.services.map((svc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700"
                      >
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        <span className="truncate">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-primary hover:bg-orange-600 text-white text-center px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Request Staff for {selectedCity.name}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+447908540089"
                    className="px-6 py-3.5 rounded-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold text-sm text-center transition-all"
                  >
                    Call Operations
                  </a>
                </div>
              </div>

              {/* City Selection Grid List */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/60">
                <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">
                  Select Another City Hub
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {majorCities.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedCity(c)}
                      className={`px-3 py-2 text-xs font-bold rounded-lg text-left transition-all flex items-center justify-between ${
                        selectedCity.name === c.name
                          ? 'bg-secondary text-white shadow-sm'
                          : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary border border-gray-200'
                      }`}
                    >
                      <span className="truncate">{c.name}</span>
                      {selectedCity.name === c.name && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Nationwide Commitments Grid */}
      <section className="py-16 bg-gray-50 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Building className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-secondary mb-2">Multi-Site FM Contracts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Centralised account management with unified invoicing across your national estate, from regional retail chains to logistics networks.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-secondary mb-2">Emergency Short-Notice Cover</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Staff absences, unexpected security incidents, or urgent spill cleans handled with rapid dispatch in under 2 hours across major metro zones.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-secondary mb-2">100% SIA & Vetted Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All personnel undergo strict BS7858 vetting, right-to-work checks, and appropriate SIA licensing prior to deployment on any site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;
