import { Heart, Award, Leaf, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'Every product is created with love and dedication to the art of papermaking.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and traditional techniques for exceptional results.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable practices and recycled materials are at the heart of our production.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Supporting local artists and creators in Ho Chi Minh City and beyond.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Professional Artist",
      text: "The quality of paper from Paperland is exceptional. My watercolor paintings have never looked better!",
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    },
    {
      id: 2,
      name: "Michael Nguyen",
      role: "Wedding Planner",
      text: "Beautiful handmade cards for our clients' weddings. Every guest comments on their elegance.",
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Calligraphy Enthusiast",
      text: "The traditional tools are authentic and professional grade. Perfect for serious practitioners.",
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Art Teacher",
      text: "My students love working with Paperland products. The quality inspires creativity.",
      image: "/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Where tradition meets innovation in the heart of Ho Chi Minh City
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Where Paper Tells a Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018 in the vibrant heart of Ho Chi Minh City, Paperland Sai Gon began 
                  as a passion project by a group of local artisans who believed that paper could be 
                  more than just a medium—it could be a canvas for dreams, memories, and creativity.
                </p>
                <p>
                  Our journey started in a small workshop in District 1, where we experimented with 
                  traditional Vietnamese papermaking techniques combined with modern innovations. 
                  Today, we've grown into a trusted name among artists, calligraphers, and creators 
                  across Southeast Asia.
                </p>
                <p>
                  Every sheet of paper, every brush, and every card that leaves our workshop carries 
                  with it the spirit of Vietnamese craftsmanship and our commitment to helping 
                  stories come to life through the timeless art of paper.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
                alt="Paperland Workshop"
                className="w-full h-96 object-cover rounded-lg shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Paperland Sai Gon
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png"
                alt="Traditional Papermaking"
                className="w-full h-96 object-cover rounded-lg shadow-large"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To preserve and celebrate the ancient art of papermaking while making it 
                  accessible to modern creators. We believe that in our digital age, the 
                  tactile experience of working with beautiful paper is more precious than ever.
                </p>
                <p>
                  Our mission extends beyond just selling products. We're committed to 
                  educating our community about traditional techniques, supporting local 
                  artisans, and inspiring the next generation of paper enthusiasts.
                </p>
                <p>
                  Through workshops, collaborations, and our carefully curated product 
                  selection, we aim to keep the stories of paper alive for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Community Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories from artists, creators, and paper enthusiasts who trust Paperland
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative"
                style={{
                  transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`,
                }}
              >
                <Card className="overflow-hidden hover:shadow-large transition-smooth duration-500 hover:scale-105 hover:z-10 relative">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs opacity-90">{testimonial.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Team Philosophy
            </h2>
            <div className="bg-gradient-primary text-primary-foreground p-8 md:p-12 rounded-2xl shadow-large">
              <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed">
                "We believe that every piece of paper has a story waiting to be told. 
                Our role is simply to provide the perfect canvas for those stories to unfold."
              </blockquote>
              <div className="mt-6">
                <cite className="text-primary-foreground/80">
                  - The Paperland Sai Gon Team
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};