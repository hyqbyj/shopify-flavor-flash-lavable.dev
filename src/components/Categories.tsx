
import React from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Milk Tea Series',
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      description: 'Select premium tea leaves paired with fresh milk for a smooth texture and rich tea aroma',
      slug: 'milk-tea'
    },
    {
      id: 2,
      name: 'Specialty Snacks',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
      description: 'Authentic traditional flavors made with innovative techniques for a unique culinary experience',
      slug: 'snacks'
    }
  ];

  return (
    <section id="menu" className="section-padding bg-cream-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Food Categories</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Each product is carefully developed to bring you the most authentic taste experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-96 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                <Link 
                  to={`/category/${category.slug}`}
                  className="inline-block px-6 py-2 bg-white text-foreground rounded-full font-medium hover:bg-cream-100 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
