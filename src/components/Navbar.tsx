
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 px-4 md:px-8 lg:px-16 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-serif font-bold text-brand-700">FlavourFlash</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:text-brand-600 transition-colors">首页</a>
          <a href="#menu" className="font-medium hover:text-brand-600 transition-colors">菜单</a>
          <a href="#about" className="font-medium hover:text-brand-600 transition-colors">关于我们</a>
          <a href="#contact" className="font-medium hover:text-brand-600 transition-colors">联系方式</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button>下单</Button>
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
            <a href="#" className="font-medium p-2 hover:bg-muted rounded-md">首页</a>
            <a href="#menu" className="font-medium p-2 hover:bg-muted rounded-md">菜单</a>
            <a href="#about" className="font-medium p-2 hover:bg-muted rounded-md">关于我们</a>
            <a href="#contact" className="font-medium p-2 hover:bg-muted rounded-md">联系方式</a>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button className="flex-1">下单</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
