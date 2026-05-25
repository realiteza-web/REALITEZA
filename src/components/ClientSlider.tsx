import React, { useState, useEffect } from 'react';
import client1 from '../assets/clients/client (1).jpg';
import client2 from '../assets/clients/client (2).jpg';
import client3 from '../assets/clients/client (3).jpg';
import client4 from '../assets/clients/client (4).jpg';
import client5 from '../assets/clients/client (5).jpg';
import client6 from '../assets/clients/clients (6).jpeg';
import client7 from '../assets/clients/clients (7).jpeg';
import client8 from '../assets/clients/clients (8).jpg';

const clients = [client1, client2, client3, client4, client5, client6, client7, client8];
const ClientSlider: React.FC = () => {
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
    <section className="bg-slate-100 sm:py-10 py-8 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <div className="text-left">
          <h2 className="text-2xl font-medium text-slate-900 tracking-tight">
            Clients Recognized Us
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        <div 
          className="flex w-max animate-infinite-scroll-right py-2 will-change-transform hover:[animation-play-state:paused]" 
          style={{ animationDuration: isMobile ? '15s' : '30s' }}
        >
          <div className="flex w-max sm:gap-4 gap-2 pr-2 sm:pr-4">
            {clients.map((clientImg, i) => (
              <div key={`a-${i}`} className="flex-shrink-0 sm:w-48 w-32 sm:h-24 h-16 bg-white border border-slate-200 flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-md group p-2">
                <img src={clientImg} alt={`Client ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="flex w-max sm:gap-4 gap-2 pr-2 sm:pr-4" aria-hidden="true">
            {clients.map((clientImg, i) => (
              <div key={`b-${i}`} className="flex-shrink-0 sm:w-48 w-32 sm:h-24 h-16 bg-white border border-slate-200 flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-md group p-2">
                <img src={clientImg} alt={`Client ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
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
        @keyframes infinite-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-scroll-right {
          animation: infinite-scroll-right linear infinite;
        }
      `}} />
    </section>
  );
};

export default ClientSlider;
