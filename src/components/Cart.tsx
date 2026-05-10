import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, totalPrice, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
          />
          
          {/* Sidebar - Changed to Right Side */}
          <motion.div
            initial={{ x: '100%' }} // Slides from right
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[120] h-full w-full max-w-md bg-[#faf9f6] shadow-2xl"
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between border-b border-stone-200 pb-6">
                <h2 className="font-serif text-3xl text-[#2a2622]">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto py-8">
                {cartItems.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-stone-400">
                    <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
                    <p className="italic text-sm">Your scent collection is empty.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b border-stone-100 pb-6">
                        <img src={item.image} className="h-24 w-20 rounded-lg object-cover" alt={item.name} />
                        <div className="flex flex-grow flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-sm font-bold uppercase tracking-widest">{item.name}</h3>
                              <p className="text-[10px] text-stone-400 mt-1">${item.price} each</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-stone-300 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-stone-200 rounded-full px-2 py-1">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:text-stone-500 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-4 text-sm font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:text-stone-500 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            {/* Individual Item Total Price */}
                            <p className="font-medium text-[#2a2622]">${item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-stone-200 pt-6">
                  <div className="mb-6 flex justify-between text-xl font-serif">
                    <span>Total Amount</span>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                  <button className="w-full rounded-full bg-[#2a2622] py-5 text-xs font-bold uppercase tracking-[0.2em] text-stone-100 transition-all hover:bg-stone-800 active:scale-95">
                    Place Order
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;