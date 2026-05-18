import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

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
    const data = Object.fromEntries(formData.entries());

    // Add FormSubmit specific fields
    data['_subject'] = `New Service Enquiry from ${data.fullName} - ${data.company}`;
    data['_template'] = 'table';

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@realiteza.com", {
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
                className="bg-white p-10 border border-slate-200 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{office.title}</h3>
                </div>

                <div className="space-y-6 flex-grow">
                  <p className="text-slate-600 leading-relaxed font-medium">
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
                    {/* {office.whatsapp && (
                      <div className="flex items-center gap-3 text-slate-900 font-bold group/wa">
                        <div className="text-[#25D366] shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04a11.771 11.771 0 001.591 5.919L0 24l6.149-1.613a11.77 11.77 0 005.9 1.594h.005c6.634 0 12.04-5.404 12.042-12.041a11.778 11.778 0 00-3.533-8.522z" />
                          </svg>
                        </div>
                        <a
                          href={`https://wa.me/${office.whatsapp.replace('+', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#25D366] transition-colors"
                        >
                          WhatsApp Support
                        </a>
                      </div>
                    )} */}
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
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">Project Brief & Technical Requirements</label>
                    <textarea
                      rows={3}
                      name="message"
                      required
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
