
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eff6ff] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="https://res.cloudinary.com/dyb9eyvex/image/upload/v1767172551/metrosecurelogo_qduvye.png"  alt="" />
            </Link>
            <p className="text-[#1b2a59] text-sm leading-relaxed mb-6">
              A trusted UK provider of highly screened and vetted security and cleaning staff, 
              supporting Facilities Management across the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#1b2a59] rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-[#1b2a59] rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-[#1b2a59] rounded-full hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-[#1b2a59] rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading border-l-4 border-primary pl-3 text-[#1b2a59]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#1b2a59]">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Security Services</Link></li>
              <li><Link to="/cleaning" className="hover:text-primary transition-colors">Cleaning Services</Link></li>
              <li><Link to="/areas" className="hover:text-primary transition-colors">Areas Covered</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading border-l-4 border-primary pl-3 text-[#1b2a59]">Our Services</h4>
            <ul className="space-y-4 text-sm text-[#1b2a59]">
              <li>Manned Security</li>
              <li>Domestic Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Event Stewarding</li>
              <li>Front-of-House</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading border-l-4 border-primary pl-3 text-[#1b2a59]  ">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#1b2a59]">
              <li>01316666666</li>
              <li>control@metrosecure.co.uk</li>
              <li>86 Edgehill Road, Mitcham, London, CR4 2HW</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#1b2a59]">
          <p>© {new Date().getFullYear()} MetroSecure. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
