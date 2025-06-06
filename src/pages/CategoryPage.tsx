
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

// Static data for demo
const categories = {
  'milk-tea': {
    name: 'Milk Tea Series',
    description: 'Select premium tea leaves paired with fresh milk for a smooth texture and rich tea aroma',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
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
        image: 'https://images.unsplash.com/photo-1546549095-8d9cb7bcad2b?auto=format&fit=crop&q=80&w=2069',
        description: 'Fresh strawberry milk tea topped with creamy cheese foam',
        slug: 'strawberry-cheese-foam'
      },
      {
        id: 5,
        name: 'Signature Dirty Milk Tea',
        price: '$5.99',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1588929473475-d16de087c70e?auto=format&fit=crop&q=80&w=2069',
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
      },
      {
        id: 9,
        name: 'Brown Sugar Boba Milk',
        price: '$5.99',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1631308491927-97fc39934478?auto=format&fit=crop&q=80&w=2069',
        description: 'Fresh milk with brown sugar syrup and caramelized tapioca pearls',
        slug: 'brown-sugar-boba-milk'
      },
      {
        id: 10,
        name: 'Taro Milk Tea',
        price: '$5.49',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
        description: 'Creamy taro root blended with premium milk tea',
        slug: 'taro-milk-tea'
      }
    ]
  },
  'snacks': {
    name: 'Specialty Snacks',
    description: 'Authentic traditional flavors made with innovative techniques for a unique culinary experience',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
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
        image: 'https://images.unsplash.com/photo-1673786132551-e5b53701220e?auto=format&fit=crop&q=80&w=2070',
        description: 'A mix of our popular fried snacks perfect for sharing',
        slug: 'assorted-fried-snack-platter'
      },
      {
        id: 8,
        name: 'Popcorn Chicken',
        price: '$6.99',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1619221741571-7abc9b71169a?auto=format&fit=crop&q=80&w=2070',
        description: 'Bite-sized chicken pieces fried to perfection',
        slug: 'popcorn-chicken'
      },
      {
        id: 11,
        name: 'Sweet Potato Fries',
        price: '$4.99',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1635340301992-a5dc4d967ebb?auto=format&fit=crop&q=80&w=2070',
        description: 'Crispy sweet potato fries served with spicy mayo',
        slug: 'sweet-potato-fries'
      },
      {
        id: 12,
        name: 'BBQ Pork Bun',
        price: '$3.99',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=2069',
        description: 'Steamed bun filled with savory BBQ pork',
        slug: 'bbq-pork-bun'
      }
    ]
  }
};

const CategoryPage = () => {
  const { slug } = useParams();
  
  // If category doesn't exist or slug is undefined
  if (!slug || !categories[slug as keyof typeof categories]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 section-padding">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-lg mb-8">We couldn't find the category you're looking for.</p>
            <Button asChild>
              <Link to="/menu">Return to Menu</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const category = categories[slug as keyof typeof categories];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="section-padding bg-cream-50">
          <div className="container mx-auto">
            <div className="mb-6">
              <Link to="/menu" className="text-brand-600 hover:underline flex items-center">
                ← Back to Menu
              </Link>
            </div>
            
            <div className="mb-16">
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center z-20 p-8 md:p-12">
                  <div className="max-w-xl">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{category.name}</h1>
                    <p className="text-white/90 text-lg">{category.description}</p>
                  </div>
                </div>
              </div>
              
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
