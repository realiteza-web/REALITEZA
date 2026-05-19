import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface ServiceAccordionProps {
  items: AccordionItem[];
}

const ServiceAccordion = ({ items }: ServiceAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  const renderItem = (item: AccordionItem, globalIndex: number) => (
    <div 
      key={globalIndex} 
      className={`border-b border-slate-200 transition-all duration-300 ${openIndex === globalIndex ? 'bg-slate-50/50' : ''}`}
    >
      <button
        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
        className="w-full flex items-center justify-between py-6 px-4 text-left group"
      >
        <span className={`text-md md:text-lg font-semibold uppercase tracking-tight transition-colors duration-300 ${openIndex === globalIndex ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}`}>
          {item.title}
        </span>
        <div className={`transition-transform duration-300 ${openIndex === globalIndex ? 'rotate-180' : ''}`}>
          {openIndex === globalIndex ? (
            <Minus className="text-primary" size={24} />
          ) : (
            <Plus className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {openIndex === globalIndex && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ willChange: 'height' }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-4 pb-8">
              <div className="text-lg text-slate-600 leading-relaxed max-w-4xl space-y-4">
                {item.content.split('\n\n').map((paragraph, i) => (
                  <div key={i}>
                    {paragraph.split('\n').map((line, j) => {
                      if (line.trim().startsWith('•')) {
                        const content = line.replace(/^•\s*/, '');
                        const colonIndex = content.indexOf(':');
                        
                        return (
                          <div key={j} className="flex items-start gap-3 pl-[10px] mt-2">
                            <span className="text-primary mt-1 flex-shrink-0">
                              <ArrowRight size={18} strokeWidth={2.5} />
                            </span>
                            <span>
                              {colonIndex !== -1 ? (
                                <>
                                  <span className="font-medium text-slate-800">{content.substring(0, colonIndex + 1)}</span>
                                  {content.substring(colonIndex + 1)}
                                </>
                              ) : (
                                content
                              )}
                            </span>
                          </div>
                        );
                      }
                      return (
                        <p key={j} className={j > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export default ServiceAccordion;
