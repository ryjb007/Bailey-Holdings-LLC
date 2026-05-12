import { motion } from 'motion/react';
import { Building, Briefcase, Rocket, DollarSign, BarChart, MapPin, Search } from 'lucide-react';

export default function InvestmentPlatform() {
  const criteria = [
    { label: 'Annual Revenue', value: '$500k – $20M' },
    { label: 'EBITDA Margin', value: '15%+ / $100k+', icon: BarChart },
    { label: 'Geography', value: 'United States & Canada', icon: MapPin },
    { label: 'Industry Focus', value: 'Service, SaaS, Real Estate' },
  ];

  return (
    <div className="pt-20">
      {/* Platform Header */}
      <section className="bg-navy-900 py-24 lg:py-48 px-6 lg:px-12 relative overflow-hidden border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-gold-500/5 rotate-6 translate-x-1/2 -z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Asset Allocation</h1>
            <h2 className="font-serif text-5xl md:text-8xl mb-8 leading-tight tracking-tight uppercase">
              Strategic <br/><span className="italic text-gold-500">Allocation</span>
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl">
              Our investment thesis is built on identifying asymmetric risk-reward profiles where operational infrastructure can drive alpha.
            </p>
          </div>
        </div>
      </section>

      {/* We Invest In */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-navy-900/10 border border-navy-900/10 shadow-2xl">
            {[
              { 
                title: 'Commercial Real Estate', 
                icon: Building,
                division: 'Division 01',
                points: ['Multifamily Assets', 'Distressed Opportunities', 'Adaptive Reuse', 'Value-Add Plays']
              },
              { 
                title: 'Private Equity / SMB', 
                icon: Briefcase,
                division: 'Division 02',
                points: ['Legacy Business Buyouts', 'Operational Turnarounds', 'Cash-Flow Portfolios', 'Regional Leaders']
              },
              { 
                title: 'Venture Capital', 
                icon: Rocket,
                division: 'Division 03',
                points: ['B2B SaaS', 'Service-Tech Hybrid', 'Emerging Ventures', 'E-commerce Infrastructure']
              }
            ].map((focus) => (
              <div key={focus.title} className="bg-white p-12 lg:p-16 hover:bg-navy-900 transition-all duration-500 group">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-600 font-bold mb-10 group-hover:text-gold-500">{focus.division}</div>
                <focus.icon className="text-navy-900/10 group-hover:text-gold-500 transition-colors mb-10" size={40} />
                <h4 className="font-serif text-3xl mb-10 text-navy-900 group-hover:text-white uppercase tracking-tight">{focus.title}</h4>
                <ul className="space-y-4">
                  {focus.points.map(point => (
                    <li key={point} className="flex items-center gap-4 text-navy-900/50 group-hover:text-white/40 font-light text-sm">
                      <div className="w-1.5 h-1.5 bg-gold-600 rounded-full group-hover:bg-gold-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="bg-gold-50 py-24 lg:py-48 px-6 lg:px-12 border-y border-navy-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-gold-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Acquisition Logic</h3>
              <h4 className="font-serif text-4xl text-navy-900 mb-10 uppercase tracking-tight">Target Selection Criteria</h4>
              <p className="text-navy-900/50 font-light leading-relaxed mb-16 max-w-lg italic">
                We are selective by design. Our benchmarks ensure each asset aligns with our core mission of sustainable, long-term wealth building.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {criteria.map(c => (
                  <div key={c.label} className="border-l-2 border-gold-600/20 pl-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900/30 mb-3 block">{c.label}</span>
                    <span className="text-xl font-serif text-navy-900">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white border border-navy-900/10 p-12 lg:p-20 relative shadow-2xl overflow-hidden">
              <Search className="absolute -bottom-10 -right-10 text-navy-900/5 rotate-12" size={240} />
              <div className="relative z-10">
                <h5 className="font-serif text-3xl text-navy-900 mb-8 uppercase tracking-tight">Opportunity Review</h5>
                <p className="text-navy-900/50 font-light mb-12 leading-relaxed">
                  If you have an asset or business venture that meets these criteria, our deal team is prepared for a rapid evaluation.
                </p>
                <a href="/sell-your-business" className="inline-flex items-center gap-4 bg-navy-900 text-gold-500 px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold-500 hover:text-navy-900 transition-all duration-500 shadow-xl">
                  Submit Deal 0.3 <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRight(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}
