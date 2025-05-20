
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-pattern min-h-[85vh] flex items-center section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              传统美食 <br /><span className="text-brand-600">现代风味</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8">
              探索我们精心制作的奶茶和特色小吃，带您领略地道风味与创新口感的完美结合。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                浏览菜单
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                了解更多
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cream-300 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-200 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="精选奶茶和小吃" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
