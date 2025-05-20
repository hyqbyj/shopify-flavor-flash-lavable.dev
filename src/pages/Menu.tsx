
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Menu = () => {
  const categories = [
    {
      id: 1,
      name: 'Milk Tea Series',
      products: [
        {
          id: 1,
          name: 'Classic Pearl Milk Tea',
          price: '$4.99',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
          description: 'Our signature milk tea with chewy tapioca pearls',
          slug: 'classic-pearl-milk-tea'
        },
        {
          id: 2,
          name: 'Strawberry Cheese Foam',
          price: '$5.49',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=2069',
          description: 'Fresh strawberry milk tea topped with creamy cheese foam',
          slug: 'strawberry-cheese-foam'
        },
        {
          id: 5,
          name: 'Signature Dirty Milk Tea',
          price: '$5.99',
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=2069',
          description: 'Premium black tea with a rich layer of cream top',
          slug: 'signature-dirty-milk-tea'
        },
        {
          id: 7,
          name: 'Matcha Latte',
          price: '$5.99',
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1545441270-776d3b3a0a49?auto=format&fit=crop&q=80&w=2069',
          description: 'Ceremonial grade matcha with steamed milk',
          slug: 'matcha-latte'
        }
      ]
    },
    {
      id: 2,
      name: 'Specialty Snacks',
      products: [
        {
          id: 3,
          name: 'Spicy Chicken Wings',
          price: '$6.99',
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1608039755401-52ee9cfd2984?auto=format&fit=crop&q=80&w=2070',
          description: 'Crispy wings tossed in our signature spicy sauce',
          slug: 'spicy-chicken-wings'
        },
        {
          id: 4,
          name: 'Taiwanese Salt & Pepper Chicken',
          price: '$7.99',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=2070',
          description: 'Crispy boneless chicken with fragrant salt and pepper seasoning',
          slug: 'taiwanese-salt-pepper-chicken'
        },
        {
          id: 6,
          name: 'Assorted Fried Snack Platter',
          price: '$9.99',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1619221741571-7abc9b71169a?auto=format&fit=crop&q=80&w=2070',
          description: 'A mix of our popular fried snacks perfect for sharing',
          slug: 'assorted-fried-snack-platter'
        },
        {
          id: 8,
          name: 'Popcorn Chicken',
          price: '$6.99',
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2070',
          description: 'Bite-sized chicken pieces fried to perfection',
          slug: 'popcorn-chicken'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="section-padding bg-cream-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Discover our selection of handcrafted beverages and delicious snacks
              </p>
            </div>

            {categories.map((category) => (
              <div key={category.id} className="mb-16">
                <h2 className="font-serif text-3xl font-bold mb-8 pb-4 border-b">{category.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {category.products.map((product) => (
                    <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all border-none">
                      <div className="relative h-64 overflow-hidden">
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
                        <p className="text-sm opacity-70 mb-2">{product.description}</p>
                        <div className="flex items-center mb-4">
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
                        <Button size="sm" asChild>
                          <Link to={`/product/${product.slug}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
