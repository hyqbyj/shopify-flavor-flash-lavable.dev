
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="section-padding bg-cream-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About FlavourFlash</h1>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Our journey from traditional recipes to modern flavors
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg opacity-80 mb-6">
                  Founded in 2018, FlavourFlash began as a small stall in a local market. Our founders, passionate about authentic Asian flavors, wanted to create a space where traditional recipes could meet modern tastes.
                </p>
                <p className="text-lg opacity-80 mb-6">
                  What started as a humble beginning has now grown into a beloved brand with multiple locations, but our commitment to quality and authenticity remains unchanged.
                </p>
                <p className="text-lg opacity-80">
                  Every recipe is crafted with care, using traditional techniques and premium ingredients to ensure an exceptional culinary experience every time.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-200 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cream-300 rounded-full -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                  alt="Our story" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cream-300 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-200 rounded-full -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=2070" 
                  alt="Quality ingredients" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl font-bold mb-6">Our Philosophy</h2>
                <p className="text-lg opacity-80 mb-6">
                  At FlavourFlash, we believe that great food should be made with integrity. That's why we source only the finest ingredients, from premium tea leaves to farm-fresh produce.
                </p>
                <p className="text-lg opacity-80 mb-6">
                  We're committed to sustainable practices and supporting local suppliers whenever possible. Our packaging is eco-friendly, and we're constantly looking for ways to reduce our environmental footprint.
                </p>
                <p className="text-lg opacity-80">
                  Above all, we value the connections that food creates. Whether you're grabbing a quick snack or settling in with friends over milk tea, we hope our creations bring joy to your day.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold mb-8">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1061" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Emily Chen</h3>
                  <p className="opacity-70">Founder & Head Chef</p>
                </div>
                <div className="text-center">
                  <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?auto=format&fit=crop&q=80&w=1480" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold">David Wang</h3>
                  <p className="opacity-70">Co-Founder & Tea Master</p>
                </div>
                <div className="text-center">
                  <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1587" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Sarah Liu</h3>
                  <p className="opacity-70">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
