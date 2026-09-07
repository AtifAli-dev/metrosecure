
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101935] text-slate-300 pt-16 pb-8 border-t border-[#1b2a59]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 bg-white/95 p-2 rounded-lg">
              <img 
                src="https://res.cloudinary.com/dyb9eyvex/image/upload/v1767172551/metrosecurelogo_qduvye.png" 
                alt="MetroSecure Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              A trusted UK provider of highly screened and vetted security and cleaning staff, 
              supporting Facilities Management across the UK.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2.5 bg-white/10 text-white rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2.5 bg-white/10 text-white rounded-full hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2.5 bg-white/10 text-white rounded-full hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2.5 bg-white/10 text-white rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading border-l-4 border-primary pl-3 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Security Services</Link></li>
              <li><Link to="/cleaning" className="hover:text-primary transition-colors">Cleaning Services</Link></li>
              <li><Link to="/areas" className="hover:text-primary transition-colors">Areas Covered</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading border-l-4 border-primary pl-3 text-white">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/security" className="hover:text-primary transition-colors">Door Supervision</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Event Security & Stewarding</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Traffic & Car Park Marshals</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Front-of-House & Guarding</Link></li>
              <li><Link to="/cleaning" className="hover:text-primary transition-colors">Commercial & Office Cleaning</Link></li>
              <li><Link to="/cleaning" className="hover:text-primary transition-colors">Warehouse & Retail Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading border-l-4 border-primary pl-3 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="tel:+447908540089" className="hover:text-primary transition-colors font-medium">
                  +44 7908 540089
                </a>
              </li>
              <li>
                <a href="mailto:control@metrosecure.co.uk" className="hover:text-primary transition-colors">
                  control@metrosecure.co.uk
                </a>
              </li>
              <li className="leading-relaxed">
                86 Edgehill Road, Mitcham, London, CR4 2HW
              </li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-xs font-semibold">
                  24/7 Operations Centre
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MetroSecure. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
