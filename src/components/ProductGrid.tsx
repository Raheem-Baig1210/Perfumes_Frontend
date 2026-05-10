import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Perfume {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
}

const ProductGrid: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const perfumes: Perfume[] = [
    { id: 1, name: "Royal Oud", type: "Pure Essence", price: 240, image: "https://images.unsplash.com/photo-1547671776-52846053e883?q=80&w=1000&auto=format" },
    { id: 2, name: "Desert Rose", type: "Eau de Parfum", price: 180, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format" },
    { id: 3, name: "Midnight Musk", type: "Intensity", price: 210, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format" },
    { id: 4, name: "Golden Amber", type: "Signature", price: 195, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format" },
    { id: 5, name: "Sandalwood Silk", type: "Classic", price: 160, image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1000&auto=format" },
    { id: 6, name: "Oud Al-Fayed", type: "Vintage", price: 320, image: "https://images.unsplash.com/photo-1585232356877-a3c20ef6fedd?q=80&w=1000&auto=format" },
    { id: 7, name: "Floral Nomad", type: "Daylight", price: 145, image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format" },
    { id: 8, name: "Smoky Leather", type: "Evening", price: 275, image: "https://images.unsplash.com/photo-1557170334-a7c3a4e2ef38?q=80&w=1000&auto=format" },
  ];

  return (
    <section className="bg-[#faf9f6] py-12 px-4 sm:py-24 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Header Section - Stacked on mobile, row on desktop */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-stone-200 pb-8 md:flex-row md:items-end">
          <div className="max-w-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 sm:text-xs">
              Curated Collection
            </span>
            <h2 className="mt-2 font-serif text-3xl text-[#2a2622] sm:text-4xl md:text-5xl">
              Signature Scents
            </h2>
          </div>
          
          <button 
            onClick={() => navigate('/list')}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2a2622] sm:text-sm"
          >
            View Full Catalog 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid 
            - 1 Column: Mobile (Default)
            - 2 Columns: Tablet (sm:)
            - 3 Columns: Small Laptops (md:)
            - 4 Columns: Desktop (lg:)
        */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {perfumes.map((perfume) => (
            <motion.div 
              key={perfume.id}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200">
                <img 
                  src={perfume.image} 
                  alt={perfume.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Add to Cart Button 
                    - Fixed position on small screens so it's clickable
                    - Hover effect only on desktop (lg:opacity-0)
                */}
                <button 
                  onClick={() => addToCart(perfume)}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2a2622] shadow-xl transition-all active:scale-90 sm:h-12 sm:w-12 lg:translate-y-12 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4 sm:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2a2622] sm:text-sm">
                    {perfume.name}
                  </h3>
                  <p className="mt-1 text-[10px] italic text-stone-500 sm:text-xs">
                    {perfume.type}
                  </p>
                </div>
                <p className="text-sm font-semibold text-stone-900">
                  ${perfume.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;