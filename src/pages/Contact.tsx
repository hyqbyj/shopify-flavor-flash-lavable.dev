
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="section-padding bg-cream-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </div>
              
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Address</h3>
                        <p className="opacity-70">Suite 401, Fashion Plaza, 123 East Nanjing Road, Huangpu District, Shanghai</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Phone</h3>
                        <p className="opacity-70">400-123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Email</h3>
                        <p className="opacity-70">info@flavourflash.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Opening Hours</h3>
                        <p className="opacity-70">Monday - Friday: 10:00 AM - 9:00 PM</p>
                        <p className="opacity-70">Saturday - Sunday: 9:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.985034662!2d121.48048661513456!3d31.235648981468602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270fe0b2bb3e3%3A0x24a826d7df19b5a2!2sNanjing%20Rd%20Pedestrian%20St%2C%20Huangpu%20District%2C%20Shanghai%2C%20China!5e0!3m2!1sen!2sus!4v1644226037001!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Google Maps"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
