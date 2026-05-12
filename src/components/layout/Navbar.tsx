import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Platform', href: '/platform' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Solutions', href: '/growth-solutions' },
  { name: 'Sell Business', href: '/sell-your-business' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-navy-950 border-white/5 py-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Bailey Holdings" 
              className="w-full h-full object-contain" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} 
            />
            {/* Fallback stylized B if image missing */}
            <div className={`absolute inset-0 flex items-center justify-center bg-navy-900 text-gold-500 font-serif font-bold text-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`}>
              B
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.1em] font-bold uppercase text-white transition-colors">
              BAILEY
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase font-semibold text-white/40 transition-colors">
              HOLDINGS LLC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-gold-500 ${
                location.pathname === link.href 
                  ? 'text-gold-500' 
                  : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="border border-gold-500 px-6 py-3 text-[10px] uppercase font-bold tracking-widest transition-all text-gold-500 hover:bg-gold-500 hover:text-navy-950"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 border-t flex flex-col p-8 gap-6 shadow-2xl md:hidden bg-navy-950 border-white/10"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="text-lg font-serif tracking-widest uppercase text-white/80 hover:text-gold-500"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="py-4 text-center font-bold tracking-widest uppercase text-xs bg-gold-500 text-navy-950"
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
