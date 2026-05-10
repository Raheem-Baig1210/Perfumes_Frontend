import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'New Arrivals', path: '/new' },
    { name: 'The Atelier', path: '/story' },
  ];

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ease-in-out px-6 py-4 ${
        isScrolled 
          ? 'bg-white/30 backdrop-blur-md border-b border-white/20 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left: Navigation Links (Desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium tracking-widest uppercase text-stone-800 hover:text-stone-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link 
          to="/" 
          className="text-2xl font-serif tracking-[0.2em] text-stone-900 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          L'AURA
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 text-stone-800">
          <button className="hover:scale-110 transition-transform">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:scale-110 transition-transform hidden sm:block">
            <User size={20} strokeWidth={1.5} />
          </button>
          
          {/* Cart Icon with Red Badge */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:scale-110 transition-transform"
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-xl px-6 py-10 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-light tracking-widest uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="w-full border-stone-200" />
              <Link to="/account" className="text-sm uppercase tracking-widest">My Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;