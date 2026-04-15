import React, { useEffect, useRef, useState } from 'react';
import { Mail, ArrowRight, Code2, Zap, LayoutTemplate } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NoiseOverlay = () => (
  <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

const Button = ({ children, className = '', style, href = '#' }) => {
  return (
    <a href={href} className={`btn-magnetic inline-flex items-center justify-center relative overflow-hidden px-8 py-4 rounded-[2rem] font-bold text-lg ${className}`} style={style}>
      <span className="btn-layer bg-brutal-black absolute inset-0 w-full h-full transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-[hover]:translate-y-0"></span>
      <span className="btn-content relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

// Nav - Morphs on scroll
const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        onToggle: (self) => {
          if (!self.isActive) {
            gsap.to(navRef.current, { 
              backgroundColor: 'transparent',
              backdropFilter: 'blur(0px)',
              border: '1px solid transparent', 
              duration: 0.3, 
              scale: 1,
              boxShadow: 'none'
            });
          } else {
            gsap.to(navRef.current, { 
              backgroundColor: 'rgba(10, 10, 10, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(212,175,55,0.3)', 
              duration: 0.3, 
              scale: 0.98,
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
            });
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] md:w-auto px-6 md:px-10 py-4 md:py-5 rounded-full flex justify-between items-center gap-6 md:gap-14 font-medium text-brutal-black border border-transparent shadow-none" style={{ backgroundColor: 'transparent' }}>
      <div className="font-bold text-lg md:text-xl tracking-[0.2em] uppercase shrink-0 select-none flex items-center gap-3">
         <span className="w-6 h-6 border-2 border-brutal-red flex items-center justify-center text-[10px] pb-[-1px]">ZM</span>
         <span className="hidden sm:block">Zeal Media</span>
         <span className="sm:hidden">Zeal</span>
      </div>
      <div className="hidden md:flex gap-10 items-center text-xs uppercase tracking-[0.15em] shrink-0 font-mono text-brutal-black/80">
        <a href="#features" className="hover:text-brutal-red hover:-translate-y-[1px] transition-transform">Ateliers</a>
        <a href="#philosophy" className="hover:text-brutal-red hover:-translate-y-[1px] transition-transform">Philosophy</a>
        <a href="#protocol" className="hover:text-brutal-red hover:-translate-y-[1px] transition-transform">Protocol</a>
      </div>
      <a href="#contact" className="bg-brutal-red text-brutal-paper border-none px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Consultation</a>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        duration: 1.4,
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] bg-brutal-black overflow-hidden flex flex-col justify-end pb-24 lg:pb-32 px-6 md:px-16 lg:px-24">
      {/* Background Image Unsplash - Web Development Mockup */}
      <div className="absolute inset-0 w-full h-full opacity-50 mix-blend-luminosity">
         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" alt="High-end dashboard UI design mockup" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brutal-black via-brutal-black/70 to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl text-brutal-paper w-full">
        <div className="hero-anim mb-6 inline-flex items-center font-bold text-xs md:text-sm text-brutal-red uppercase tracking-widest font-mono">
            <span className="w-2 h-2 rounded-full bg-brutal-red animate-pulse mr-3"></span>
            Elevated Digital Standards
        </div>
        <h1 className="leading-[0.9]">
          <span className="hero-anim block text-5xl md:text-7xl lg:text-[7rem] shrink-0 font-sans font-bold tracking-tighter mb-2">Architecting</span>
          <span className="hero-anim block text-6xl md:text-[8rem] lg:text-[10rem] font-drama text-brutal-paper leading-[0.8] mb-8">Excellence.</span>
        </h1>
        <p className="hero-anim mt-10 max-w-2xl text-brutal-paper/80 font-mono text-base md:text-xl mb-12 leading-relaxed">
          ZEAL MEDIA — A premier web development agency. We forge scalable Shopify experiences, bespoke WordPress implementations, and custom workflow automations.
        </p>
        <div className="hero-anim flex flex-wrap gap-4">
          <Button href="#contact" className="bg-brutal-offwhite text-brutal-black border-none hover:bg-brutal-paper">
            Deploy Your Vision <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const SkillsMarquee = () => {
  const skills = [
    "React", "System Architecture", "Next.js", "Shopify Plus", "GSAP", 
    "Tailwind CSS", "Node.js", "WebGL", "Headless CMS", "Liquid", "PostgreSQL"
  ];
  return (
    <div className="py-12 bg-brutal-paper border-y border-brutal-red/20 overflow-hidden flex relative items-center">
       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brutal-paper to-transparent z-10"></div>
       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brutal-paper to-transparent z-10"></div>
       <div className="flex gap-16 animate-marquee whitespace-nowrap px-8 font-mono text-xl md:text-2xl text-brutal-red uppercase tracking-widest opacity-90 font-light">
          {skills.map((s,i) => <span key={i} className="flex items-center gap-16"><span>{s}</span><span className="w-2 h-2 rounded-full bg-brutal-red/50"></span></span>)}
          {skills.map((s,i) => <span key={`dup-${i}`} className="flex items-center gap-16"><span>{s}</span><span className="w-2 h-2 rounded-full bg-brutal-red/50"></span></span>)}
       </div>
    </div>
  );
};

const Metrics = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-16 bg-brutal-paper text-brutal-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brutal-red/20 pt-8 border-t border-brutal-red/20 mt-[-2rem]">
                <div className="pt-8 md:pt-0 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-6xl md:text-[5.5rem] font-drama text-brutal-red mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">98%</div>
                    <div className="font-mono uppercase tracking-[0.2em] text-xs font-bold text-brutal-black/50 group-hover:text-brutal-red transition-colors">Client Retention Rate</div>
                </div>
                <div className="pt-8 md:pt-0 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-6xl md:text-[5.5rem] font-drama text-brutal-red mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">&lt; 0.8s</div>
                    <div className="font-mono uppercase tracking-[0.2em] text-xs font-bold text-brutal-black/50 group-hover:text-brutal-red transition-colors">Average Load Time</div>
                </div>
                <div className="pt-8 md:pt-0 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-6xl md:text-[5.5rem] font-drama text-brutal-red mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">$50M+</div>
                    <div className="font-mono uppercase tracking-[0.2em] text-xs font-bold text-brutal-black/50 group-hover:text-brutal-red transition-colors">Client Revenue Enabled</div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
  // Feature 1: Diagnostic Shuffler components
  const [shufflerCards, setShufflerCards] = useState(['Conversion Optimized', 'Brand Aligned', 'Headless Capabilities']);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Feature 2: Telemetry Typewriter components
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "> ALL SYSTEMS NOMINAL. REACT APP ONLINE. API ROUTES OK. DB CONNECTED.";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if(index < fullText.length) {
        setTypewriterText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        setTimeout(() => { setTypewriterText(''); index = 0; }, 4000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Feature 3: Cursor Scheduler animation
  const schedulerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to('.sched-cursor', { x: 75, y: 35, duration: 1, ease: "power2.inOut" })
        .to('.sched-cursor', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.sched-cell-3', { backgroundColor: '#D4AF37', color: '#F5F5F5', duration: 0.2 }, "-=0.2")
        .to('.sched-cursor', { x: 155, y: 115, duration: 1, ease: "power2.inOut" }, "+=0.5")
        .to('.sched-cursor', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.sched-btn', { backgroundColor: '#D4AF37', color: '#F5F5F5', duration: 0.2 }, "-=0.2")
        .to('.sched-cursor', { opacity: 0, duration: 0.3 }, "+=1")
        .set('.sched-cell-3', { backgroundColor: 'transparent', color: '#000000' })
        .set('.sched-btn', { backgroundColor: '#FFFFFF', color: '#000000' })
        .to('.sched-cursor', { x: 0, y: 0, opacity: 1, duration: 0.1 });
    }, schedulerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="py-24 md:py-40 px-6 md:px-16 bg-brutal-offwhite rounded-b-[4rem] relative z-20 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 tracking-tight leading-none text-brutal-black">Digital <br/><span className="font-drama text-brutal-red italic">Ateliers.</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Shuffler */}
          <div className="bg-brutal-paper rounded-[3rem] p-10 border border-brutal-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative flex flex-col group hover:-translate-y-2 transition-transform duration-500 overflow-hidden min-h-[420px]">
            <div className="flex justify-between items-center mb-8 shrink-0">
              <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center"><LayoutTemplate className="w-7 h-7 mr-3 text-brutal-red"/> E-Commerce</h3>
            </div>
            <p className="text-sm font-mono text-brutal-black/70 mb-10 shrink-0 pr-8">Deploying robust Shopify & WordPress engines built to scale and convert exponentially.</p>
            
            <div className="relative flex-1 w-full flex items-end pb-8">
              {shufflerCards.map((card, i) => (
                <div key={card} 
                  className="absolute w-full bg-brutal-offwhite border border-brutal-black/10 rounded-2xl p-5 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    bottom: `${i * 20 + 20}px`,
                    scale: 1 - i * 0.08,
                    opacity: 1 - i * 0.3,
                    zIndex: 10 - i,
                    transformOrigin: 'bottom center'
                  }}>
                  <p className="font-mono text-xs font-bold text-brutal-black">{card}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-10 right-10 font-mono text-xs bg-brutal-black text-brutal-paper px-3 py-1.5 rounded uppercase">SYS.01</div>
          </div>

          {/* Card 2 - Typewriter */}
          <div className="bg-brutal-paper rounded-[3rem] p-10 border border-brutal-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 min-h-[420px] relative">
            <div className="flex justify-between items-center mb-8 shrink-0">
              <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center"><Code2 className="w-7 h-7 mr-3 text-brutal-red"/> Full-Stack</h3>
            </div>
            <p className="text-sm font-mono text-brutal-black/70 mb-8 shrink-0 pr-8">Scalable bespoke web applications leveraging React, modern frameworks and headless CMS architecture.</p>
            
            <div className="flex-1 bg-brutal-black rounded-2xl p-6 font-mono text-xs text-brutal-offwhite overflow-hidden relative shadow-inner flex flex-col justify-end">
              <div className="opacity-50 mb-3">&gt; Initialize App Server... OK</div>
              <div className="opacity-50 mb-3">&gt; Mounting components... OK</div>
              <div className="text-brutal-red leading-relaxed">{typewriterText}<span className="animate-pulse">_</span></div>
            </div>
            <div className="absolute top-10 right-10 flex items-center gap-2 font-mono text-xs text-brutal-red uppercase">
                <span className="w-2 h-2 rounded-full bg-brutal-red animate-pulse"></span> LIVE
              </div>
          </div>

          {/* Card 3 - Scheduler */}
          <div ref={schedulerRef} className="bg-brutal-paper rounded-[3rem] p-10 border border-brutal-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 min-h-[420px] relative">
            <div className="flex justify-between items-center mb-8 shrink-0">
              <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center"><Zap className="w-7 h-7 mr-3 text-brutal-red"/> Automation</h3>
            </div>
            <p className="text-sm font-mono text-brutal-black/70 mb-8 shrink-0 pr-8">Connecting dynamic APIs and eliminating manual legacy workflows to supercharge operations.</p>
            
            <div className="flex-1 relative border border-brutal-black/10 rounded-2xl p-4 bg-brutal-offwhite flex flex-col pt-[40%]">
              <div className="grid grid-cols-5 gap-2 text-center mb-4 text-[10px] font-mono text-brutal-black/50">
                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div>
                <div className="aspect-square bg-brutal-paper border border-brutal-black/10 rounded-lg"></div>
                <div className="aspect-square bg-brutal-paper border border-brutal-black/10 rounded-lg"></div>
                <div className="sched-cell-3 aspect-square bg-brutal-paper border border-brutal-black/10 rounded-lg transition-colors"></div>
                <div className="aspect-square bg-brutal-paper border border-brutal-black/10 rounded-lg"></div>
                <div className="aspect-square bg-brutal-paper border border-brutal-black/10 rounded-lg"></div>
              </div>
              <div className="mt-auto flex justify-end">
                <div className="sched-btn px-4 py-2 border border-brutal-black/10 rounded-xl bg-brutal-paper text-brutal-black transition-colors font-mono text-xs font-bold shadow-sm">Save Rule</div>
              </div>
              
              {/* Fake cursor */}
              <svg className="sched-cursor absolute top-4 left-4 w-7 h-7 text-brutal-black drop-shadow-lg z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2l12 11.2h-5.8l3.3 7.3-2.2.9-3.2-7.4-4.4 4.7z" />
              </svg>
            </div>
            <div className="absolute top-10 right-10 font-mono text-xs bg-brutal-black text-brutal-paper px-3 py-1.5 rounded uppercase">SYS.03</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SelectedWorks = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-anim', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        duration: 1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Lumina",
      type: "Shopify Plus / Headless",
      img: "https://images.unsplash.com/photo-1596462502278-27bf314bbdbe?q=80&w=2000&auto=format&fit=crop",
      desc: "A high-converting D2C cosmetic brand built on Headless Shopify."
    },
    {
      title: "Onyx Fit",
      type: "Shopify API / Custom Theme",
      img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000&auto=format&fit=crop",
      desc: "Athleisure giant relying on complex inventory synced via our custom Shopify app."
    },
    {
      title: "Aura Essentials",
      type: "Shopify O.S. 2.0",
      img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2000&auto=format&fit=crop",
      desc: "Premium homeware storefront yielding +120% conversion vs standard templates."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-16 bg-brutal-paper text-brutal-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="work-anim text-4xl md:text-6xl font-drama mb-4">Selected Works.</h2>
        <p className="work-anim font-mono text-xs md:text-sm uppercase tracking-widest text-brutal-black/50 mb-16 border-l-2 border-brutal-red pl-4">Showcasing high-scale Shopify integrations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="work-anim group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] bg-brutal-black rounded-lg mb-6 relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal" />
                <div className="absolute inset-0 bg-gradient-to-t from-brutal-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    <h3 className="text-brutal-paper font-bold text-2xl group-hover:text-brutal-red transition-colors">{p.title}</h3>
                    <div className="w-8 h-8 rounded-full bg-brutal-paper/10 backdrop-blur flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                      <ArrowRight className="w-4 h-4 text-brutal-paper" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs font-bold text-brutal-red uppercase tracking-widest mb-2">{p.type}</p>
              <p className="text-brutal-black/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-anim', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        duration: 1.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative py-40 md:py-60 px-6 md:px-16 bg-brutal-black text-brutal-paper overflow-hidden mt-[-2rem] pt-[6rem]">
      {/* Texture Image */}
      <div className="absolute inset-0 opacity-10 mix-blend-luminosity">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop" alt="Web developer coding on laptop" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
         <div className="md:w-1/3 pt-4">
             <p className="phil-anim text-lg md:text-xl font-mono text-brutal-paper/50 mb-8 border-l-[3px] border-brutal-red pl-6 leading-relaxed uppercase">
                Most industry focuses on:<br/> <span className="text-brutal-paper/80">decorative fluff & disconnected tools.</span>
            </p>
         </div>
         <div className="md:w-2/3">
             <p className="phil-anim text-5xl md:text-8xl lg:text-[8rem] font-drama leading-[1]">
                We focus on: <span className="text-brutal-red not-italic font-sans font-bold block mt-4">Flawless Execution.</span>
            </p>
         </div>
      </div>
    </section>
  );
};

const ProtocolSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if(i === cards.length - 1) return; // Skip last card
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          animation: gsap.to(card, {
            scale: 0.92,
            opacity: 0.4,
            filter: 'blur(20px)',
            ease: "none"
          }),
          scrub: true
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      num: "01",
      title: "Architecture Design",
      desc: "Mapping the absolute fastest data routes, database structures, and platform integrations before compiling a single line of application source code.",
      visual: (
        <svg viewBox="0 0 100 100" className="w-full h-full max-w-[300px] max-h-[300px] p-8 text-brutal-black/20 animate-[spin_25s_linear_infinite]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Assembly & Testing",
      desc: "Deploying cinematic React interfaces and robust headless infrastructure connected with automated testing grids systematically verifying every critical interaction.",
      visual: (
        <div className="w-full h-full p-8 flex flex-col gap-6 relative justify-center overflow-hidden max-w-[400px]">
          <div className="w-[120%] h-[2px] bg-brutal-red absolute -left-[10%] top-1/2 animate-[pulse_2s_ease-in-out_infinite] z-10 shadow-[0_0_20px_#D4AF37]"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-4">
              {[...Array(8)].map((_, j) => (
                <div key={j} className="flex-1 h-6 bg-brutal-black/10 rounded-sm"></div>
              ))}
            </div>
          ))}
        </div>
      )
    },
    {
      num: "03",
      title: "Launch Sequence",
      desc: "CI/CD pipelines locked. Global edge CDN activated on Vercel. Handing over the keys to a system permanently built to scale instantly under maximal load.",
      visual: (
        <svg viewBox="0 0 200 100" className="w-full h-full max-w-[400px] p-8 text-brutal-red drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <path d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50" fill="none" stroke="currentColor" strokeWidth="6" className="animate-[dash_3s_linear_infinite]" strokeDasharray="300" strokeDashoffset="300" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      )
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="bg-brutal-offwhite rounded-t-[4rem] mt-[-2rem] relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      {protocols.map((p, i) => (
        <div key={i} className="protocol-card min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-24 border-b border-brutal-black/5 bg-brutal-offwhite origin-top will-change-transform">
          <div className="w-full md:w-1/2 md:pr-24 mb-16 md:mb-0">
            <span className="font-mono text-2xl text-brutal-red mb-6 block font-bold tracking-widest">STEP_{p.num}</span>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold mb-10 tracking-tighter leading-none">{p.title}</h2>
            <p className="font-mono text-lg md:text-xl text-brutal-black/70 max-w-lg leading-relaxed">{p.desc}</p>
          </div>
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[600px] bg-brutal-paper border border-brutal-black/10 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-xl">
            {p.visual}
          </div>
        </div>
      ))}
    </section>
  );
};

