import { motion } from 'motion/react';
import { ArrowRight, Building2, Briefcase, TrendingUp, ShieldCheck, Database, Rocket, Layout, Palette, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Markets Analyzed', value: '45+' },
  { label: 'Opportunities Reviewed', value: '1,200+' },
  { label: 'Strategic Partnerships', value: '30+' },
  { label: 'Years Combined Experience', value: '25+' },
];

const services = [
  {
    title: 'Real Estate Investments',
    desc: 'Acquisition and development of high-yield commercial and multifamily assets.',
    icon: Building2,
    link: '/platform'
  },
  {
    title: 'Private Equity',
    desc: 'Investing in established, cash-flow positive SMBs with strong fundamentals.',
    icon: Briefcase,
    link: '/platform'
  },
  {
    title: 'Venture Capital',
    desc: 'Backing early-stage tech and service startups with high scalability potential.',
    icon: Rocket,
    link: '/platform'
  },
  {
    title: 'Business Acquisitions',
    desc: 'Direct acquisition of regional market leaders for long-term hold.',
    icon: ShieldCheck,
    link: '/sell-your-business'
  },
  {
    title: 'Growth Solutions',
    desc: 'Growth infrastructure for portfolio companies, from branding to web design.',
    icon: Layout,
    link: '/growth-solutions'
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pt-40 pb-24 lg:pt-56 lg:pb-40 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold mb-6">Institutional Asset Management</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 tracking-tight">
              Building Generational <br/>Wealth Through <span className="italic text-gold-500">Strategic Assets</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-12 font-light">
              Bailey Holdings acquires, invests in, and scales high-potential assets across real estate, private equity, startups, and specialized business development.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/contact"
                className="bg-gold-500 text-navy-950 px-10 py-5 text-xs uppercase font-bold tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-gold-500/10"
              >
                Submit an Opportunity
              </Link>
              <Link 
                to="/portfolio"
                className="border border-white/20 px-10 py-5 text-xs uppercase font-bold tracking-widest hover:bg-white/5 transition-all text-white"
              >
                Explore Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Credibility Metrics */}
          <div className="w-full lg:w-80 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-12 border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-16">
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-1">$145M+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Assets Evaluated</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-white mb-1">1,200+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Opportunities Reviewed</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-1">18</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Strategic Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions / Service Cards */}
      <section className="px-6 lg:px-12 py-32 border-t border-navy-900/10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link 
              key={service.title}
              to={service.link}
              className="p-10 bg-gold-50/50 border border-navy-900/5 hover:border-gold-500/50 transition-all group flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1 duration-500"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-600 font-bold mb-8">Division 0{i + 1}</div>
              <service.icon size={40} className="text-navy-900/10 mb-10 group-hover:text-gold-500 transition-colors" />
              <h3 className="text-2xl font-serif mb-4 text-navy-900 group-hover:text-gold-600 transition-colors">{service.title}</h3>
              <p className="text-sm text-navy-900/50 leading-relaxed mb-10 flex-grow">{service.desc}</p>
              <span className="text-[10px] uppercase tracking-widest font-bold text-navy-900/20 group-hover:text-gold-600 transition-colors">Strategic Brief →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-6 lg:px-12 py-12 bg-navy-950 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-30 grayscale invert brightness-200">
            <span className="text-[11px] uppercase font-bold tracking-widest text-white">Blackstone Partners</span>
            <span className="text-[11px] uppercase font-bold tracking-widest text-white">Apollo Global</span>
            <span className="text-[11px] uppercase font-bold tracking-widest text-white">Berkshire Standard</span>
            <span className="text-[11px] uppercase font-bold tracking-widest text-white">Vanguard Capital</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse outline outline-4 outline-green-500/20"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">Accepting Opportunities</span>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Preview (Light Style) */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
               <span className="text-gold-600 text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Proven Execution</span>
               <h2 className="font-serif text-4xl md:text-6xl text-navy-900 leading-tight">Selected Portfolio <br/><span className="italic text-navy-900/30">Asset Exposures</span></h2>
            </div>
            <Link to="/portfolio" className="text-xs uppercase tracking-widest font-bold text-navy-900/40 hover:text-gold-600 border-b border-navy-900/10 pb-2 transition-all">Institutional Record 2024.4</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {[
              { type: 'Real Estate', title: 'The Summit Multifamily Acquisition', location: 'Austin, TX', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200' },
              { type: 'Private Equity', title: 'Precision Logistics Growth', location: 'National', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden mb-10 relative border border-navy-900/5 shadow-2xl">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-all" />
                </div>
                <div className="flex justify-between items-start">
                   <div>
                     <span className="text-gold-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">{item.type}</span>
                     <h4 className="font-serif text-3xl lg:text-4xl text-navy-900 group-hover:text-gold-600 transition-colors uppercase tracking-tight">{item.title}</h4>
                   </div>
                   <ArrowRight className="text-navy-900/20 group-hover:text-gold-600 group-hover:translate-x-3 transition-all" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Lead Capture */}
      <section className="bg-navy-900 py-24 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
             <h3 className="font-serif text-5xl text-white mb-8 leading-tight">Scale Your Legacy <br/>With <span className="italic text-gold-500">Bailey Holdings</span></h3>
             <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-lg">
               Our deal team is active across all core verticals. Submit your opportunity for a confidential institutional review.
             </p>
             <div className="space-y-6">
                {['Direct Business Acquisition', 'Commercial Real Estate Deal', 'Venture Capital Inquiry', 'Portfolio Growth Support'].map(text => (
                  <div key={text} className="flex items-center gap-4 text-white/40 hover:text-white transition-colors cursor-pointer group">
                    <div className="w-5 h-5 border border-white/10 flex items-center justify-center p-1">
                      <div className="w-full h-full bg-gold-500 scale-0 group-hover:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-sm uppercase tracking-widest font-medium">{text}</span>
                  </div>
                ))}
             </div>
           </div>

           <div className="bg-black/40 border border-white/10 p-10 lg:p-16 backdrop-blur-sm">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors font-light">
                    <option className="bg-navy-950">Acquisition Proposal</option>
                    <option className="bg-navy-950">Investment Query</option>
                    <option className="bg-navy-950">Portfolio Management</option>
                  </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Detailed Context</label>
                   <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors resize-none font-light" placeholder="Describe the asset, revenue, and objective..." />
                </div>
                <button className="w-full bg-gold-500 text-navy-950 py-5 text-[11px] uppercase font-bold tracking-[0.3em] hover:brightness-110 transition-all shadow-xl">
                  Initiate Correspondence
                </button>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
}
