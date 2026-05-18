import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceAccordion from './ServiceAccordion';

const ContractorsContent = () => {
  const [activeTab, setActiveTab] = useState('facade');
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
    <div className="container mx-auto px-6 md:px-12 lg:px-20 sm:space-y-6 space-y-4">
      {/* Header Section */}
      <div className="text-left">
        <h2 className="leading-tight">
          <span className="text-2xl md:text-4xl lg:text-5xl font-normal block text-slate-900 tracking-tight">Services to Main Contractors</span>
        </h2>
      </div>

      {/* Horizontal Tabs */}
      <div className="flex flex-col sm:flex-row justify-start items-end gap-2 border-b border-slate-200 mt-8 mb-4">
        <button
          onClick={() => setActiveTab('facade')}
          className={`flex items-center px-6 py-3.5 font-bold text-sm md:text-base uppercase tracking-widest transition-all rounded-t-xl border-t border-l border-r -mb-[1px] ${
            activeTab === 'facade' 
              ? 'bg-white text-slate-900 border-slate-200' 
              : 'bg-slate-100 text-slate-500 border-transparent hover:bg-slate-200 hover:text-slate-900'
          }`}
        >
          <AnimatePresence>
            {activeTab === 'facade' && (
              <motion.div
                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                animate={{ width: "auto", opacity: 1, marginRight: 8 }}
                exit={{ width: 0, opacity: 0, marginRight: 0 }}
                className="overflow-hidden flex items-center"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
          FAÇADE COORDINATION PARTNER
        </button>
        <button
          onClick={() => setActiveTab('structural')}
          className={`flex items-center px-6 py-3.5 font-bold text-sm md:text-base uppercase tracking-widest transition-all rounded-t-xl border-t border-l border-r -mb-[1px] ${
            activeTab === 'structural' 
              ? 'bg-white text-slate-900 border-slate-200' 
              : 'bg-slate-100 text-slate-500 border-transparent hover:bg-slate-200 hover:text-slate-900'
          }`}
        >
          <AnimatePresence>
            {activeTab === 'structural' && (
              <motion.div
                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                animate={{ width: "auto", opacity: 1, marginRight: 8 }}
                exit={{ width: 0, opacity: 0, marginRight: 0 }}
                className="overflow-hidden flex items-center"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
          STRUCTURAL STEEL ENGINEERING
        </button>
      </div>

      {/* Tab Content */}
      <div>
        <AnimatePresence mode="wait">
          {activeTab === 'facade' && (
            <motion.div
              key="facade"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="max-w-5xl text-left mt-2">
                <p className="sm:text-xl text-md text-slate-600 leading-relaxed font-normal">
                  As your dedicated facade engineering partner, we protect your critical path by managing the highest-risk structural and envelope packages on your project. We provide comprehensive end-to-end technical oversight, ensuring seamless coordination between the primary structure and the facade, eliminating installation delays, and guaranteeing strict quality control.
                </p>
              </div>
              <ServiceAccordion items={facadeServices} />
            </motion.div>
          )}

          {activeTab === 'structural' && (
            <motion.div
              key="structural"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="max-w-5xl text-left mt-2">
                <p className="sm:text-xl text-md text-slate-600 leading-relaxed font-normal">
                  Ensuring financial predictability and absolute structural integrity through exact BIM-integrated engineering and certified connection design.
                </p>
              </div>
              <ServiceAccordion items={structuralServices} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <Link to="/contact#enquiry-form" className="btn-primary text-md font-bold">
          ENGAGE TECHNICAL OVERSIGHT <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ContractorsContent;
