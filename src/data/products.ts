import { Product } from '@/store/useStore';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Art Paper Set',
    price: 29.99,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Art Paper',
    color: 'White',
    description: 'High-quality art paper perfect for watercolors, sketching, and mixed media. Made from 100% cotton fibers for superior texture and durability.',
    inStock: true,
    featured: true,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '2',
    name: 'Handmade Greeting Cards',
    price: 15.99,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Handmade Cards',
    color: 'Beige',
    description: 'Beautiful handcrafted greeting cards made from recycled paper. Perfect for special occasions and personal messages.',
    inStock: true,
    featured: true,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '3',
    name: 'Calligraphy Brush Set',
    price: 45.00,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Calligraphy Tools',
    color: 'Brown',
    description: 'Professional calligraphy brush set with traditional bamboo handles. Includes 5 different brush sizes for various writing styles.',
    inStock: true,
    featured: true,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '4',
    name: 'Textured Sketch Paper',
    price: 12.50,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Art Paper',
    color: 'Cream',
    description: 'Specially textured paper designed for charcoal and pencil sketching. Provides excellent grip for detailed artwork.',
    inStock: true,
    featured: false,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '5',
    name: 'Wedding Invitation Set',
    price: 89.99,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Handmade Cards',
    color: 'White',
    description: 'Elegant wedding invitation cards with gold foil details. Each set includes 50 invitations, RSVP cards, and envelopes.',
    inStock: true,
    featured: true,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '6',
    name: 'Ink Stone Set',
    price: 65.00,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Calligraphy Tools',
    color: 'Black',
    description: 'Traditional ink stone made from natural slate. Perfect for grinding ink sticks and creating smooth, consistent ink for calligraphy.',
    inStock: true,
    featured: false,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '7',
    name: 'Origami Paper Collection',
    price: 18.75,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Art Paper',
    color: 'Multicolor',
    description: 'Vibrant collection of origami paper in various colors and patterns. Includes 200 sheets perfect for folding and crafting.',
    inStock: true,
    featured: false,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  },
  {
    id: '8',
    name: 'Thank You Cards Bundle',
    price: 22.00,
    image: '/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png',
    category: 'Handmade Cards',
    color: 'Pink',
    description: 'Set of 25 handcrafted thank you cards with matching envelopes. Features delicate floral designs and premium paper quality.',
    inStock: false,
    featured: false,
    images: ['/lovable-uploads/56fa1edb-f7a9-4925-8eff-d36bbe037167.png']
  }
];

export const categories = [
  'Art Paper',
  'Handmade Cards',
  'Calligraphy Tools'
];

export const colors = [
  'White',
  'Beige',
  'Brown',
  'Cream',
  'Black',
  'Multicolor',
  'Pink'
];