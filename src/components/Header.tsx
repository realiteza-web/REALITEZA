import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/realitezalogow.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Determine logo to show
  const currentLogo = logoWhite;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-xl border-b border-white/10 py-2 shadow-lg'
            : (location.pathname !== '/'
              ? 'bg-primary py-4 border-b border-white/10 shadow-lg'
              : 'bg-transparent py-10')
          } ${isOpen ? 'bg-transparent border-transparent shadow-none' : ''}`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-[110]">
              <img
                src={currentLogo}
                alt="REALITEZA Logo"
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled || location.pathname !== '/' ? 'h-12 md:h-14' : 'h-14 md:h-16'
                  }`}
              />
            </Link>

            {/* Menu Toggle */}
            <button
              className={`relative z-[110] p-2 flex items-center group`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`transition-all duration-500 ${isOpen ? 'rotate-90' : ''}`}>
                {isOpen ? (
                  <X size={32} strokeWidth={1.5} className="text-white" />
                ) : (
                  <div className="flex flex-col gap-2.5 items-end">
                    <div className={`w-10 h-[3px] transition-colors duration-500 bg-white`}></div>
                    <div className={`w-7 h-[3px] transition-colors duration-500 bg-white`}></div>
                  </div>
                )}
              </div>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[105] bg-primary flex flex-col justify-center overflow-y-auto overflow-x-hidden pt-24 pb-12"
          >

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
              <div className="max-w-2xl mx-auto flex flex-col items-center gap-10">
                {/* Navigation Items */}
                <div className="flex flex-col gap-10 items-start w-fit">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        to={link.path}
                        className={`text-4xl md:text-5xl lg:text-6xl font-semibold transition-all duration-300 uppercase tracking-tight text-left block ${location.pathname === link.path ? 'text-white' : 'text-white/80 hover:text-white'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
