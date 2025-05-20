
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-200 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cream-300 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
              alt="Store Interior" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg opacity-80 mb-6">
              Founded in 2018, we are dedicated to perfectly blending traditional foods with modern flavors. Each product embodies our passion and commitment to culinary excellence.
            </p>
            <p className="text-lg opacity-80 mb-6">
              From ingredient selection to preparation, we maintain the highest standards to deliver the most authentic taste experience. Our teas come from premium mountain tea gardens, and we use only imported high-quality milk sources and fresh ingredients.
            </p>
            <p className="text-lg opacity-80 mb-8">
              Whether you're a milk tea enthusiast or a food explorer, you'll find your perfect flavor here. Welcome to our culinary world!
            </p>
            <Button size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
