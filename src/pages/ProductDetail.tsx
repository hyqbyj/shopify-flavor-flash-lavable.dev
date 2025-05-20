
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Star, Plus, Minus } from 'lucide-react';

// This is a static data store for the demo
const allProducts = [
  {
    id: 1,
    name: 'Classic Pearl Milk Tea',
    price: '$4.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=2069',
    description: 'Our signature milk tea with chewy tapioca pearls. Made with premium black tea and fresh milk.',
    longDescription: 'The Classic Pearl Milk Tea is our bestseller for a reason. We brew premium Assam black tea to perfection, then blend it with creamy fresh milk and add hand-made tapioca pearls that are cooked to achieve the perfect chewy texture. Sweetened to your preference, this timeless favorite delivers a balanced flavor profile that has made it a staple in milk tea culture worldwide.',
    ingredients: ['Premium Assam black tea', 'Fresh milk', 'Tapioca pearls', 'Brown sugar syrup'],
    category: 'Milk Tea',
    options: ['Ice level: Regular, Less, No ice', 'Sugar level: 100%, 75%, 50%, 25%, 0%'],
    slug: 'classic-pearl-milk-tea'
  },
  {
    id: 2,
    name: 'Strawberry Cheese Foam',
    price: '$5.49',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546549095-8d9cb7bcad2b?auto=format&fit=crop&q=80&w=2069',
    description: 'Fresh strawberry milk tea topped with creamy cheese foam.',
    longDescription: 'Our Strawberry Cheese Foam combines the sweetness of fresh strawberries with our signature milk tea, topped with a layer of our house-made cheese foam. The rich, slightly salty foam creates a beautiful contrast with the fruity sweetness below, delivering a multi-dimensional taste experience with every sip. A modern twist on traditional milk tea that has quickly become a customer favorite.',
    ingredients: ['Fresh strawberries', 'Premium tea', 'Fresh milk', 'Cream cheese', 'Whipping cream', 'Sea salt'],
    category: 'Milk Tea',
    options: ['Ice level: Regular, Less, No ice', 'Sugar level: 100%, 75%, 50%, 25%, 0%'],
    slug: 'strawberry-cheese-foam'
  },
  {
    id: 3,
    name: 'Spicy Chicken Wings',
    price: '$6.99',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1608039755401-52ee9cfd2984?auto=format&fit=crop&q=80&w=2070',
    description: 'Crispy wings tossed in our signature spicy sauce.',
    longDescription: "Our Spicy Chicken Wings start with premium chicken wings that are marinated overnight in a blend of secret spices. They're twice-fried to achieve the perfect crispy exterior while maintaining juicy meat inside. Finally, they're tossed in our house-made spicy sauce that combines heat with a touch of sweetness for an addictive flavor that will keep you coming back for more. Served with a side of cooling ranch dip.",
    ingredients: ['Premium chicken wings', 'Signature spice blend', 'House-made spicy sauce', 'Garlic', 'Soy sauce', 'Brown sugar'],
    category: 'Snacks',
    options: ['Spice level: Mild, Medium, Hot, Extra Hot'],
    slug: 'spicy-chicken-wings'
  },
  {
    id: 5,
    name: 'Signature Dirty Milk Tea',
    price: '$5.99',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1588929473475-d16de087c70e?auto=format&fit=crop&q=80&w=2069',
    description: 'Premium black tea with a rich layer of cream top.',
    longDescription: 'Our Signature Dirty Milk Tea features a carefully brewed blend of black teas topped with a decadent layer of sweet cream that creates beautiful "dirty" streaks as it mixes with the tea below. The contrast between the robust tea and the silky cream creates a luxurious drinking experience with complex flavor notes. Each sip offers a different ratio of cream to tea, making it a unique experience down to the last drop.',
    ingredients: ['Premium black tea blend', 'Heavy cream', 'Vanilla', 'Brown sugar'],
    category: 'Milk Tea',
    options: ['Ice level: Regular, Less, No ice', 'Sugar level: 100%, 75%, 50%, 25%, 0%'],
    slug: 'signature-dirty-milk-tea'
  },
  {
    id: 4,
    name: 'Taiwanese Salt & Pepper Chicken',
    price: '$7.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=2070',
    description: 'Crispy boneless chicken with fragrant salt and pepper seasoning.',
    longDescription: "Our Taiwanese Salt & Pepper Chicken is a street food classic elevated to perfection. Tender chicken thigh pieces are marinated, coated in our special flour mix, and fried until golden and crispy. They're then tossed with a fragrant mixture of toasted salt, white pepper, garlic, and basil. The result is an incredibly flavorful snack with the perfect balance of savory, aromatic notes and a satisfying crunch in every bite.",
    ingredients: ['Boneless chicken thigh', 'Sweet potato starch', 'White pepper', 'Sea salt', 'Garlic', 'Thai basil'],
    category: 'Snacks',
    options: ['Spice level: Mild, Medium, Hot'],
    slug: 'taiwanese-salt-pepper-chicken'
  },
  {
    id: 6,
    name: 'Assorted Fried Snack Platter',
    price: '$9.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1673786132551-e5b53701220e?auto=format&fit=crop&q=80&w=2070',
    description: 'A mix of our popular fried snacks perfect for sharing.',
    longDescription: "Can't decide what to order? Our Assorted Fried Snack Platter brings together our most popular fried snacks in one generous serving. Featuring our Taiwanese Salt & Pepper Chicken, Crispy Popcorn Chicken, Sweet Potato Fries, and Golden Fried Squid, it's the perfect option for sharing or for when you want to sample multiple flavors. Each component is freshly fried and served with our signature dipping sauces.",
    ingredients: ['Selection of our premium fried snacks', 'Served with assorted dipping sauces'],
    category: 'Snacks',
    options: ['Spice level: Mild, Medium, Hot'],
    slug: 'assorted-fried-snack-platter'
  }
];

const ProductDetail = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  
  // Find the product based on the slug
  const product = allProducts.find(p => p.slug === slug);
  
  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 section-padding">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-lg mb-8">We couldn't find the product you're looking for.</p>
            <Button asChild>
              <Link to="/menu">Return to Menu</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Calculate similar products (same category but different product)
  const similarProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="mb-6">
              <Link to="/menu" className="text-brand-600 hover:underline flex items-center">
                ← Back to Menu
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-cream-300 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-200 rounded-full -z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-square"
                />
              </div>
              
              <div>
                <div className="mb-2">
                  <span className="inline-block bg-cream-100 text-brand-700 rounded-full px-3 py-1 text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "" : "opacity-40"}
                        size={18}
                      />
                    ))}
                  </div>
                  <span className="text-sm opacity-70">{product.rating} rating</span>
                </div>
                <p className="text-2xl font-bold text-brand-700 mb-6">{product.price}</p>
                <p className="text-lg opacity-80 mb-8">{product.longDescription}</p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-2">Ingredients:</h3>
                  <ul className="list-disc pl-5 space-y-1 opacity-80">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-2">Options:</h3>
                  <ul className="list-disc pl-5 space-y-1 opacity-80">
                    {product.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={decrementQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <Button size="lg" className="px-8">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {similarProducts.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {similarProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-bold mb-2">{product.name}</h3>
                        <p className="opacity-70 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-brand-700">{product.price}</span>
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/product/${product.slug}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
