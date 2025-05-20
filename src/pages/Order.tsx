
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding bg-cream-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Order Now</h1>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="font-serif text-2xl font-bold mb-6">Choose Your Order Method</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-cream-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="bg-brand-100 text-brand-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path></svg>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Delivery</h3>
                    <p className="opacity-70 mb-4">Get your favorite items delivered right to your door.</p>
                    <Button className="w-full" asChild>
                      <Link to="/menu">Order Delivery</Link>
                    </Button>
                  </div>
                  
                  <div className="bg-cream-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="bg-brand-100 text-brand-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10h10"></path><path d="M5 6h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path></svg>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Pickup</h3>
                    <p className="opacity-70 mb-4">Place your order online and pick it up at our store.</p>
                    <Button className="w-full" asChild>
                      <Link to="/menu">Order Pickup</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="font-serif text-2xl font-bold mb-6">Promotions</h2>
                
                <div className="space-y-6">
                  <div className="border border-dashed border-brand-300 rounded-lg p-4 bg-brand-50">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg mb-1">New Customer Special</h3>
                        <p className="opacity-70">Get 15% off your first order with code <span className="font-medium">WELCOME15</span></p>
                      </div>
                      <Button variant="outline" size="sm">Copy</Button>
                    </div>
                  </div>
                  
                  <div className="border border-dashed border-brand-300 rounded-lg p-4 bg-brand-50">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg mb-1">Buy One Get One</h3>
                        <p className="opacity-70">Buy any milk tea and get a second one 50% off with code <span className="font-medium">BOGO50</span></p>
                      </div>
                      <Button variant="outline" size="sm">Copy</Button>
                    </div>
                  </div>
                  
                  <div className="border border-dashed border-brand-300 rounded-lg p-4 bg-brand-50">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg mb-1">Family Package</h3>
                        <p className="opacity-70">Order any 4 items and get free delivery with code <span className="font-medium">FAMILY4</span></p>
                      </div>
                      <Button variant="outline" size="sm">Copy</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Order;
