
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 section-padding">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">FlavourFlash</h3>
            <p className="opacity-80 mb-6">
              传统美食，现代风味。带您领略地道风味与创新口感的完美结合。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">营业时间</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 opacity-70" />
                <span>周一至周五：10:00 - 21:00</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 opacity-70" />
                <span>周六至周日：09:00 - 22:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 opacity-70 mt-1" />
                <span>上海市黄浦区南京东路123号时尚广场4楼401室</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 opacity-70" />
                <span>400-123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center">
          <p className="opacity-70">© 2025 FlavourFlash. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
