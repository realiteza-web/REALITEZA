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

      <div className="max-w-5xl text-left">
        <p className="sm:text-xl text-slate-600 leading-relaxed font-normal">
          We safeguard your investment by ensuring architectural visions translate into structurally sound, cost-effective realities. We provide critical engineering oversight to mitigate risks, optimize budgets, and guarantee long-term asset performance.
        </p>
      </div>

      <div>
        <ServiceAccordion items={developersServices} />
      </div>

      <div className="flex justify-center">
        <Link to="/contact" className="btn-primary text-md font-bold">
          Engage Engineering Oversight<ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default DevelopersContent;
