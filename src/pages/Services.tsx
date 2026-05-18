import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, PenTool, HardHat, Factory, Plus, ArrowRight
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

import ClientSlider from '../components/ClientSlider';
import EndClientSlider from '../components/EndClientSlider';

// Service Content Components
import DevelopersContent from '../components/services/DevelopersContent';
import ArchitectsContent from '../components/services/ArchitectsContent';
import ContractorsContent from '../components/services/ContractorsContent';
import FabricatorsContent from '../components/services/FabricatorsContent';

import devIllustration from '../assets/services/developers_oversight.jpeg';
import archIllustration from '../assets/services/DD-1.jpg';
import contractorIllustration from '../assets/services/contractors_execution.png';
import fabricatorIllustration from '../assets/services/fabricators_integration.png';

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('developers');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['developers', 'architects', 'contractors', 'fabricators'].includes(hash)) {
      setActiveTab(hash);
      // Scroll to the tabs section if needed with a small delay for layout stability
      setTimeout(() => {
        const element = document.getElementById('services-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const audiences = [
    { id: 'developers', label: 'Developers', icon: <Building2 size={20} />, image: devIllustration },
    { id: 'architects', label: 'Architects & Consultants', icon: <PenTool size={20} />, image: archIllustration },
    { id: 'contractors', label: 'Main Contractors', icon: <HardHat size={20} />, image: contractorIllustration },
    { id: 'fabricators', label: 'Facade Fabricators', icon: <Factory size={20} />, image: fabricatorIllustration },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'developers': return <DevelopersContent />;
      case 'architects': return <ArchitectsContent />;
      case 'contractors': return <ContractorsContent />;
      case 'fabricators': return <FabricatorsContent />;
      default: return null;
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Audience Tabs Navigation */}
      <section id="services-content" className="pt-24 md:pt-32 pb-6 bg-slate-100 lg:shadow-none">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Title and Tabs */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl lg:text-5xl font-normal mb-12 text-slate-900 tracking-tight"
              >
                Our Services
              </motion.h1>

              {/* Mobile Dropdown View */}
              <div className="lg:hidden">
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between px-6 py-5 bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <ArrowRight size={14} strokeWidth={2.5} />
                      <span>{audiences.find(a => a.id === activeTab)?.label}</span>
                    </div>
                    <Plus size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-45' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-2xl z-50 rounded-lg overflow-hidden"
                      >
                        {audiences.filter(aud => aud.id !== activeTab).map((aud) => (
                          <button
                            key={aud.id}
                            onClick={() => {
                              setActiveTab(aud.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-6 py-5 font-bold text-xs uppercase tracking-[0.2em] transition-colors border-b border-slate-50 last:border-0 ${activeTab === aud.id
                              ? 'bg-slate-50 text-primary'
                              : 'text-primary hover:bg-slate-50 hover:text-primary/80'
                              }`}
                          >
                            {aud.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop Vertical View */}
              <div className="hidden lg:flex flex-col items-start gap-5 py-6">
                {audiences.map((aud) => (
                  <button
                    key={aud.id}
                    onClick={() => setActiveTab(aud.id)}
                    className={`text-left transition-all flex items-center text-base md:text-lg uppercase tracking-[0.1em] font-normal w-fit ${activeTab === aud.id
                      ? 'text-slate-900 border-b-2 border-slate-900 pb-1'
                      : 'text-primary border-b-2 border-transparent pb-1 hover:text-primary/80 hover:border-primary/50'
                      }`}
                  >
                    <AnimatePresence>
                      {activeTab === aud.id && (
                        <motion.div
                          initial={{ width: 0, opacity: 0, marginRight: 0 }}
                          animate={{ width: 'auto', opacity: 1, marginRight: 12 }}
                          exit={{ width: 0, opacity: 0, marginRight: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="flex items-center overflow-hidden whitespace-nowrap"
                        >
                          <ArrowRight size={20} strokeWidth={2.5} className="shrink-0" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <span>{aud.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative flex justify-center lg:justify-end h-[300px] md:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={audiences.find(a => a.id === activeTab)?.image}
                  alt="Service Illustration"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full max-w-lg object-contain"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Area */}
      <section className="pt-10 sm:pt-16 pb-24 lg:pb-24 bg-white min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </section>
      <ClientSlider />
      <EndClientSlider />
    </div>
  );
};

export default Services;


