import { Palette, Layout, Shield, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GrowthSolutions() {
  const solutions = [
    { title: 'Brand Identity', desc: 'Crafting premium brand architectures that command market authority and build instant trust.', icon: Palette },
    { title: 'Website Development', desc: 'Building high-performance, conversion-optimized digital platforms for asset management and portfolio companies.', icon: Layout },
    { title: 'Logo Design', desc: 'Timeless, minimal visual identifiers that reflect corporate institutional quality.', icon: Shield },
    { title: 'Growth Strategy', desc: 'Data-driven go-to-market motions and operational scaling frameworks.', icon: BarChart },
  ];

  return (
    <div className="pt-20">
      {/* Editorial Header */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 relative overflow-hidden border-b border-navy-900/10 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Growth Infrastructure</h1>
            <h2 className="font-serif text-5xl md:text-8xl text-white leading-[1.05] mb-10">
              Operational <br/><span className="italic text-gold-500">Alpha</span>
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
              We don't just provide capital. We build the growth infrastructure that portfolio companies need to dominate their respective markets.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative">
             <div className="bg-navy-950 border border-white/5 aspect-[4/5] p-2 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-60" />
             </div>
             <div className="bg-navy-950 border border-white/5 aspect-[4/5] p-2 mt-16 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-60" />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gold-500/20 -z-0 rotate-45" />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-navy-900/10 border border-navy-900/10">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white p-12 lg:p-16 transition-all hover:bg-navy-900 group duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <s.icon className="text-gold-600 mb-10 group-hover:text-gold-500 transition-colors" size={40} />
                <h4 className="font-serif text-3xl mb-8 group-hover:text-white text-navy-900 uppercase tracking-tight">{s.title}</h4>
                <p className="text-navy-900/40 group-hover:text-white/40 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 lg:py-64 px-6 lg:px-12 bg-navy-900 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl lg:text-6xl text-white mb-12 tracking-tight">Elevating Assets Through <span className="italic text-gold-500">Design & Data.</span></h3>
          <p className="text-xl text-white/50 font-light leading-relaxed mb-16">
            For our portfolio companies, these services are integrated directly into the operational strategy. For external clients, we offer a boutique engagement model focused on high-stakes business growth and brand repositioning.
          </p>
          <div className="h-24 w-px bg-gold-500/30 mx-auto" />
        </div>
      </section>

      {/* Showcase Gallery */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Project Showcase</h1>
              <h3 className="font-serif text-4xl lg:text-6xl text-white uppercase">Growth <span className="italic text-white/40">Exhibits</span></h3>
            </div>
            <Link to="/portfolio" className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] border-b border-gold-500 pb-2 hover:border-white hover:text-white transition-all">Explore Case Studies 0.8</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { title: 'TechVantage Rebrand', date: 'PHASE 02', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
              { title: 'Global Capital CMS', date: 'PHASE 01', img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800' },
              { title: 'Nexus Analytics UI', date: 'PHASE 03', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ].map(item => (
              <div key={item.title} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-10 border border-white/10 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent" />
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors uppercase tracking-tight">{item.title}</h4>
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 text-center bg-navy-900">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl text-white mb-12 italic">Accelerate your company's growth trajectory.</h3>
          <Link to="/contact" className="inline-flex items-center gap-6 bg-gold-500 text-navy-950 px-12 py-6 font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all shadow-2xl">
            Inquire for Consulting <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
