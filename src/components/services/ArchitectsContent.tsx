import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceAccordion from './ServiceAccordion';

const ArchitectsContent = () => {
  const architectsServices = [
    {
      title: "Concept Sketches & Schematic Proposals",
      content: "Translating design intent into structural reality starts with the pen. We provide initial hand-sketched concepts and detailed schematic proposal drawings to quickly validate constructability, explore material variants, and resolve primary building dependencies long before heavy CAD modeling begins."
    },
    {
      title: "Geometric Rationalization & Feasibility",
      content: "We protect your aesthetic intent. By evaluating multiple design variants early, We transform complex curves into constructible systems, and standardize panel dimensions to minimize unique variations—drastically reducing fabrication time."
    },
    {
      title: "Performance Engineering & Compliance Support",
      content: "We engineer the building physics. REALITEZA provides precise U-Value calculations, condensation risk analysis, and acoustic detailing to assist in achieving strict compliance with international fire safety standards."
    },
    {
      title: "Technical Detailing & Interface Management",
      content: "We resolve the complex connections. Our team develops highly accurate 1:5 and 1:2 technical interface details to facilitate seamless transitions between the advanced facade envelope and the primary building structure."
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 sm:space-y-6 space-y-4">
      <div className="text-left">
        <h2 className="leading-tight">
          <span className="text-2xl md:text-4xl lg:text-5xl font-normal block text-slate-900 tracking-tight leading-[1.1]">Services to Architects & Consultants</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="text-left flex-1">
          <p className="sm:text-lg text-md font-medium leading-relaxed text-slate-700 max-w-4xl">
            We serve as the technical bridge between your architectural vision and structural reality. By integrating with your team early in the design phase, REALITEZA provides the specialized engineering and visual data required to ensure your concepts are buildable, compliant, and cost-effective.
          </p>
        </div>
        <div className="flex justify-start lg:justify-end shrink-0">
          <Link to="/contact#enquiry-form" className="group inline-flex items-center gap-2 text-primary font-bold uppercase tracking-tight text-md border border-slate-700 hover:bg-primary hover:text-white hover:border-primary rounded-[60px] px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            REQUEST A SCHEMATIC PROPOSAL <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div>
        <ServiceAccordion items={architectsServices} />
      </div>


    </div>
  );
};

export default ArchitectsContent;
