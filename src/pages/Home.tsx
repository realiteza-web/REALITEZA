import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

import logoabout from '../assets/aboutrealiteza.png';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Vimeo Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/887301734?h=3e6a7509d0&background=1&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0&dnt=1"
            className="absolute top-1/2 left-1/2 min-w-[177.77vh] min-h-screen w-[100vw] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Warmer Multiply Overlay */}
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b]/10 via-transparent to-[#f59e0b]/30 mix-blend-soft-light" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-15 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto px-6 py-6 md:p-8"
          >
            <h1 className="mb-2 sm:mb-4 leading-[1.5]">
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold block text-white tracking-tight">
                The Building Skin Detailer<br />
                <span className='text-[10px] md:text-xl font-medium block mb-2 mt-2 text-white uppercase tracking-[0.2em]'>Literally,
                  <span className='font-extrabold  '>REALITEZA</span> realizes
                  Your design intent.</span>
              </span>
            </h1>

        
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
         

          {/* 2-Column Content Below */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <img src={logoabout} alt="REALITEZA Logo" className="h-24 md:h-32 w-auto object-contain" />
            </motion.div>

            {/* Content Column */}
            <div className="flex-1 max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg font-medium leading-relaxed text-slate-700 mb-6"
              >
                REALITEZA Building Envelope Engineering Services provides specialized design and engineering support for building envelope systems, façade detailing, BIM modeling, fabrication drawings, and structural design support for clients across the world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-end"
              >
                <Link to="/services" className="btn-primary">
                  View All Services <ArrowRight size={22} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


     



      {/* Why Choose Us */}
      <section className="pb-16 md:pb-28  relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center sm:mb-20 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:mb-6 mb-4 leading-tight"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-normal block text-slate-900 tracking-tight">
                Why Choose REALITEZA
              </span>
              <p className='mt-6 text-lg font-normal max-w-5xl mx-auto text-slate-600 leading-relaxed text-center'>
                A True Dedicated Partner
                We don't just execute drafting tasks; we take complete ownership of the facade package. By integrating seamlessly with your team from day one, we act as your dedicated technical arm, fiercely protecting your vision, budget, and timeline.
              </p>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Comprehensive Risk Mitigation",
                description: "The facade is often the highest-risk, highest-cost package on any project. We provide the authoritative oversight necessary to eliminate that risk, ensuring your building is secure, compliant, and built to last."
              },
              {
                title: "Material Optimization",
                description: "Our intelligent material optimization, exact quantity forecasting, and value engineering drastically reduce waste and prevent costly procurement shortages."
              },
              {
                title: "End-to-End Coordination",
                description: "We serve as your dedicated technical authority. By managing the critical transition between the primary building structure and the facade envelope, we ensure a perfect, weather-tight fit every single time."
              },
              {
                title: "Unwavering Financial Certainty",
                description: "Construction is inherently unpredictable, but your envelope budget shouldn't be. Our proactive, systems-driven approach identifies risks early, eliminating hidden costs, material waste, and the threat of expensive on-site rework."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 sm:p-6 border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-md md:text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;
