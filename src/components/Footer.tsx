import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/realitezalogow.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F487C] text-slate-300 pt-16 md:pb-8 pb-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2 lg:pr-8">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="REALITEZA Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              REALITEZA delivers specialized building envelope engineering for complex projects worldwide through rigorous structural analysis, fabrication-ready shop drawings, and agile digital coordination. Operating across regional business hours, we provide technically precise, workability-focused façade engineering solutions with seamless global collaboration.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/realiteza/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services#developers" className="hover:text-white transition-colors">Developers</Link></li>
              <li><Link to="/services#architects" className="hover:text-white transition-colors">Architects & Consultants</Link></li>
              <li><Link to="/services#contractors" className="hover:text-white transition-colors">Main Contractors</Link></li>
              <li><Link to="/services#fabricators" className="hover:text-white transition-colors">Facade Fabricators</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <Mail size={18} className="text-white" />
                </div>
                <a href="mailto:contact@realiteza.com" className="hover:text-white transition-colors">contact@realiteza.com</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <Phone size={18} className="text-white" />
                </div>
                <a href="tel:+919447460468" className="hover:text-white transition-colors">+91 9447460468</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="text-sm text-slate-300">37/1993, 8th Floor, Infrafutura Building, Kakkanad, Thrikkakara, Cochin – 682021</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} REALITEZA Building Envelope Engineering Service – All Rights Reserved.</p>
          <p>Developer: REALITEZA BEES PVT LTD, Cochin, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
