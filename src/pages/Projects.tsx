import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';
import project4 from '../assets/projects/project4.jpg';
import project5 from '../assets/projects/project5.jpg';
import project6 from '../assets/projects/project6.jpg';
import project7 from '../assets/projects/project7.jpg';
import project8 from '../assets/projects/project8.jpg';
import project9 from '../assets/projects/project9.jpg';
import project10 from '../assets/projects/project10.jpg';
import project11 from '../assets/projects/project11.jpg';
import project12 from '../assets/projects/project12.jpg';
import mobproject2 from '../assets/projects/mobproject2.jpg';
import mobproject3 from '../assets/projects/mobproject3.jpg';
import mobproject5 from '../assets/projects/mobproject5.jpg';
import mobproject6 from '../assets/projects/mobproject6.jpg';
import mobproject9 from '../assets/projects/mobproject9.jpg';
import mobproject10 from '../assets/projects/mobproject10.jpg';
import mobproject11 from '../assets/projects/mobproject11.jpg';

const Projects = () => {
  const projectsData = [
    { id: 1, title: 'Baylor College of Medicine', location: 'USA', year: '2023', img: project1 },
    { id: 2, title: 'Andaz hotel', location: 'Doha', year: 'On going', img: project2, mobImg: mobproject2 },
    { id: 3, title: 'Sama Beirut', location: 'Beirut', year: '2016', img: project3, mobImg: mobproject3 },
    { id: 4, title: 'Purva Atmosphere', location: 'Bangalore', year: 'On going', img: project4 },
    { id: 5, title: 'Kaleidoscope', location: 'Abu Dhabi', year: '2013', img: project5, mobImg: mobproject5 },
    { id: 6, title: 'Jannah Burj Al Sarab', location: 'Abu Dhabi', year: '2013', img: project6, mobImg: mobproject6 },
    { id: 7, title: 'PLOT B02: CO-LAB 01 & Associated road access', location: 'Masdar Abu Dhabi', year: '2024', img: project7 },
    { id: 8, title: 'B+G+1+R Residential villa at al Furjan', location: 'DUBAI, UAE', year: '2024', img: project8 },
    { id: 9, title: 'Chic Tower', location: 'Dubai', year: '2025', img: project9, mobImg: mobproject9 },
    { id: 10, title: 'Elegance Tower', location: 'Dubai', year: '2025', img: project10, mobImg: mobproject10 },
    { id: 11, title: 'Proposed 2b+g+3p+38+r Residential Tower', location: 'Dubai', year: '2025', img: project11, mobImg: mobproject11 },
    { id: 12, title: 'SINDALAH VILLAGE', location: 'NEOM, KSA', year: '2024', img: project12 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsData.length);
    }, 2000); // Cycle every 2 seconds
    return () => clearInterval(timer);
  }, [projectsData.length]);

  return (
    <div className="bg-slate-100 min-h-screen">
      
      {/* Full View Project Showcase */}
      <section className="pt-24 md:pt-32 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mb-12"
          >
            Recent Projects
          </motion.h1>
          <div className="max-w-6xl mx-auto flex flex-col">
            {/* Image Container - Flexible to prevent cropping */}
            <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-white overflow-hidden">
              <img 
                key={activeIndex}
                src={(isMobile && (projectsData[activeIndex] as any).mobImg) ? (projectsData[activeIndex] as any).mobImg : projectsData[activeIndex].img} 
                alt={projectsData[activeIndex].title} 
                className="max-w-full max-h-full object-contain p-4 md:p-8"
              />
            </div>

            {/* Info Bar - Positioned just below the image */}
            <div className="bg-primary py-6 px-8 md:px-12  text-white ">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">Project Title</span>
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight">{projectsData[activeIndex].title}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">Location</span>
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight">{projectsData[activeIndex].location}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">Year</span>
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight">{projectsData[activeIndex].year}</span>
                  </div>
                </div>
                <div className="text-xs font-black text-white/60">
                  {activeIndex + 1} / {projectsData.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Projects;

