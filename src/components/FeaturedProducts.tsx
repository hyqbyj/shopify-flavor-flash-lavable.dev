
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: '经典珍珠奶茶',
      price: '¥16',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      category: '奶茶'
    },
    {
      id: 2,
      name: '芝士草莓奶盖',
      price: '¥18',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      category: '奶茶'
    },
    {
      id: 3,
      name: '香辣鸡翅',
      price: '¥22',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
      category: '小吃'
    },
    {
      id: 4,
      name: '台式盐酥鸡',
      price: '¥26',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
      category: '小吃'
    },
    {
      id: 5,
      name: '招牌脏脏茶',
      price: '¥20',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      category: '奶茶'
    },
    {
      id: 6,
      name: '手工炸串拼盘',
      price: '¥32',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
      category: '小吃'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">热门推荐</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            我们最受欢迎的产品，每一款都值得您亲自品尝
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
