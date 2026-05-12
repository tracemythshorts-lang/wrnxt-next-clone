"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CLIENTS = [
  { name: "Prabhu's Pure Veg Restaurant", id: 1, ext: "png" },
  { name: "Sharada Academy of Professional Studies", id: 2, ext: "png" },
  { name: "Shivalli Spandana", id: 3, ext: "png" },
  { name: "Ather Kanchana", id: 4, ext: "png" },
  { name: "Drona School of Design", id: 5, ext: "png" },
  { name: "ISKCON Mangalore", id: 6, ext: "png" },
  { name: "ZICA", id: 7, ext: "jpeg" },
  { name: "One More Rep", id: 8, ext: "jpeg" },
  { name: "The Artist by Nichola Dafney", id: 9, ext: "png" },
  { name: "Veera's Dudes & Dolls Style Studio", id: 10, ext: "png" },
  { name: "Sheethal Garden Ujire", id: 11, ext: "png" },
  { name: "Nine Jewels", id: 12, ext: "jpeg" },
  { name: "Nforce Infrastructure Pvt. Ltd.", id: 13, ext: "png" },
  { name: "Global Design", id: 14, ext: "png" },
  { name: "Client 15", id: 15, ext: "jpeg" },
  { name: "Client 16", id: 16, ext: "png" },
];

