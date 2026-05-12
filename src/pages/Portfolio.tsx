import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const categories = ['All', 'Real Estate', 'Acquisitions', 'Venture', 'Growth Client'];

const projects = [
  { 
    title: 'The Summit Multifamily', 
    category: 'Real Estate', 
    desc: 'Value-add acquisition of 120-unit distressed garden-style apartment complex.',
    strategy: 'Full unit renovation, operational efficiency implementation, and amenities upgrade.',
    outcome: 'Increased NOI by 34% within 18 months. Currently held for cash flow.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    title: 'Precision Logistics Inc.', 
    category: 'Acquisitions', 
    desc: 'Acquisition of a founder-led regional freight forwarding business with $8M revenue.',
    strategy: 'Modernized technology stack, expanded fleet by 20%, and optimized routes.',
    outcome: 'Revenue grew to $14M in 2 years with significantly improved margins.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    title: 'StreamFlow SaaS', 
    category: 'Venture', 
    desc: 'Seed investment in a workflow automation tool for legal professionals.',
    strategy: 'Growth advisory for GTM motion and brand architecture development.',
    outcome: 'Series A funding raised at 5x entry valuation. Customer base expanded globally.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    title: 'Apex Financial Group', 
    category: 'Growth Client', 
    desc: 'Brand redesign and growth infrastructure for a mid-market financial advisory firm.',
    strategy: 'Total brand identity refresh, custom digital platform, and inbound lead funnel.',
    outcome: '300% increase in qualified digital inquiries per month.',
    img: 'https://images.unsplash.com/photo-1554469384-e58fb1582b57?auto=format&fit=crop&q=80&w=1200' 
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="pt-20">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-24 lg:py-40 border-b border-navy-900/10 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="max-w-2xl">
            <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Execution Record</h1>
            <h2 className="font-serif text-5xl md:text-8xl text-white leading-[1.05]">
              Proven <br/><span className="italic text-gold-500">Asset Growth</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6 pb-2">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold py-2 transition-all relative ${
                  filter === c ? 'text-gold-500' : 'text-white/40 hover:text-white'
                }`}
              >
                {c}
                {filter === c && <motion.div layoutId="underline" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold-500" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 py-24 lg:py-48">
        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-64">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project.title}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 relative group overflow-hidden border border-navy-900/5 aspect-[16/10] w-full shadow-2xl">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute top-8 right-8 w-14 h-14 bg-navy-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-gold-500 hover:text-navy-950 transition-colors">
                    <Plus size={24} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                   <div className="flex items-center gap-6 mb-10">
                      <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-[10px]">{project.category}</span>
                      <div className="h-px flex-grow bg-navy-900/5" />
                   </div>
                   <h3 className="font-serif text-4xl lg:text-6xl text-navy-900 mb-10 tracking-tight uppercase">{project.title}</h3>
                   <p className="text-navy-900/50 font-light text-xl italic mb-16 leading-relaxed">
                     "{project.desc}"
                   </p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-navy-900/10 pt-12">
                     <div>
                       <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-600/50 mb-4">Strategic Alpha</h4>
                       <p className="text-sm font-light text-navy-900/60 leading-relaxed">{project.strategy}</p>
                     </div>
                     <div>
                       <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-600/50 mb-4">Performance Outcome</h4>
                       <p className="text-sm font-medium text-navy-900 leading-relaxed">{project.outcome}</p>
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Narrative Footer */}
      <section className="bg-navy-900 py-32 lg:py-64 px-6 lg:px-12 text-center overflow-hidden relative border-t border-navy-900/10">
        <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
           <span className="font-serif text-[25vw] whitespace-nowrap text-white uppercase select-none tracking-tighter">SUCCESS</span>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h3 className="font-serif text-4xl lg:text-5xl text-white mb-10 italic">Investing where others see complexity.</h3>
          <p className="text-white/30 font-light mb-16 uppercase tracking-[0.3em] text-[10px]">Active Deployment Opportunity Review 2024.4</p>
          <a href="/contact" className="inline-block bg-gold-500 text-navy-950 px-16 py-6 font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all shadow-2xl">
            Inquire for Partnership
          </a>
        </div>
      </section>
    </div>
  );
}
