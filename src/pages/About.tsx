import { motion } from 'motion/react';
import { Shield, Target, Users, Zap, Clock } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Discipline', desc: 'Sustained focus on long-term performance over short-term trends.', icon: Clock },
    { title: 'Integrity', desc: 'Radical transparency in all partnerships and investment reporting.', icon: Shield },
    { title: 'Long-term Thinking', desc: 'Building generational assets that stand the test of market cycles.', icon: Target },
    { title: 'Partnership', desc: 'We align our capital and reputation with the founders we back.', icon: Users },
    { title: 'Execution', desc: 'Measured strategy means nothing without relentless operational excellence.', icon: Zap }
  ];

  return (
    <div className="pt-20">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-24 lg:py-40 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Our Mandate</h1>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8">
              Wealth for <span className="italic text-gold-500">Generations</span>
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-12 max-w-xl">
              Bailey Holdings was established to bridge the gap between institutional precision and entrepreneurial agility, with a single-minded focus on legacy.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73774586594?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Business Setting" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-gold-500/20 -z-0" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-navy-900 py-32 lg:py-64 px-6 lg:px-12 overflow-hidden border-y border-white/5 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <span className="font-serif text-[30vw] absolute -bottom-10 -right-20 text-white select-none uppercase tracking-tighter">WISDOM</span>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <h3 className="text-gold-500 font-bold tracking-widest uppercase text-[10px] mb-10">The Philosophy</h3>
            <p className="text-4xl md:text-6xl font-serif text-white leading-tight mb-12 italic">
              "We don't just acquire businesses; we fortify their legacies."
            </p>
            <p className="text-white/50 font-light text-lg max-w-md leading-relaxed">
              Most value is found in the operational details others overlook. We possess the infrastructure to scale what others see as complex.
            </p>
          </div>
          <div className="space-y-16">
            <div className="border-l-2 border-gold-500 pl-8 lg:pl-12">
              <h4 className="text-gold-500 text-sm uppercase tracking-widest font-bold mb-6">Institutional Alpha</h4>
              <p className="text-white/40 font-light leading-relaxed text-xl">
                We bring the rigor of world-class private equity to the lower middle market and emerging asset classes.
              </p>
            </div>
            <div className="border-l-2 border-white/10 pl-8 lg:pl-12">
              <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-6">Execution First</h4>
              <p className="text-white/40 font-light leading-relaxed text-xl">
                We respect the blood, sweat, and tears that build businesses. Our bridge to the future is built on fairness and continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 lg:py-48 px-6 lg:px-12 bg-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-gold-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Core Tenets</h2>
             <h3 className="font-serif text-4xl md:text-5xl text-navy-900">What Drives Every Decision</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0.5 bg-navy-900/5 border border-navy-900/10">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-12 flex flex-col items-center text-center group hover:bg-navy-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1">
                <v.icon className="text-gold-600 mb-8 group-hover:text-gold-500" size={32} />
                <h4 className="font-serif text-xl mb-4 text-navy-900 group-hover:text-white uppercase tracking-tight">{v.title}</h4>
                <p className="text-navy-900/40 text-sm font-light leading-relaxed group-hover:text-white/40">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy-950 py-32 lg:py-48 px-6 lg:px-12 text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h3 className="font-serif text-4xl lg:text-5xl mb-12 text-white italic">Let's build something significant together.</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-16 font-bold">Strictly Confidential Alignment Opportunity</p>
          <a href="/contact" className="inline-block bg-gold-500 text-navy-950 px-16 py-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:brightness-110 transition-all shadow-2xl shadow-gold-500/20">
            Contact Our Deal Team
          </a>
        </div>
      </section>
    </div>
  );
}