const SERVICES = [
  {
    title: "Online Reputation Management",
    description: "We protect and enhance your brand's reputation through active monitoring and positive brand management.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "We drive digital success with services such as SEO, PPC advertising, social media marketing, and content marketing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Website Design & Development",
    description: "Our creative team crafts visually appealing and user-friendly websites, ensuring seamless navigation and a superior experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description: "We develop custom software solutions and mobile applications tailored to streamline operations and drive growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const TEAM = [
  { name: "Adithya Puthraya", role: "Managing Director", img: "https://wrnxt.com/assets/img/team/adi.png" },
  { name: "Sujan Rao", role: "Content Writer / Marketeer", img: "https://wrnxt.com/assets/img/team/Sujan.png" },
  { name: "Rizwan", role: "Graphic Designer", img: "https://wrnxt.com/assets/img/team/Rizwan.png" },
  { name: "Jnana Prasad", role: "Web Developer and Server Admin", img: "https://wrnxt.com/assets/img/team/Prasad.png" },
  { name: "Shuhaib", role: "Digital Marketing Specialist", img: "https://wrnxt.com/assets/img/team/Shuhaib.png" },
  { name: "K S Somanna", role: "3D Generalist", img: "https://wrnxt.com/assets/img/team/Somanna1.png" },
  { name: "Mohammad Musthaq", role: "Video Editor / VFX Artist", img: "https://wrnxt.com/assets/img/team/Musthaq.png" },
  { name: "Geetanjali", role: "Graphic Designer", img: "https://wrnxt.com/assets/img/team/Geetanjali.png" },
  { name: "Uma", role: "SEO Analyst", img: "https://wrnxt.com/assets/img/team/Uma.png" },
  { name: "Mahima Vasani", role: "Content Writer", img: "https://wrnxt.com/assets/img/team/Mahima_Vasani1.png" },
  { name: "Pruthviraj", role: "Graphic Designer", img: "https://wrnxt.com/assets/img/team/Pruthviraj.png" },
  { name: "KS Appanna", role: "Web Developer", img: "https://wrnxt.com/assets/img/team/Appanna.png" },
  { name: "Rehmathulla", role: "Digital Marketing Strategist", img: "https://wrnxt.com/assets/img/team/Rehmathulla.png" },
];

export default function Home() {
  const [activeService, setActiveService] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const SERVICE_CATEGORIES = {
    Creation: [
      "Next-Gen Software Architecture (Web)", "Omnichannel Mobile Ecosystems", 
      "Full-Stack Enterprise Engineering", "High-Performance E-Commerce Engines", 
      "GMB Identity Architecture", "Social Infrastructure Development", 
      "Cinematic Brand Storytelling (Video)", "Advanced VFX & Motion Engineering", 
      "Technical Content Strategy", "Scalable Design Systems"
    ],
    Maintenance: [
      "Zero-Downtime GMB Governance", "Social Asset Performance Management", 
      "SLA-Driven Web App Support", "Mobile Infrastructure Modernization", 
      "High-Availability DevOps & Maintenance", "E-Commerce Reliability Engineering"
    ],
    Marketing: [
      "Hyper-Scale Paid Acquisition", "Search Dominance & Technical SEO", 
      "Performance-Engineered PPC", "Predictive Keyword Ranking Systems", 
      "High-Authority Backlink Infrastructure", "Data-Driven Growth Distribution", 
      "Viral-Engineered Video Assets", "Algorithmic Organic Governance"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Service Detail Overlay (Lead Gen Configurator) */}
      {activeService !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
          <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-2xl" onClick={() => {setActiveService(null); setSelectedCategory(null);}}></div>
          <div className="relative w-full max-w-6xl bg-white dark:bg-zinc-900 rounded-[3.5rem] shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in zoom-in duration-500">
            <div className="grid lg:grid-cols-5 h-full min-h-[600px]">
              {/* Left Sidebar - Description */}
              <div className="lg:col-span-2 p-10 lg:p-14 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10 space-y-8">
                  <button 
                    onClick={() => setActiveService(null)}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all group"
                  >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                      {SERVICES[activeService].icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight">{SERVICES[activeService].title}</h3>
                    <p className="text-base font-medium text-white/80 leading-relaxed max-w-xs">
                      {SERVICES[activeService].description}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 pt-8 border-t border-white/10">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">Elite Standards</p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-zinc-800"></div>
                      ))}
                    </div>
                    <p className="text-[10px] font-bold text-white/90">Trusted by 500+ <br /> CTOs & Leads</p>
                  </div>
                </div>
              </div>

              {/* Selection Area */}
              <div className="lg:col-span-3 p-8 lg:p-12 bg-zinc-50 dark:bg-[#0a0a0a] overflow-y-auto max-h-[85vh] lg:max-h-[700px]">
                {!selectedCategory ? (
                  <div className="h-full flex flex-col justify-center space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="space-y-4">
                      <h4 className="text-4xl font-black tracking-tight dark:text-white">Select Project Phase</h4>
                      <p className="text-zinc-500 font-medium">Define your project's current trajectory for specialized engineering.</p>
                    </div>
                    <div className="grid gap-5">
                      {Object.keys(SERVICE_CATEGORIES).map((cat) => (
                        <button 
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className="group p-8 bg-white dark:bg-[#111] rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 flex items-center justify-between hover:border-primary hover:shadow-2xl transition-all"
                        >
                          <div className="text-left">
                            <span className="block text-2xl font-black mb-1 group-hover:text-primary transition-colors dark:text-white">{cat}</span>
                            <span className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">Tier 1 Solutions</span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="flex items-center justify-between sticky top-0 bg-zinc-50 dark:bg-[#0a0a0a] py-4 z-10">
                      <div className="space-y-2">
                        <button 
                          onClick={() => setSelectedCategory(null)}
                          className="text-primary font-black text-[10px] uppercase tracking-[0.2em] hover:underline flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                          Category Matrix
                        </button>
                        <h4 className="text-4xl font-black tracking-tight dark:text-white">{selectedCategory} Modules</h4>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {SERVICE_CATEGORIES[selectedCategory as keyof typeof SERVICE_CATEGORIES].map((item, i) => (
                        <Link 
                          key={i}
                          href="#contact"
                          onClick={() => {setActiveService(null); setSelectedCategory(null);}}
                          className="group relative p-8 bg-white dark:bg-[#111] rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 hover:border-primary hover:shadow-2xl transition-all flex flex-col justify-between h-44 overflow-hidden"
                        >
                          <div className="relative space-y-3">
                             <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Technical Stack</span>
                                </div>
                                <svg className="w-5 h-5 text-zinc-300 dark:text-zinc-700 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                             </div>
                             <span className="block text-lg font-black leading-tight text-zinc-900 dark:text-white group-hover:text-primary transition-colors">{item}</span>
                          </div>
                          <div className="relative flex items-center gap-2">
                             <span className="text-[8px] font-black uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 dark:text-zinc-400">Elite Architecture</span>
                             <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                             <span className="text-[8px] font-bold text-primary">⚡ High Impact</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-2xl shadow-primary/5 border border-primary/10 transition-all hover:border-primary/30">
                <span className="flex h-3 w-3 rounded-full bg-primary animate-ping"></span>
                <span className="text-xs font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Digital Solutions Partner</span>
              </div>
              
              <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6">Innovative Digital Growth</p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-white">
                Building <br /> <span className="text-primary">Digital</span> <br /> Success.
              </h1>
              
              <p className="max-w-xl text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-bold">
                We create powerful digital solutions for brands that want to grow, scale, and lead in their industry.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(8,145,178,0.3)] hover:shadow-[0_20px_50px_rgba(8,145,178,0.5)] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Get a Proposal
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <button
                  onClick={() => setActiveService(0)}
                  className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-zinc-900 text-foreground border border-zinc-200 dark:border-zinc-800 rounded-[2rem] font-black text-xl shadow-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-3"
                >
                  Explore Services
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700"></div>
              <img 
                src="https://wrnxt.com/assets/img/hero-img.png" 
                alt="Digital Excellence" 
                className="relative w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_35px_35px_rgba(8,145,178,0.2)] transition-all duration-700 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">Strategic Partners</p>
          <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white">Trusted by Industry Titans</h2>
        </div>
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24">
            {[...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center p-4">
                <Image 
                  src={`https://wrnxt.com/assets/img/clients/client-${client.id}.${client.ext}`} 
                  alt={client.name} 
                  width={200}
                  height={100}
                  className="h-16 md:h-24 w-auto object-contain filter brightness-100 contrast-125 dark:brightness-200 transition-all duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://wrnxt.com/assets/img/skills.png" 
                alt="Our Expertise" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
                <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6">Our Engineering Philosophy</p>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-zinc-900 dark:text-white mb-8">
                  Engineering the <span className="text-primary">Future</span> of Digital Scale.
                </h2>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed mb-10">
                  Our mission is to architect resilient ecosystems and superior technical experiences that secure market dominance for our clients. With absolute expertise in zero-downtime IT support and high-impact digital marketing, we unlock the full velocity of digital success.
                </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "IT Support & Services",
                  "Media House Expertise",
                  "Strategic Marketing",
                  "Innovation Focused"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                    </div>
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Service <span className="text-primary">Architecture</span></h2>
              <p className="text-xl text-zinc-500 font-bold">
                Deploying elite technical stacks and high-velocity marketing strategies to secure market dominance.
              </p>
            </div>
            <button 
              onClick={() => setActiveService(0)}
              className="text-primary font-bold text-lg hover:underline flex items-center gap-2 group"
            >
              View Engineering Matrix
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <div 
                key={i} 
                onClick={() => setActiveService(i)}
                className="group p-10 rounded-[2.5rem] bg-secondary/30 dark:bg-zinc-900 border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white dark:bg-zinc-800 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  Explore Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-zinc-50 dark:bg-zinc-950/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Our Expert <span className="text-primary">Team</span></h2>
            <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-bold">
              The dedicated strategists and developers behind every digital transformation.
            </p>
          </div>
        </div>
        
        <div className="relative group">
          <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] w-max">
            {[...TEAM, ...TEAM].map((member, i) => (
              <div key={i} className="w-[280px] flex-shrink-0 group/member">
                <div className="aspect-[4/5] rounded-[2.5rem] mb-6 overflow-hidden relative shadow-2xl border-4 border-white dark:border-zinc-800 transition-all duration-500 group-hover/member:scale-105 group-hover/member:-translate-y-2">
                   <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover/member:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                    }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/member:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <p className="text-white font-black text-xl mb-1">{member.name}</p>
                      <p className="text-primary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                   </div>
                </div>
                <div className="text-center group-hover/member:opacity-0 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Featured <span className="text-primary">Insights</span></h2>
              <p className="text-xl text-zinc-500 font-bold">Latest trends in digital engineering and market governance.</p>
            </div>
            <Link href="#" className="text-primary font-bold hover:underline">View All Articles</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Scaling Modern Software Architecture",
              "The Future of Digital Governance",
              "Maximizing ROI with Technical SEO"
            ].map((post, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all group">
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">May 2026 • 5 min read</span>
                <h3 className="text-xl font-black mb-6 group-hover:text-primary transition-colors">{post}</h3>
                <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-50 dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Get in <span className="text-primary text-glow">Touch</span></h2>
            <p className="text-xl text-zinc-500 font-bold max-w-2xl mx-auto">Connect with our team to discuss your next big project.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[3.5rem] shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 grid lg:grid-cols-2">
            {/* Map Area */}
            <div className="relative h-[450px] lg:h-auto bg-zinc-100 dark:bg-zinc-800 group overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15559.512588500866!2d74.867945!3d12.851146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b82d8779555%3A0x3a59dc3cbb7a9c4b!2sWRNXT!5e0!3m2!1sen!2sin!4v1694967586838!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] dark:invert dark:hue-rotate-180 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-zinc-800/50 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">HQ Architecture</p>
                    <p className="text-base font-bold leading-tight">2-32/20, GaneshNagar, <br /> JeppinaMogaru, Mangalore</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">Secure Inbox</p>
                    <p className="text-base font-bold">info@Wrnxt.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <form 
                name="contact-blueprint" 
                method="POST" 
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact-blueprint" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 ml-2">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-8 py-5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 ml-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-8 py-5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 ml-2">Project Details</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="w-full px-8 py-5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 rounded-[2.5rem] focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-lg resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-7 bg-primary text-white rounded-[2.5rem] font-black text-2xl shadow-[0_20px_60px_rgba(8,145,178,0.3)] hover:shadow-[0_20px_60px_rgba(8,145,178,0.5)] hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                >
                  Send Message
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
                
                <div className="flex items-center justify-center gap-4 text-zinc-400">
                   <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                   <p className="text-[9px] font-black uppercase tracking-[0.5em]">Secure & Encrypted</p>
                   <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/918123455500?text=I'm%20interested%20in%20WRNXT%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 z-[100] w-16 h-16 bg-[#25d366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      >
        <span className="absolute -top-12 left-0 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-100 dark:border-zinc-700">
          Chat with us
        </span>
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
