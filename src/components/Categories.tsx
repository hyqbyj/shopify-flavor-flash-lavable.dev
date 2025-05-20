
import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: '奶茶系列',
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
      description: '甄选上等茶叶，搭配新鲜牛奶，呈现丝滑口感与浓郁茶香'
    },
    {
      id: 2,
      name: '特色小吃',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
      description: '地道传统风味，创新工艺制作，带来独特美食体验'
    }
  ];

  return (
    <section id="menu" className="section-padding bg-cream-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">我们的美食分类</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            每一款产品都经过精心研制，只为带给您最纯正的味蕾体验
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
                <a 
                  href="#" 
                  className="inline-block px-6 py-2 bg-white text-foreground rounded-full font-medium hover:bg-cream-100 transition-colors"
                >
                  查看详情
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
