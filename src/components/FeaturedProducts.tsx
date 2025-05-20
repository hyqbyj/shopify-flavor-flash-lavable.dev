
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Pearl Milk Tea',
      price: '$4.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      category: 'Milk Tea',
      slug: 'classic-pearl-milk-tea'
    },
    {
      id: 2,
      name: 'Strawberry Cheese Foam',
      price: '$5.49',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1546549095-8d9cb7bcad2b?auto=format&fit=crop&q=80&w=2069',
      category: 'Milk Tea',
      slug: 'strawberry-cheese-foam'
    },
    {
      id: 3,
      name: 'Spicy Chicken Wings',
      price: '$6.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1608039755401-52ee9cfd2984?auto=format&fit=crop&q=80&w=2070',
      category: 'Snacks',
      slug: 'spicy-chicken-wings'
    },
    {
      id: 4,
      name: 'Taiwanese Salt & Pepper Chicken',
      price: '$7.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=2070',
      category: 'Snacks',
      slug: 'taiwanese-salt-pepper-chicken'
    },
    {
      id: 5,
      name: 'Signature Dirty Milk Tea',
      price: '$5.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1588929473475-d16de087c70e?auto=format&fit=crop&q=80&w=2069',
      category: 'Milk Tea',
      slug: 'signature-dirty-milk-tea'
    },
    {
      id: 6,
      name: 'Assorted Fried Snack Platter',
      price: '$9.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1673786132551-e5b53701220e?auto=format&fit=crop&q=80&w=2070',
      category: 'Snacks',
      slug: 'assorted-fried-snack-platter'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Popular Items</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Our most loved products, each one worth trying
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all border-none">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold">{product.name}</h3>
                  <span className="text-lg font-bold text-brand-700">{product.price}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "" : "opacity-40"}
                      />
                    ))}
                  </div>
                  <span className="text-sm opacity-70">{product.rating}</span>
                </div>
                <div className="mt-4">
                  <Link 
                    to={`/product/${product.slug}`}
                    className="text-brand-600 font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
