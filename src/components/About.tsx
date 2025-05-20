
import React from 'react';
import { Button } from "@/components/ui/button";

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
              alt="店内环境" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">我们的故事</h2>
            <p className="text-lg opacity-80 mb-6">
              我们创立于2018年，致力于将传统美食与现代口味完美融合。每一款产品都凝聚了我们对美食的热爱与执着。
            </p>
            <p className="text-lg opacity-80 mb-6">
              从选料到制作，我们坚持最高标准，只为带给顾客最纯正的味蕾体验。我们的茶叶来自高山茶园，牛奶选用进口优质奶源，食材新鲜健康。
            </p>
            <p className="text-lg opacity-80 mb-8">
              无论您是奶茶爱好者还是美食追求者，在这里都能找到属于您的味道。欢迎来到我们的美食世界！
            </p>
            <Button size="lg">了解更多</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
