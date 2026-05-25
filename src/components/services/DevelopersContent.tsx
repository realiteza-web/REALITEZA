import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceAccordion from './ServiceAccordion';

const DevelopersContent = () => {
  const developersServices = [
    {
      title: "Technical Design Audits",
      content: "Identifying engineering bottlenecks and structural risks before the tender stage to prevent costly on-site change orders."
    },
    {
      title: "Value Engineering",
      content: "Optimizing material specifications and system profiles to reduce capital expenditure without compromising the architectural intent."
    },
    {
      title: "Tender Evaluation",
      content: "Providing unbiased, data-driven analysis of contractor bids to ensure technical compliance and fair pricing."
    },
    {
      title: "Performance Verification",
      content: "Validating the thermal, acoustic, and wind-load capacities of proposed facade systems."
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 sm:space-y-6 space-y-4">
      <div className="text-left">
        <h2 className="leading-tight">
          <span className="text-2xl md:text-4xl lg:text-5xl font-normal block text-slate-900 tracking-tight">Services to Developers</span>
        </h2>
      </div>
      

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className=" text-left flex-1">
          <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700 max-w-4xl">
            We safeguard your investment by ensuring architectural visions translate into structurally sound, cost-effective realities. We provide critical engineering oversight to mitigate risks, optimize budgets, and guarantee long-term asset performance.
          </p>
        </div>
        <div className="flex justify-start lg:justify-end shrink-0">
          <Link to="/contact#enquiry-form" className="group inline-flex items-center gap-2 text-primary font-bold uppercase tracking-tight text-md border border-slate-700 hover:bg-primary hover:text-white hover:border-primary rounded-[60px] px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Engage Engineering Oversight <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div>
        <ServiceAccordion items={developersServices} />
      </div>

      
    </div>
  );
};

export default DevelopersContent;
