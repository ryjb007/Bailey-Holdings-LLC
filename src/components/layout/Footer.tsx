import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/5 pb-20">
        {/* Brand Column */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 p-2 flex items-center justify-center">
              <img src="/logo.png" alt="" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.1em] text-white font-bold uppercase">
                BAILEY
              </span>
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-semibold">
                HOLDINGS LLC
              </span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light italic">
            "Acquiring, investing in, and building high-value assets across global markets for sustainable generational wealth."
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-gold-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-white/20 hover:text-gold-500 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-white/20 hover:text-gold-500 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Investment</h4>
          <ul className="space-y-4 text-xs font-medium tracking-widest text-white/40 uppercase">
            <li><Link to="/platform" className="hover:text-white transition-colors">Investment Thesis</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors">Real Estate</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors">Private Equity</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors">Venture Capital</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
          <ul className="space-y-4 text-xs font-medium tracking-widest text-white/40 uppercase">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/growth-solutions" className="hover:text-white transition-colors">Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Correspondence</h4>
          <ul className="space-y-4 text-sm text-white/40 font-light">
            <li className="flex gap-4">
              <MapPin size={16} className="text-gold-500 shrink-0 mt-1" />
              <span>Institutional HQ: Austin, Texas</span>
            </li>
            <li className="flex gap-4">
              <Mail size={16} className="text-gold-500 shrink-0 mt-1" />
              <a href="mailto:deals@baileyholdings.com" className="hover:text-white transition-colors">deals@baileyholdings.com</a>
            </li>
            <li className="flex gap-4">
              <Phone size={16} className="text-gold-500 shrink-0 mt-1" />
              <span>+1 (800) 555-BAILEY</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
        <p>© {currentYear} Bailey Holdings. Private Institutional Asset Management.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Disclosures</a>
        </div>
      </div>
    </footer>
  );
}