const Membership = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16 bg-brutal-paper border-b border-brutal-black/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">System Deployments.</h2>
        <p className="text-center font-mono text-brutal-black/60 mb-20 text-lg uppercase tracking-widest max-w-2xl mx-auto">
            Procure the optimal digital architecture for your operational scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          
          {/* Card 1 */}
          <div className="bg-brutal-offwhite p-10 lg:p-12 rounded-[3rem] border border-brutal-black/10 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <h3 className="font-mono text-sm text-brutal-black/50 mb-4 uppercase font-bold tracking-widest">Storefront Build</h3>
            <div className="text-4xl font-bold mb-8 font-drama italic">Commerce</div>
            <p className="text-brutal-black/70 mb-10 font-mono text-sm min-h-[60px]">Shopify and WordPress blueprints engineered for high conversion rates.</p>
            <ul className="space-y-5 font-mono text-sm flex-1 mb-12">
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-brutal-red"/> Premium Theme Customization</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-brutal-red"/> Secure Gateway Integration</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-brutal-red"/> CRM & Email Marketing Sync</li>
            </ul>
            <Button className="bg-brutal-black text-brutal-paper w-full group">
                Request Intel
            </Button>
          </div>
          
          {/* Middle Card Pops */}
          <div className="bg-brutal-black text-brutal-paper p-10 lg:p-12 rounded-[3rem] border border-brutal-black shadow-2xl flex flex-col h-full transform md:scale-105 relative z-10 transition-transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brutal-red text-brutal-paper text-xs font-mono font-bold py-2 px-6 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)]">Optimal Scope</div>
            <h3 className="font-mono text-sm text-brutal-paper/50 mb-4 uppercase font-bold tracking-widest">Full-Stack Platform</h3>
            <div className="text-5xl font-bold mb-8 text-brutal-red">Bespoke</div>
            <p className="text-brutal-paper/80 mb-10 font-mono flex-1 text-sm">Advanced proprietary systems powered by modern React and Node.js infrastructure.</p>
            <ul className="space-y-5 font-mono text-sm mb-12 border-t border-brutal-paper/10 pt-10">
              <li className="flex items-start gap-3"><Zap className="w-5 h-5 shrink-0 text-brutal-red"/> React / Next.js Architecture</li>
              <li className="flex items-start gap-3"><Zap className="w-5 h-5 shrink-0 text-brutal-red"/> Scalable Postgres Backend</li>
              <li className="flex items-start gap-3"><Zap className="w-5 h-5 shrink-0 text-brutal-red"/> Vercel Edge Deployment</li>
              <li className="flex items-start gap-3"><Zap className="w-5 h-5 shrink-0 text-brutal-red"/> Unrestricted 3rd Party APIs</li>
            </ul>
            <Button className="bg-brutal-red text-brutal-paper w-full group">
                Initialize Project
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-brutal-offwhite p-10 lg:p-12 rounded-[3rem] border border-brutal-black/10 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-2 mt-8 md:mt-0">
            <h3 className="font-mono text-sm text-brutal-black/50 mb-4 uppercase font-bold tracking-widest">Workflow Automation</h3>
            <div className="text-4xl font-bold mb-8 font-drama italic text-brutal-black">Operations</div>
            <p className="text-brutal-black/70 mb-10 font-mono text-sm min-h-[60px]">Eradicating manual data entry with deeply integrated automation sequences.</p>
            <ul className="space-y-5 font-mono text-sm flex-1 mb-12">
               <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-brutal-red"/> Zapier & Make Blueprints</li>
               <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-brutal-red"/> Bi-directional Data Sync</li>
               <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-brutal-red"/> Bespoke Webhook Handlers</li>
            </ul>
            <Button className="bg-brutal-black text-brutal-paper w-full group">
                Request Intel
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brutal-black font-sans rounded-t-[4rem] text-brutal-paper pt-32 pb-12 px-6 md:px-16 mt-[-4rem] relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] min-h-[60vh] flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 flex-1">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
              <h2 className="text-5xl md:text-[5rem] font-bold tracking-tighter mb-8 leading-none">ZEAL<br/><span className="text-brutal-red">MEDIA.</span></h2>
              <p className="font-mono text-brutal-paper/60 text-lg md:text-xl max-w-md mb-12">Architects of high-performance digital environments.</p>
          </div>
          <a href="mailto:hello@zealmedia.dev" className="inline-flex items-center text-2xl md:text-4xl font-drama group hover:text-brutal-red transition-colors w-max">
            <Mail className="w-8 h-8 mr-4 group-hover:-translate-y-1 transition-transform" /> hello@zealmedia.dev
          </a>
        </div>
        <div className="pt-2">
          <h4 className="font-mono text-sm font-bold tracking-widest text-brutal-paper/40 mb-8 uppercase">Directives</h4>
          <ul className="space-y-4 font-mono text-base">
            <li><a href="#features" className="hover:text-brutal-red transition-colors inline-block hover:translate-x-2 transform">Features</a></li>
            <li><a href="#philosophy" className="hover:text-brutal-red transition-colors inline-block hover:translate-x-2 transform">Philosophy</a></li>
            <li><a href="#protocol" className="hover:text-brutal-red transition-colors inline-block hover:translate-x-2 transform">Protocol</a></li>
          </ul>
        </div>
        <div className="pt-2">
          <h4 className="font-mono text-sm font-bold tracking-widest text-brutal-paper/40 mb-8 uppercase">Data Governance</h4>
          <ul className="space-y-4 font-mono text-base">
            <li><a href="#" className="hover:text-brutal-red transition-colors inline-block hover:translate-x-2 transform">Privacy Shield</a></li>
            <li><a href="#" className="hover:text-brutal-red transition-colors inline-block hover:translate-x-2 transform">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brutal-red transition-colors inline-block hover:translate-x-2 transform">Imprint</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center border-t border-brutal-paper/10 pt-10 mt-auto">
        <div className="flex items-center gap-4 font-mono text-xs md:text-sm text-brutal-paper/60 mb-6 md:mb-0">
          <span className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_15px_#D4AF37]"></span>
          <span className="tracking-widest font-bold">SYSTEM OPERATIONAL_</span>
        </div>
        <div className="font-mono text-xs md:text-sm tracking-widest text-brutal-paper/40 flex items-center gap-4">
          <span>© {new Date().getFullYear()} ZEAL MEDIA SECURE PROTOCOL</span>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Features />
      <SelectedWorks />
      <Philosophy />
      <Metrics />
      <ProtocolSection />
      <Membership />
      <Footer />
    </>
  );
}

export default App;