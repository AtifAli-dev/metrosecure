
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend processing
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Simulating email send to control@metrosecure.co.uk...", data);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSent(true);
    
    setTimeout(() => setIsSent(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team for professional security and cleaning solutions.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-8 font-heading">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Phone</h4>
                      <p className="text-gray-600">01316666666</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Email</h4>
                      <p className="text-gray-600">control@metrosecure.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Address</h4>
                      <p className="text-gray-600">Greenwood House, Mitchem, London</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-secondary mb-4">Support Hours</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Office:</span>
                    <span>Mon - Fri, 9am - 5pm</span>
                  </div>
                  <div className="flex justify-between font-bold text-primary">
                    <span>Operational:</span>
                    <span>24/7 / 365 Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form with Simulated Backend */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-secondary mb-8 font-heading">Send a Message</h3>
                
                {isSent ? (
                  <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center space-y-4">
                    <CheckCircle2 className="text-green-500 mx-auto" size={48} />
                    <h4 className="text-2xl font-bold text-green-800">Inquiry Sent Successfully!</h4>
                    <p className="text-green-700">Your message has been emailed to control@metrosecure.co.uk. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input 
                          name="fullName"
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input 
                          name="email"
                          type="email" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                        <input 
                          name="phone"
                          type="tel" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="07700 900000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
                        <select 
                          name="service"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                        >
                          <option>Security Services</option>
                          <option>Domestic Cleaning</option>
                          <option>Commercial Cleaning</option>
                          <option>Other / General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="How can we help you today?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-12 py-4 bg-primary text-white font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center space-x-3 shadow-xl disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524850011238-e3d235c7d419?q=80&w=1600&h=400&auto=format&fit=crop" 
          alt="Map Location" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-8 py-4 rounded-full shadow-2xl border-2 border-primary flex items-center space-x-3">
             <MapPin className="text-primary" />
             <span className="font-bold text-secondary">Greenwood House, Mitchem, London</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;