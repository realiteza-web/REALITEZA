import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const countryCodes = [
  { code: '+971', label: 'UAE (+971)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'USA/Canada (+1)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+39', label: 'Italy (+39)' },
  { code: '+966', label: 'Saudi Arabia (+966)' },
  { code: '+974', label: 'Qatar (+974)' },
  { code: '+968', label: 'Oman (+968)' },
  { code: '+973', label: 'Bahrain (+973)' },
  { code: '+965', label: 'Kuwait (+965)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+60', label: 'Malaysia (+60)' },
  { code: '+81', label: 'Japan (+81)' },
  { code: '+86', label: 'China (+86)' },
];

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#enquiry-form') {
      setTimeout(() => {
        const element = document.getElementById('enquiry-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          const nameField = document.querySelector('input[name="fullName"]');
          if (nameField) {
            (nameField as HTMLInputElement).focus();
          }
        }
      }, 100);
    }
  }, [location]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Web3Forms configuration
    data['access_key'] = 'd076f7dc-d6fb-4720-9b53-4bef2ad8db73';
    data['subject'] = `New Service Enquiry from ${data.fullName} - ${data.company}`;
    data['from_name'] = data.fullName as string;

    // Combine country code and phone
    data['Phone'] = `${data.countryCode} ${data.phone}`;
    delete data.countryCode;
    delete data.phone;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      title: 'Engineering Operations – Cochin, India',
      address: '37/1993, 8th Floor, Infrafutura Building, Kakkanad, Thrikkakara, Cochin – 682021',
      email: 'contact@realiteza.com',
      phone: '+91 9447460468',
      hours: '09:00 AM – 06:00 PM (Closed on Public Holidays)'
    },
    {
      title: 'Marketing – Europe, UK',
      address: '21 Barland Way, Aylesbury, Buckinghamshire, England, HP18 0UZ',
      email: 'contact@realiteza.com',
      phone: '+44 7424 652074',
      hours: null
    },
    {
      title: 'Marketing – United Arab Emirates, Dubai',
      address: 'United Arab Emirates Street 13, Melhoof 6, Flat 101, Al Warqa, Dubai',
      email: 'contact@realiteza.com',
      phone: '+971 509 261691',
      hours: null
    }
  ];

  return (
    <div>
      {/* Global Offices Grid */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mb-12"
          >
            Contact Us
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white px-2 py-6 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{office.title}</h3>
                </div>

                <div className="space-y-6 flex-grow">
                  <p className="sm:text-lg text-md font-medium leading-relaxed text-slate-700">
                    {office.address}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                      <Mail size={16} className="text-primary" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">{office.email}</a>
                    </div>
                    {office.phone && (
                      <div className="flex items-center gap-3 text-slate-900 font-bold">
                        <Phone size={16} className="text-primary" />
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{office.phone}</a>
                      </div>
                    )}
                  
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lite Corporate Enquiry Section */}
      <section id="enquiry-form" className="py-16 md:py-28  bg-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-left mb-10">
            <h2 className="text-2xl md:text-5xl lg:text-5xl font-normal text-slate-900 mb-2 tracking-tight">
              Service Enquiry
            </h2>

          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white  overflow-hidden">
              <div className="p-4 md:p-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900"
                      placeholder="e.g. Michael Chen"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Professional Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900"
                      placeholder="m.chen@architecture.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900"
                      placeholder="Organization Name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Client Category</label>
                    <div className="relative">
                      <select name="category" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900 appearance-none cursor-pointer">
                        <option>Developers</option>
                        <option>Architects & Consultants</option>
                        <option>Main Contractors</option>
                        <option>Facade Fabricators</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="flex gap-2 md:gap-4">
                      <div className="relative w-[45%] sm:w-1/3 md:w-1/4">
                        <select name="countryCode" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-3 pr-8 md:px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900 appearance-none cursor-pointer text-sm md:text-base">
                          {countryCodes.map(c => (
                            <option key={c.code} value={c.code}>{c.label}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ArrowRight size={18} className="rotate-90 md:w-[18px] w-[16px]" />
                        </div>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="^[0-9\s]{5,15}$"
                        title="Please enter a valid phone number (digits only)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-4 md:px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900 flex-grow text-sm md:text-base"
                        placeholder="e.g. 50 123 4567"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Project Brief & Technical Requirements</label>
                    <textarea
                      rows={3}
                      name="message"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-slate-900 resize-none"
                      placeholder="Tell us about the project scope, location, and specific technical needs..."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 flex flex-col items-start gap-4 pt-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`btn-primary text-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : (
                          <div className="flex items-center gap-2">Send Enquiry <ArrowRight size={22} /></div>
                        )}
                      </button>
                    </motion.div>

                    {submitStatus === 'success' && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-3 rounded-lg border border-green-200">
                        <CheckCircle2 size={20} />
                        <p>Thank you! Your enquiry has been sent successfully.</p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 font-bold bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                        <XCircle size={20} />
                        <p>Oops! Something went wrong. Please try again or email us directly.</p>
                      </motion.div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
