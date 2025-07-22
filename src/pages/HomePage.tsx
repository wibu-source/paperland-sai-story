import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export const HomePage = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      text: "The quality of paper from Paperland is exceptional. My watercolor paintings have never looked better!",
      rating: 5,
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    },
    {
      id: 2,
      name: "Michael Nguyen",
      text: "Beautiful handmade cards for our wedding invitations. Every guest commented on their elegance.",
      rating: 5,
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    },
    {
      id: 3,
      name: "Emma Wilson",
      text: "Fast shipping and excellent customer service. The calligraphy tools are professional grade.",
      rating: 5,
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Premium Paper Products
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Where Paper
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-light">
                Tells a Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of premium art papers, handcrafted cards, 
              and traditional calligraphy tools that inspire creativity and preserve memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button variant="hero" size="hero">
                  Discover Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="hero" className="border-white/30 text-white hover:bg-white/10">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked favorites that showcase the finest in paper craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category} to={`/products?category=${encodeURIComponent(category)}`}>
                <Card className="group overflow-hidden hover:shadow-large transition-smooth cursor-pointer h-80">
                  <div className="relative h-full">
                    <img
                      src="/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
                      alt={category}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-smooth"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{category}</h3>
                      <p className="text-white/90 text-sm">
                        {category === 'Art Paper' && 'Premium papers for artists and creators'}
                        {category === 'Handmade Cards' && 'Elegant cards for special occasions'}
                        {category === 'Calligraphy Tools' && 'Traditional tools for beautiful writing'}
                      </p>
                      <Button variant="outline" size="sm" className="mt-4 border-white/30 text-white hover:bg-white/10">
                        Explore {category}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories from artists, creators, and paper enthusiasts who trust Paperland
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-3 pt-4 border-t border-border">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated with Paperland
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Get the latest news, new product launches, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};