import React from 'react';
// import { motion } from 'framer-motion';
// import { Instagram, Twitter, Facebook, ArrowUpRight, Mail } from 'lucide-react';
// If Facebook still fails, use:
// import { Instagram, Twitter, Facebook as FacebookIcon, ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['All Perfumes', 'Mabkhara', 'Limited Edition', 'Gift Sets'],
    Company: ['Our Story', 'Atelier', 'Sustainability', 'Careers'],
    Support: ['Shipping', 'Returns', 'FAQ', 'Contact'],
  };

  return (
    <footer className="w-full bg-[#2a2622] pt-24 pb-12 text-[#c9c1b8]">
      <div className="mx-auto max-w-[1440px] px-8">
        
        {/* TOP SECTION: Newsletter & Branding */}
        <div className="grid grid-cols-1 gap-12 border-b border-stone-700 pb-20 lg:grid-cols-12">
          
          {/* Brand Identity */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-serif text-5xl tracking-[0.2em] text-stone-100">L'AURA</h2>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed opacity-70">
              Crafting sensory experiences that bridge the gap between ancient 
              tradition and modern luxury. Your signature scent, perfected.
            </p>
            
            {/* <div className="mt-8 flex gap-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-white transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Newsletter Form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-[2rem] bg-stone-100/5 p-8 backdrop-blur-sm border border-stone-100/10">
              <h3 className="text-xl font-medium text-stone-100">Join the Atelier</h3>
              <p className="mt-2 text-sm opacity-60">Subscribe to receive first access to new collections.</p>
              
              <form className="mt-6 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-grow">
                  {/* <Mail className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} /> */}
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full rounded-full bg-stone-100/10 py-4 pl-12 pr-6 text-sm text-white outline-none focus:ring-1 focus:ring-stone-400"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 rounded-full bg-[#c9c1b8] px-8 py-4 text-xs font-bold uppercase text-[#2a2622] transition-transform hover:scale-105 active:scale-95">
                  Subscribe 
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Links */}
        <div className="grid grid-cols-2 gap-12 py-20 md:grid-cols-4 lg:grid-cols-6">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-stone-100">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-sm font-light transition-colors hover:text-white opacity-60 hover:opacity-100">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-2">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-stone-100">Find Us</h4>
            <address className="not-italic text-sm font-light leading-loose opacity-60">
              Avenue des Champs-Élysées, 75008<br />
              Paris, France<br />
              <span className="mt-4 block text-stone-100">atelier@laura-scents.com</span>
            </address>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-stone-700 pt-12 text-[10px] uppercase tracking-[0.2em] opacity-40 md:flex-row">
          <p>© {currentYear} L'AURA Perfumery. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;