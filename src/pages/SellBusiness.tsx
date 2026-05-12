import { motion } from 'motion/react';
import { DollarSign, Shield, Zap, TrendingUp, ChevronRight } from 'lucide-react';

export default function SellBusiness() {
  const processSteps = [
    { title: 'Inquiry', desc: 'Secure submission of high-level asset details and financial history.' },
    { title: 'Evaluation', desc: '48-hour preliminary internal review of asset alignment and synergy.' },
    { title: 'Due Diligence', desc: 'Expedited professional audit of operations, legal, and financials.' },
    { title: 'Execution', desc: 'Institutional closing with focus on founder legacy and continuity.' }
  ];

  return (
    <div className="pt-20">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-24 lg:py-40 bg-navy-900 border-b border-white/5 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="lg:w-2/3">
            <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Exit Strategy</h1>
            <h2 className="font-serif text-5xl md:text-8xl leading-[1.1] mb-8">
              Confidential <br/>Asset <span className="italic text-gold-500">Liquidation</span>
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
              We provide a discrete, professional path for founders looking to exit. No brokers, no noise—just institutional execution.
            </p>
          </div>
        </div>
      </section>

      {/* Transaction Process */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-gold-50 border-b border-navy-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-navy-950/10 border border-navy-950/10">
            {processSteps.map((step, i) => (
              <div key={step.title} className="bg-white p-12 lg:p-16 flex flex-col h-full hover:bg-navy-950 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:-translate-y-1">
                <div className="text-gold-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-10 group-hover:text-gold-500">Phase 0{i + 1}</div>
                <h4 className="font-serif text-3xl mb-6 text-navy-900 group-hover:text-white uppercase tracking-tight">{step.title}</h4>
                <p className="text-navy-900/50 text-sm font-light leading-relaxed group-hover:text-white/40">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-gold-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Inquiry Form</h3>
            <h4 className="font-serif text-4xl text-navy-900 mb-10 leading-tight uppercase">Submit Your Asset For Review</h4>
            <p className="text-navy-900/50 font-light leading-relaxed mb-12 max-w-md italic">
              Please provide the following preliminary information. All data is handled with maximum institutional confidentiality.
            </p>
            
            <div className="space-y-12">
               {[
                 { label: 'Discrete Closings', desc: 'We operate without public fanfare to protect employee morale and brand stability.' },
                 { label: 'Fair Valuation', desc: 'Our offers reflect true asset value, operational potential, and synergy alpha.' }
               ].map(item => (
                 <div key={item.label} className="flex gap-8 group">
                    <div className="w-12 h-12 bg-gold-50 border border-gold-100 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                      <Shield className="text-gold-600 group-hover:text-navy-950" size={24} />
                    </div>
                    <div>
                      <h5 className="text-navy-900 font-bold uppercase tracking-widest text-[11px] mb-3">{item.label}</h5>
                      <p className="text-navy-900/40 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="bg-white border border-navy-950/10 p-10 lg:p-20 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold-500/20 translate-x-10 -translate-y-10" />
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Company Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy-900/10 py-5 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light placeholder:text-navy-900/20" placeholder="Required" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Industry Sector</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy-900/10 py-5 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light placeholder:text-navy-900/20" placeholder="e.g. SaaS, Logistics" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Annual Revenue (LTM)</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy-900/10 py-5 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light placeholder:text-navy-900/20" placeholder="$0.00 M" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">EBITDA (LTM)</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy-900/10 py-5 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light placeholder:text-navy-900/20" placeholder="$0.00 M" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Reason for Exit</label>
                <textarea rows={4} className="w-full bg-gold-50/50 border border-navy-900/5 p-6 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors resize-none font-light shadow-inner placeholder:text-navy-900/20" placeholder="Summarize your situation..." />
              </div>

              <button className="w-full bg-navy-900 text-gold-500 py-6 text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-gold-500 hover:text-navy-900 transition-all duration-500 shadow-2xl">
                Initiate Confidential Audit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
