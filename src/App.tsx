import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart'; // Ensure this is imported
import { CartProvider } from './context/CartContext'; // Ensure this is imported

import './App.css';

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductGrid />
    </div>
  );
}

function App() {
  return (
    /* 1. The Provider must be at the VERY top */
    <CartProvider> 
      <Router>
        {/* 2. The Sidebar Cart can live here, outside the Routes */}
        <Cart /> 
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Add your /list route here when you create it */}
          <Route path="/list" element={<div>Product List Page coming soon...</div>} />
        </Routes>
        
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;