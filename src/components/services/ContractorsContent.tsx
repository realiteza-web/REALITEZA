import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceAccordion from './ServiceAccordion';
import contractorIllustration from '../../assets/services/contractors_execution.png';

const ContractorsContent = () => {
  const facadeServices = [
    {
      title: "Interface Management & Tolerance Control",
      content: "The greatest risk of failure occurs where the facade meets the primary structure. We manage the complex technical transitions between concrete/steel frameworks and the facade systems. We provide precise embedment layouts and 3D clash detection to absorb building movements, concrete deviations, and construction tolerances before panels arrive on site."
    },
    {
      title: "Technical Audits & Submittal Review",
      content: "We act as your technical authority to rigorously review and approve subcontractor structural calculations and fabrication shop drawings prior to material procurement. We identify engineering bottlenecks and structural risks before the tender stage to prevent costly on-site change orders."
    },
    {
      title: "Pre-Construction & Tender Equalization",
      content: "We conduct rigorous technical audits of facade subcontractor bids, equalizing tender packages and vetting supplier capabilities. We provide unbiased, data-driven analysis of contractor bids to ensure technical compliance, fair pricing, and that you select the most competent manufacturing partners."
    },
    {
      title: "Value Engineering (VE) & Cost Modelling",
      content: "We optimize material specifications and system profiles to reduce capital expenditure without compromising the architectural intent. By identifying actionable system modifications, we accelerate installation timelines and reduce overall package costs."
    },
    {
      title: "QA/QC, Testing & Site Inspections",
      content: "We guarantee what gets built matches what was approved. We oversee Visual Mock-Up (VMU) and Performance Mock-Up (PMU) testing to ensure strict compliance with approved designs. Throughout execution, we conduct third-party factory fabrication audits and systematic on-site installation inspections to prevent costly Non-Conformance Reports (NCRs)."
    }
  ];

  const structuralServices = [
    {
      title: "Pre-Construction Material & Cost Modeling",
      content: "Financial accuracy is the baseline of any viable construction project. We transform conceptual designs into exact, BIM-integrated material forecasts to ensure financial predictability.\n\n• Intelligent Forecasting: Providing real-time quantity takeoffs early in the project lifecycle.\n• Strategic Data: Equipping stakeholders and general contractors with the critical material and cost metrics required to make informed decisions.\n• Risk Management: Optimizing capital allocation, preventing budget overruns, and driving overall project profitability."
    },
    {
      title: "Structural Steel Detailing",
      content: "REALITEZA delivers highly precise, clash-free steel detailing engineered for flawless fabrication and seamless on-site assembly.\n\n• Zero-Error Execution: Eliminating dimensional errors before physical manufacturing begins to prevent on-site rework.\n• Schedule Optimization: Accelerating construction timelines through rigorous planning and exact fitment.\n• Structural Integrity: Guaranteeing the absolute stability and performance of your complex commercial and industrial projects."
    },
    {
      title: "Connection Design & PE Stamping",
      content: "The integrity of any steel structure relies entirely on how its members are connected. REALITEZA delivers expert connection design and PE stamping to ensure every joint is safe, compliant, and highly constructible.\n\n• Flawless Load Transfer: Engineering precise connections to manage shear, axial, and moment forces across commercial and industrial projects.\n• Risk & Cost Mitigation: Eliminating complex, inefficient joints to prevent safety hazards and costly construction delays.\n• Certified Execution: Bridging the gap between design and fabrication with fully compliant, PE-stamped engineering."
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 sm:space-y-24 space-y-12">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8 items-center">
        <div className="space-y-8">
          <h2 className="mb-8 leading-tight">
            <span className="text-2xl md:text-4xl lg:text-5xl font-normal block text-slate-900 tracking-tight">Services to Main Contractors</span>
          </h2>
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-black text-primary uppercase tracking-widest">1. FAÇADE COORDINATION PARTNER</h3>
            <p className="sm:text-xl text-md text-slate-600 leading-relaxed font-medium border-l-4 border-primary pl-6">
              As your dedicated facade engineering partner, we protect your critical path by managing the highest-risk structural and envelope packages on your project. We provide comprehensive end-to-end technical oversight, ensuring seamless coordination between the primary structure and the facade, eliminating installation delays, and guaranteeing strict quality control.
            </p>
          </div>
        </div>
        <div>
          <img src={contractorIllustration} alt="Technical Execution Illustration" className="w-full h-auto max-h-[500px] object-contain" />
        </div>
      </div>

      {/* Facade Accordion */}
      <div className="sm:space-y-12 space-y-4">
        <ServiceAccordion items={facadeServices} />
      </div>

      {/* Structural Steel Section */}
      <div className="sm:space-y-12 space-y-4">
        <div className="max-w-3xl">
          <h3 className="text-xl md:text-2xl font-black text-primary uppercase tracking-widest mb-6">2. STRUCTURAL STEEL ENGINEERING</h3>
          <p className="sm:text-xl text-md text-slate-600 leading-relaxed font-medium border-l-4 border-primary pl-6 ">
            Ensuring financial predictability and absolute structural integrity through exact BIM-integrated engineering and certified connection design.
          </p>
        </div>
        <ServiceAccordion items={structuralServices} />
      </div>

      <div className="flex justify-center ">
        <Link to="/contact" className="btn-primary text-md font-bold">
          HIRE YOUR FACADE SUPPORT <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ContractorsContent;
