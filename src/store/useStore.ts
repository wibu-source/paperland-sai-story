import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  color?: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  images?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses?: Address[];
}

export interface Address {
  id: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  createdAt: Date;
  shippingAddress: Address;
}

interface Store {
  // Cart
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;

  // User
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;

  // Orders
  orders: Order[];
  addOrder: (order: Omit<Order, 'id'>) => void;

  // UI State
  darkMode: boolean;
  toggleDarkMode: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: 'newest' | 'price-low' | 'price-high';
  setSortBy: (sort: 'newest' | 'price-low' | 'price-high') => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Cart
      cartItems: [],
      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { product, quantity }],
          };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.product.id !== productId
          ),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ cartItems: [] }),
      getCartTotal: () => {
        const { cartItems } = get();
        return cartItems.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      getCartItemsCount: () => {
        const { cartItems } = get();
        return cartItems.reduce((count, item) => count + item.quantity, 0);
      },

      // User
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        // Mock authentication
        const mockUser: User = {
          id: '1',
          name: 'John Doe',
          email,
          phone: '+84 123 456 789',
          addresses: [{
            id: '1',
            street: '123 Nguyen Hue St',
            city: 'Ho Chi Minh City',
            zipCode: '700000',
            country: 'Vietnam',
            isDefault: true
          }]
        };
        set({ user: mockUser, isAuthenticated: true });
        return true;
      },
      register: async (userData) => {
        // Mock registration
        const newUser: User = {
          id: Date.now().toString(),
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          addresses: []
        };
        set({ user: newUser, isAuthenticated: true });
        return true;
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (userData) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        })),

      // Orders
      orders: [],
      addOrder: (order) =>
        set((state) => ({
          orders: [{ ...order, id: Date.now().toString() }, ...state.orders],
        })),

      // UI State
      darkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.darkMode;
          document.documentElement.classList.toggle('dark', newDarkMode);
          return { darkMode: newDarkMode };
        }),
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      selectedCategory: 'all',
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      priceRange: [0, 1000],
      setPriceRange: (range) => set({ priceRange: range }),
      sortBy: 'newest',
      setSortBy: (sort) => set({ sortBy: sort }),
    }),
    {
      name: 'paperland-store',
      partialize: (state) => ({
        cartItems: state.cartItems,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        darkMode: state.darkMode,
        orders: state.orders,
      }),
    }
  )
);