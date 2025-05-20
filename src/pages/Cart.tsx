
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Minus, X } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: 'Classic Pearl Milk Tea',
      price: 4.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      options: 'Regular ice, 75% sugar'
    },
    {
      id: 3,
      name: 'Spicy Chicken Wings',
      price: 6.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1608039755401-52ee9cfd2984?auto=format&fit=crop&q=80&w=2070',
      options: 'Medium spice'
    }
  ]);

  const incrementQuantity = (id: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding">
        <div className="container mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-serif text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-lg opacity-70 mb-8">Add some delicious items to get started!</p>
              <Button asChild>
                <Link to="/menu">Browse Menu</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="font-serif text-xl font-bold mb-6">Items in Your Cart</h2>
                    <div className="divide-y">
                      {cartItems.map(item => (
                        <div key={item.id} className="py-6 flex flex-col sm:flex-row items-start gap-6">
                          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium text-lg">{item.name}</h3>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-brand-600"
                              >
                                <X size={20} />
                              </button>
                            </div>
                            <p className="text-sm opacity-70 mb-2">{item.options}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center border rounded-md">
                                <button 
                                  onClick={() => decrementQuantity(item.id)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="px-3 py-1 font-medium">{item.quantity}</span>
                                <button 
                                  onClick={() => incrementQuantity(item.id)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                  <div className="p-6">
                    <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="opacity-70">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-70">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-4 font-medium flex justify-between text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                    <div className="mt-4 text-center">
                      <Link to="/menu" className="text-brand-600 hover:underline">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
