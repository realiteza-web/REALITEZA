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

      <div className="max-w-5xl text-left">
        <p className="sm:text-xl text-md text-slate-600 leading-relaxed font-normal">
          We serve as the technical bridge between your architectural vision and structural reality. By integrating with your team early in the design phase, REALITEZA provides the specialized engineering and visual data required to ensure your concepts are buildable, compliant, and cost-effective.
        </p>
      </div>

      <div>
        <ServiceAccordion items={architectsServices} />
      </div>

      <div className="flex justify-center pt-8">
        <Link to="/contact" className="btn-primary text-md font-bold">
          REQUEST A SCHEMATIC PROPOSAL <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ArchitectsContent;
