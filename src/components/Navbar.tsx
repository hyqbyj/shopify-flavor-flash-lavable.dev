
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 px-4 md:px-8 lg:px-16 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-brand-700">FlavourFlash</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-brand-600 transition-colors">Home</Link>
          <Link to="/menu" className="font-medium hover:text-brand-600 transition-colors">Menu</Link>
          <Link to="/about" className="font-medium hover:text-brand-600 transition-colors">About Us</Link>
          <Link to="/contact" className="font-medium hover:text-brand-600 transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild>
            <Link to="/order">Order Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/menu" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link to="/about" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" size="icon" asChild>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link to="/order" onClick={() => setIsMenuOpen(false)}>Order Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
