import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

type FunnelType = 'investor' | 'seller' | 'founder' | 'partner' | 'client';

export default function Contact() {
  const [activeFunnel, setActiveFunnel] = useState<FunnelType>('investor');

  const funnels: { id: FunnelType; label: string; title: string; desc: string }[] = [
    { id: 'investor', label: 'Investors', title: 'Private Capital Inquiries', desc: 'Accredited investors seeking to join our private portfolio opportunities.' },
    { id: 'seller', label: 'Business Sellers', title: 'Direct Acquisition Funnel', desc: 'Founders looking to exit their business with a professional, recapitalized buyer.' },
    { id: 'founder', label: 'Startups / Founders', title: 'Venture Capital Partnerships', desc: 'Scalable tech or service startups seeking seed to Series A capital and growth advisory.' },
    { id: 'partner', label: 'Strategic Partners', title: 'Institutional & Deal Partners', desc: 'Brokers, family offices, and institutional partners looking for deal-flow collaboration.' },
    { id: 'client', label: 'Growth Clients', title: 'Advisory & Design Services', desc: 'Boutique engagement for high-stakes brand repositioning and growth infrastructure.' }
  ];

  const currentFunnel = funnels.find(f => f.id === activeFunnel)!;

  return (
    <div className="pt-20">
      {/* Contact Header */}
      <section className="px-6 lg:px-12 py-24 lg:py-48 border-b border-navy-900/10 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-24 items-start">
          <div className="lg:w-2/5">
            <h1 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Inquiry Terminal</h1>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-12 tracking-tight uppercase">
              Connect With <br/><span className="italic text-gold-500">The Deal Team</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-px h-12 bg-gold-500/30 group-hover:bg-gold-500 transition-colors shrink-0" />
                <div>
                  <h4 className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Electronic Mail</h4>
                  <p className="text-white/40 font-light hover:text-white transition-colors cursor-pointer">deals@baileyholdings.com</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-px h-12 bg-gold-500/30 group-hover:bg-gold-500 transition-colors shrink-0" />
                <div>
                  <h4 className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Telephony</h4>
                  <p className="text-white/40 font-light">+1 (800) 555-BAILEY</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-px h-12 bg-gold-500/30 group-hover:bg-gold-500 transition-colors shrink-0" />
                <div>
                  <h4 className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Regional HQ</h4>
                  <p className="text-white/40 font-light lowercase">Austin, Texas, United States</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 p-10 bg-navy-950 border border-white/10 flex items-center gap-8 shadow-xl">
               <Shield className="text-gold-500 shrink-0 opacity-40" size={40} />
               <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-[0.2em]">
                 All correspondence is handled via secure institutional protocols. Complete confidentiality is guaranteed.
               </p>
            </div>
          </div>

          <div className="lg:w-3/5 w-full bg-white border border-navy-900/10 p-10 lg:p-20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold-500/20 translate-x-12 -translate-y-12" />
              
              {/* Funnel Selector Tabs */}
              <div className="flex flex-wrap gap-4 mb-20 border-b border-navy-900/5 pb-10">
                {funnels.map(f => (
                  <button 
                    key={f.id}
                    onClick={() => setActiveFunnel(f.id)}
                    className={`text-[10px] uppercase font-bold tracking-[0.3em] px-6 py-4 border transition-all duration-300 ${
                      activeFunnel === f.id ? 'bg-navy-900 text-gold-500 border-navy-900' : 'bg-transparent text-navy-900/30 border-navy-900/5 hover:border-gold-500 hover:text-gold-600'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="mb-16">
                <h3 className="font-serif text-4xl text-navy-900 mb-6 uppercase tracking-tight">{currentFunnel.title}</h3>
                <p className="text-navy-900/50 text-base font-light italic leading-relaxed">{currentFunnel.desc}</p>
              </div>

              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-navy-900/10 py-5 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light placeholder:text-navy-900/20" placeholder="Required" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Professional Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-navy-900/10 py-5 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light placeholder:text-navy-900/20" placeholder="Required" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">Executive Briefing</label>
                  <textarea rows={4} className="w-full bg-gold-50/50 border border-navy-900/5 p-6 text-base text-navy-900 focus:outline-none focus:border-gold-500 transition-colors font-light resize-none leading-relaxed placeholder:text-navy-900/20 shadow-inner" placeholder="Summarize the core objective or asset value..." />
                </div>

                <button className="w-full bg-navy-900 text-gold-500 py-6 text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-gold-500 hover:text-navy-900 transition-all duration-500 shadow-2xl flex justify-center items-center gap-4">
                  Initiate Correspondence <ArrowRight size={14} />
                </button>
                
                <p className="text-[10px] text-navy-900/20 uppercase tracking-[0.4em] font-bold text-center italic">
                  Standard review: 24-48 business hours
                </p>
              </form>
          </div>
        </div>
      </section>

      {/* Global Presence Visual */}
      <section className="bg-navy-950 py-32 lg:py-64 relative grayscale opacity-30 flex items-center justify-center overflow-hidden border-t border-white/5">
         <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay scale-110 blur-sm" />
         <div className="relative font-serif text-white/20 text-7xl md:text-[20rem] select-none uppercase tracking-[0.2em] font-bold pointer-events-none">AUSTIN</div>
      </section>
    </div>
  );
}
