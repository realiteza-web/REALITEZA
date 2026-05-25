import React, { useState, useEffect } from 'react';
import endClient1 from '../assets/clients/endclients (1).jpg';

import endClient3 from '../assets/clients/endclients (3).jpg';
import endClient4 from '../assets/clients/endclients (4).jpg';
import endClient5 from '../assets/clients/endclients (5).jpg';
import endClient6 from '../assets/clients/endclients (6).jpg';

import endClient8 from '../assets/clients/endclients (8).jpg';
import endClient9 from '../assets/clients/endclients (9).jpg';

const endClients = [endClient1, endClient3, endClient4, endClient5, endClient6, endClient8, endClient9];

const EndClientSlider: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="sm:py-10 py-8 overflow-hidden ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <div className="text-left">
          
          <h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-6">
            End Clients & Associated Projects
          </h2>
          
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        <div 
          className="flex w-max animate-infinite-scroll py-2 will-change-transform hover:[animation-play-state:paused]" 
          style={{ animationDuration: isMobile ? '15s' : '30s' }}
        >
          <div className="flex w-max sm:gap-4 gap-2 pr-2 sm:pr-4">
            {endClients.map((clientImg, i) => (
              <div key={`a-${i}`} className="flex-shrink-0 sm:w-48 w-32 sm:h-24 h-16 bg-white border border-slate-200 flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-md group p-2">
                <img src={clientImg} alt={`End Client ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="flex w-max sm:gap-4 gap-2 pr-2 sm:pr-4" aria-hidden="true">
            {endClients.map((clientImg, i) => (
              <div key={`b-${i}`} className="flex-shrink-0 sm:w-48 w-32 sm:h-24 h-16 bg-white border border-slate-200 flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-md group p-2">
                <img src={clientImg} alt={`End Client ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Faded edges */}
        <div className="hidden sm:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll linear infinite;
        }
      `}} />
    </section>
  );
};

export default EndClientSlider;
