import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen w-full overflow-hidden bg-[#c9c1b8] text-[#2a2622]"
    >
      {/* Background Image/Overlay (The Mountains/Landscape effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://plus.unsplash.com/premium_photo-1670445045282-36648e89af6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D" 
          className="h-full w-full object-cover opacity-60 mix-blend-multiply"
          alt="Luxury landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#c9c1b8]/80" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] grid-cols-12 px-8 pt-32 pb-12">
        
        {/* LEFT SECTION: Big Typography */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.9] tracking-tighter text-[#2a2622]">
              THE <br /> PERFECT <br /> SCENT <span className="text-2xl align-top">®</span>
            </h1>
            
            <p className="mt-8 text-xl font-light tracking-wide italic">
              / We craft custom fragrances /
            </p>

            <button className="mt-10 group flex h-16 w-40 items-center justify-center rounded-full bg-[#2a2622] text-stone-100 transition-all hover:scale-105">
              <span className="font-semibold uppercase tracking-widest text-xs">Start</span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT SECTION: The Floating Perfume Card */}
        <div className="relative col-span-12 mt-12 lg:col-span-6 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative ml-auto w-full max-w-lg rounded-[3rem] bg-white/40 p-2 backdrop-blur-xl shadow-2xl"
          >
            {/* Inner Floating Info */}
            <div className="absolute left-10 top-10 z-20 space-y-2">
              <div className="flex gap-2">
                <span className="rounded-full border border-stone-400 px-3 py-1 text-[10px] uppercase">Oud</span>
                <span className="rounded-full border border-stone-400 px-3 py-1 text-[10px] uppercase">Design</span>
                <span className="rounded-full bg-stone-800 px-3 py-1 text-[10px] uppercase text-white">3D</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight">Unique Scent & <br />Ergonomics</h2>
              <p className="text-sm text-stone-600 font-light italic">From blooms to bottles.</p>
            </div>

            {/* Video/Play Button Mockup */}
            <div className="absolute right-8 top-1/3 z-20 flex h-32 w-24 flex-col items-center justify-center rounded-2xl bg-stone-200/50 backdrop-blur-md">
               <span className="text-[10px] font-bold uppercase tracking-tighter mb-2">Roomtour</span>
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white">
                  <Play fill="currentColor" size={12} />
               </div>
            </div>

            {/* THE PERFUME BOTTLE IMAGE */}
            <div className="overflow-hidden rounded-[2.8rem]">
              <img 
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop" 
                alt="Luxury Perfume Bottle"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Stats and Info Bar */}
        <div className="col-span-12 mt-auto grid grid-cols-1 gap-8 pt-20 lg:grid-cols-3">
          
          {/* Material Info */}
          <div className="flex items-center gap-6 rounded-tr-[3rem] bg-[#a89d91] p-8 text-[#2a2622]">
             <div className="h-20 w-20 flex-shrink-0 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl">🏺</span>
             </div>
             <div>
                <h3 className="text-xl font-bold">We use best materials!</h3>
                <p className="text-sm opacity-70">Working with verified organic suppliers.</p>
             </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col justify-center px-8">
             <div className="flex -space-x-4">
                <img className="h-10 w-10 rounded-full border-2 border-[#c9c1b8]" src="https://i.pravatar.cc/100?u=1" alt="" />
                <img className="h-10 w-10 rounded-full border-2 border-[#c9c1b8]" src="https://i.pravatar.cc/100?u=2" alt="" />
             </div>
             <div className="mt-2">
                <span className="text-3xl font-serif italic font-bold">12m+</span>
                <p className="text-xs uppercase tracking-widest opacity-60">Customers</p>
             </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center border-l border-stone-400 px-8">
             <h3 className="text-xl font-medium leading-tight">WE CAN COMBINE <br />NATURE & HOME COMFORT</h3>
             <button className="mt-4 flex items-center gap-2 text-xs font-bold uppercase underline decoration-stone-500 underline-offset-4">
               Learn More <ArrowUpRight size={14} />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;