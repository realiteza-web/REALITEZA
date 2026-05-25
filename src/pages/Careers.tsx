import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import careerImg from '../assets/career.jpg';

const Careers = () => {
  return (
    <div>
      {/* Recruitment Portal Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mb-12"
          >
            
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left flex flex-col justify-center py-4"
            >
              
              <h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-8 tracking-tight">
                Join Our Team
              </h2>
              
              <p className="sm:text-lg text-md font-medium leading-relaxed text-slate-700 mb-12">
                REALITEZA is always looking for exceptional experts to join our global team.
              </p>

              <div className="pt-5 ">
                <p className="sm:text-lg text-md font-medium leading-relaxed text-slate-700 mb-4">
                  Submit your CV & Portfolio for Consideration
                </p>
                <a 
                  href="mailto:contact@realiteza.com" 
                  className="text-2xl font-medium text-primary hover:text-slate-900 transition-all duration-300 flex items-center justify-start gap-4 group"
                >
                  <Mail size={24} className="text-primary group-hover:scale-110 transition-transform" />
                  contact@realiteza.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-full min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden"
            >
              <img 
                src={careerImg} 
                alt="Careers at REALITEZA" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              {/* Soft feather effect overlay */}
              <div className="absolute inset-0 shadow-[inset_0_0_10px_10px_#ffffff] pointer-events-none rounded-2xl"></div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Careers;
