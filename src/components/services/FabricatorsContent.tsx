import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight
} from 'lucide-react';
import ServiceAccordion from './ServiceAccordion';
// import fabricationPackageImg from '../../assets/services/fabrication_package.png';
// import siteExecutionImg from '../../assets/services/site_execution.png';

// Service Images
import ucwCurtainwall from '../../assets/services/UCWCurtainwall.webp';
import acousticBarrier from '../../assets/services/acousticbarrierfencingstructuraldesignanddrawings.webp';
import alumiumMashrabiyyah from '../../assets/services/alumiummashrabiyyah.webp';
import balustradeHandrail from '../../assets/services/balustrade&handrail.webp';
import canopyTrellis from '../../assets/services/canopy&trellis.webp';
import catLadders from '../../assets/services/catladdersstructuraldesign&drawings.webp';
import doorsWindows from '../../assets/services/doors&windows.webp';
import framelessSystem from '../../assets/services/framelesssystem.webp';
import interiorSoffit from '../../assets/services/interior&soffitcladding.webp';
import louversImg from '../../assets/services/louvers.webp';
import metalStone from '../../assets/services/metal&stonecladdingsystem.webp';
import perforatedAluminium from '../../assets/services/perforatedaluminiumscreens.webp';
import purlinSteel from '../../assets/services/purlin&steeldrawingsforroof&standingseamsupport.webp';
import rainscreenFacade from '../../assets/services/rainscreenfacade&sfssystems.webp';
import roofLights from '../../assets/services/rooflights.webp';
import securityFencing from '../../assets/services/securityfencingwallstructuraldesign&drawings.webp';
import stickCurtainwall from '../../assets/services/stickcurtainwall.webp';
import superstructureStructural from '../../assets/services/superstructurestructuraldesign&drawingsforfacade.webp';

const FabricatorsContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { title: 'UCW Curtain Wall', type: 'Facade System', service: 'Unitized Curtain Wall Design', img: ucwCurtainwall },
    { title: 'Acoustic Barrier Fencing', type: 'Structural Engineering', service: 'Acoustic Barrier Fencing Structural Design & Drawings', img: acousticBarrier },
    { title: 'Aluminium Mashrabiyyah', type: 'Facade Element', service: 'Aluminium Mashrabiyyah Design', img: alumiumMashrabiyyah },
    { title: 'Balustrade & Handrail', type: 'Architectural Metal', service: 'Balustrade & Handrail Design', img: balustradeHandrail },
    { title: 'Canopy & Trellis', type: 'Structural Support', service: 'Canopy & Trellis Structural Design', img: canopyTrellis },
    { title: 'Cat Ladders', type: 'Access Systems', service: 'Cat Ladders Structural Design & Drawings', img: catLadders },
    { title: 'Doors & Windows', type: 'Fenestration', service: 'Doors & Windows Technical Design', img: doorsWindows },
    { title: 'Frameless System', type: 'Glass Engineering', service: 'Frameless System Design', img: framelessSystem },
    { title: 'Interior & Soffit Cladding', type: 'Envelope Detail', service: 'Interior & Soffit Cladding Design', img: interiorSoffit },
    { title: 'Louvers', type: 'Ventilation', service: 'Louvers Design & Engineering', img: louversImg },
    { title: 'Metal & Stone Cladding', type: 'Cladding System', service: 'Metal & Stone Cladding System Design', img: metalStone },
    { title: 'Perforated Aluminium Screens', type: 'Screening', service: 'Perforated Aluminium Screens Design', img: perforatedAluminium },
    { title: 'Purlin & Steel Drawings', type: 'Roofing Support', service: 'Purlin & Steel Drawings for Roof & Standing Seam Support', img: purlinSteel },
    { title: 'Rainscreen Facade', type: 'Facade System', service: 'Rainscreen Facade & SFS Systems Design', img: rainscreenFacade },
    { title: 'Roof Lights', type: 'Daylighting', service: 'Roof Lights Design & Engineering', img: roofLights },
    { title: 'Security Fencing Wall', type: 'Structural Design', service: 'Security Fencing Wall Structural Design & Drawings', img: securityFencing },
    { title: 'Stick Curtain Wall', type: 'Facade System', service: 'Stick Curtain Wall Design', img: stickCurtainwall },
    { title: 'Superstructure Structural Design', type: 'Facade Support', service: 'Superstructure Structural Design & Drawings for Facade', img: superstructureStructural },
  ];

  return (
    <div className="sm:space-y-16 space-y-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 sm:space-y-6 space-y-4">
        <div className="text-left">
          <h2 className="leading-tight">
            <span className="text-2xl md:text-4xl lg:text-5xl font-normal block text-slate-900 tracking-tight leading-[1.1]">Services to Facade Fabricators</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="text-left flex-1">
            <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700 max-w-4xl">
              We drive factory-floor efficiency by translating approved shop drawings into exact, zero-error manufacturing data. From tender estimation to site execution, we are your technical integration hub.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end shrink-0">
            <Link to="/contact#enquiry-form" className="btn-primary text-md font-bold border border-slate-700 rounded-[60px] px-6 py-3">
              GET ONE-POINT SUPPORT <ArrowRight />
            </Link>
          </div>
        </div>

        <div>
          <ServiceAccordion items={[
            {
              title: "Tender Estimation & Quantity Surveying (QS)",
              content: "Winning profitable projects requires exact data. We support fabricators during the bidding phase by providing highly accurate preliminary material take-offs and cost estimations, empowering you to submit competitive, risk-free tenders with absolute confidence."
            },
            {
              title: "Comprehensive Shop Drawings & Engineering",
              content: "We bridge the gap between architectural intent and structural reality. REALITEZA provides fabrication-ready shop drawings rigorously engineered for approval and structural compliance."
            },
            {
              title: "Concept & System Design",
              content: "Developing initial concept drawings and custom profile designs to establish architectural intent and confirm early constructability."
            },
            {
              title: "Visual & Performance Mockups (VMU & PMU)",
              content: "Delivering highly detailed fabrication and installation drawings for physical mockups to validate weatherproofing, structural integrity, and client approval prior to mass production."
            },
            {
              title: "System Detailing",
              content: "Developing highly accurate 1:1 and 1:2 interface details, including die designs and custom extrusions."
            },
            {
              title: "Structural & Thermal Validation",
              content: "Providing supporting structural calculations and thermal analysis to ensure the system meets all performance criteria before manufacturing begins."
            },
            {
              title: "Approval Acceleration",
              content: "Delivering clear, comprehensive drawing packages designed to pass consultant reviews quickly and prevent project bottlenecks."
            },
            {
              title: "Fabrication Drawings & Machining Details",
              content: "We drive factory-floor efficiency by translating approved shop drawings into exact, zero-error manufacturing data."
            },
            {
              title: "Architectural & Secondary Steel Detailing",
              content: "Complementing our primary superstructure services, REALITEZA provides precise detailing for the critical secondary components that ensure a facility’s safety, accessibility, and operational function. From complex staircases and industrial ladders to railings, embeds, and specialized architectural metalwork, we deliver highly accurate 3D models and 2D fabrication drawings."
            }
          ]} />
        </div>
      </div>

      {/* Fabrication & Material Optimization Section - FULL WIDTH */}
      <div className="py-10 md:py-18 bg-slate-100 ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full space-y-12"> 
              {/* lg:w-1/2  */}
              <div>
                <h3 className="sm:text-3xl text-2xl font-normal text-slate-900 mb-6 tracking-tight leading-tight">
                  Fabrication Packages Delivery
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: "Precision Fabrication Tickets", desc: "Generating individual part drawings (glass, aluminum, steel, and gaskets) complete with precise cutting, drilling, and routing dimensions." },
                    { title: "CNC Data Extraction", desc: "Providing direct CNC export files tailored to your machining centers to eliminate manual programming errors and accelerate production." },
                    { title: "Assembly & Tagging Plans", desc: "Creating clear unit-assembly drawings and systematic tagging plans to ensure fast, foolproof glazing and frame assembly in the factory." },
                    { title: "Extrusion & Cutting Optimization", desc: "Utilizing high-end software to generate precise factory cutting layouts and comprehensive material wastage reports, maximizing bar-length yield and minimizing scrap." },
                    { title: "Glass & Panel Orders", desc: "Generating exact cutting sizes for glass, ACP, and insulation panels to streamline supplier orders." },
                    { title: "Hardware & Accessory BOMs", desc: "Detailing precise counts for brackets, fasteners, gaskets, and sealants to ensure your procurement team buys exactly what is needed." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">{item.title}</h4>
                        <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="w-full lg:w-1/2">
              <div className="relative">
                <img src={fabricationPackageImg} alt="Fabrication Packages" className="  relative z-10" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Site Execution Section  py-10 md:py-18 */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 ">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full space-y-8">
            {/* lg:w-1/2  */}
            <h3 className="sm:text-3xl text-2xl font-normal text-slate-900 mb-6 tracking-tight leading-tight">
              Site Execution & Installation Solutions
            </h3>
            <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700">
              A flawless factory build must translate seamlessly to the construction site. We provide your erection teams with the exact spatial data and sequencing required for rapid, error-free installation.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Site Survey & Tolerance Integration", desc: "We import physical site survey reports directly into our models to accommodate real-world structural deviations." },
                { title: "Coordinate & Bracket Setting-Out", desc: "Providing precise global coordinate points and detailed bracket installation drawings to guarantee perfect grid alignment." },
                { title: "Installation Sequencing", desc: "Providing step-by-step erection methodologies and site-specific tagging maps to accelerate installation." },
                { title: "As-Built Documentation", desc: "Generating comprehensive final as-built drawings reflecting exact site conditions to guarantee smooth project closeout." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">{item.title}</h4>
                    <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="w-full lg:w-1/2">
            <div className="relative group">
              <img src={siteExecutionImg} alt="Site Execution" className="transition-all duration-700" />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Special Services Section */}
      <section className="py-10 md:py-18 bg-slate-100 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
          <div className="text-center md:mb-16 mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tighter text-left">Get one point support</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tendering support", content: "We support facade fabrication contractors for producing preliminary tender documents and in making bill of quantity for Project estimation." },
              { title: "Concept Design", content: "Schematic concept detail development for typical and bespoke systems." },
              { title: "Shop drawing", content: "Expert façade design and detailed shop drawings inline with client's drawing standards and requirements." },
              { title: "TEKLA 3D & BIM", content: "Tekla, Solid works, Inventor & Revit support for complex geometry." },
              { title: "Fabrication drawing", content: "2D & 3D output for CNC machining, complying with different factory standards." },
              { title: "Material Take-Off", content: "Comprehensive MTO / GTO service for procurement efficiency." },
              { title: "As-Built Drawing", content: "Final project closeout documentation reflecting site realities." },
              { title: "Calculations", content: "Structural & Thermal Analysis to ensure performance compliance." },
              { title: "Third-party drawing QC review", content: "QC Review / comment / approve third party drawing submissions before submitting to your consultant / main contractor. QC review on fabrication drawings before releasing to production." },
              { title: "Third-party stamping service", content: "Licensed professional engineer (PE) review and approval for structural calculations and drawings to ensure design meets safety standards and building codes." }
            ].map((service, i) => (
              <div key={i} className="group sm:p-8 p-4 bg-white border border-slate-200 hover:border-primary transition-all duration-300">
                <h4 className="font-bold uppercase text-sm mb-4">{service.title}</h4>
                <p className="transition-colors sm:text-lg text-sm font-medium leading-relaxed text-slate-700">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project List Section py-10 sm:py-18 */}
      <section className="relative  bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-slate-900 mb-6  tracking-tight">Our Technical Portfolio</h2>
            <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700 max-w-5xl">Explore our diverse range of engineering solutions and technical documentation for facade fabricators.</p>
          </div>

          {/* Desktop View (>= 1024px): Interactive Slideshow */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-start">
            {/* Left Side: Scrollable List with Fade Effects */}
            <div className="relative group/scroll">
              {/* Top Fade */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none opacity-100 group-hover/scroll:opacity-50 transition-opacity" />

              <div className="h-[600px] overflow-y-auto pr-6 custom-scrollbar relative z-10 py-8">
                <div className="flex flex-col">
                  {projects.map((project, i) => (
                    <motion.button
                      key={i}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => setActiveIndex(i)}
                      className="group relative py-2 border-b border-slate-100 text-left transition-all duration-500 hover:pl-6 overflow-hidden"
                      initial={false}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex flex-col gap-1 md:gap-2">
                          <h2 className={`text-sm md:text-lg font-medium transition-all duration-500 tracking-tight ${activeIndex === i ? 'text-slate-900 scale-105 origin-left' : 'text-slate-500 group-hover:text-slate-700'}`}>
                            {project.title}
                          </h2>
                        </div>
                        <div className={`transition-all duration-500 ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          <ArrowUpRight className="text-primary w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Hover Background Effect */}
                      <div className={`hidden lg:block absolute inset-0 bg-slate-100 transition-transform duration-500 origin-left -z-0 ${activeIndex === i ? 'scale-x-100' : 'scale-x-0'}`} />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none opacity-100 group-hover/scroll:opacity-50 transition-opacity" />

              <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                  width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #f1f5f9;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #cbd5e1;
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #94a3b8;
                }
                .custom-scrollbar {
                  scrollbar-width: thin;
                  scrollbar-color: #cbd5e1 #f1f5f9;
                }
              `}} />
            </div>

            {/* Right Side: Fixed/Sticky Detail Display */}
            <div className="sticky top-32 h-[600px]">
              <div className="relative h-full w-full overflow-hidden bg-slate-100 group/img border border-slate-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={projects[activeIndex].img}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover/img:grayscale-0 transition-all duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-10 left-10 right-10 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-3"
                      >
                        <h3 className="text-3xl font-black tracking-tight leading-tight">{projects[activeIndex].title}</h3>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View (< 1024px): 3-Column/2-Column Grid */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group space-y-4">
                <div className="aspect-video sm:aspect-square overflow-hidden border border-slate-200 relative">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                </div>
                <h3 className="text-[10px] sm:text-sm font-bold text-slate-900 leading-tight uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default FabricatorsContent;

