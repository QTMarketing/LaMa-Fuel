// Mock data storage for admin panel
// In production, replace with API calls to your backend

import type { Store, Product, Order, Review, User, DashboardStats } from '@/types/admin';

// In-memory storage (resets on page refresh)
let stores: Store[] = [
  { id: '1', name: 'LaMa Fuel Downtown', address: '1501 Pipeline Rd E Ste B, Bedford, TX 76022', phone: '+1 (234) 567-890', createdAt: '2024-01-15', updatedAt: '2024-01-15' },
  { id: '2', name: 'LaMa Fuel North', address: '123 Main St, Dallas, TX 75201', phone: '+1 (234) 567-891', createdAt: '2024-02-10', updatedAt: '2024-02-10' },
];

let products: Product[] = [
  { id: '1', name: 'Regular Gasoline', price: 3.49, type: 'fuel', active: true, createdAt: '2024-01-15', updatedAt: '2024-01-15' },
  { id: '2', name: 'Premium Gasoline', price: 3.89, type: 'fuel', active: true, createdAt: '2024-01-15', updatedAt: '2024-01-15' },
  { id: '3', name: 'Diesel', price: 3.79, type: 'fuel', active: true, createdAt: '2024-01-15', updatedAt: '2024-01-15' },
  { id: '4', name: 'Coffee', price: 2.99, type: 'coffee', active: true, createdAt: '2024-01-20', updatedAt: '2024-01-20' },
  { id: '5', name: 'Snack Pack', price: 4.99, type: 'snack', active: true, createdAt: '2024-01-20', updatedAt: '2024-01-20' },
];

let orders: Order[] = [
  { id: '1', customerName: 'John Doe', storeId: '1', storeName: 'LaMa Fuel Downtown', productId: '1', productName: 'Regular Gasoline', quantity: 20, totalPrice: 69.80, status: 'completed', date: '2024-11-01', createdAt: '2024-11-01T10:00:00Z' },
  { id: '2', customerName: 'Jane Smith', storeId: '1', storeName: 'LaMa Fuel Downtown', productId: '2', productName: 'Premium Gasoline', quantity: 15, totalPrice: 58.35, status: 'processing', date: '2024-11-02', createdAt: '2024-11-02T14:30:00Z' },
  { id: '3', customerName: 'Bob Johnson', storeId: '2', storeName: 'LaMa Fuel North', productId: '3', productName: 'Diesel', quantity: 50, totalPrice: 189.50, status: 'completed', date: '2024-11-03', createdAt: '2024-11-03T09:15:00Z' },
];

let reviews: Review[] = [
  { id: '1', customerName: 'John Doe', storeId: '1', storeName: 'LaMa Fuel Downtown', rating: 5, comment: 'Great service and competitive prices!', date: '2024-11-01', googleMapsLink: 'https://maps.google.com/?q=1501+Pipeline+Rd+E+Ste+B+Bedford+TX', createdAt: '2024-11-01T12:00:00Z' },
  { id: '2', customerName: 'Jane Smith', storeId: '1', storeName: 'LaMa Fuel Downtown', rating: 4, comment: 'Clean facility and friendly staff.', date: '2024-11-02', googleMapsLink: 'https://maps.google.com/?q=1501+Pipeline+Rd+E+Ste+B+Bedford+TX', createdAt: '2024-11-02T15:00:00Z' },
  { id: '3', customerName: 'Bob Johnson', storeId: '2', storeName: 'LaMa Fuel North', rating: 5, comment: 'Best fuel prices in town!', date: '2024-11-03', googleMapsLink: 'https://maps.google.com/?q=123+Main+St+Dallas+TX', createdAt: '2024-11-03T10:00:00Z' },
];

let users: User[] = [
  { id: '1', email: 'admin@lamafuel.com', name: 'Admin User', role: 'admin', status: 'active', createdAt: '2024-01-01' },
  { id: '2', email: 'manager@lamafuel.com', name: 'Manager User', role: 'manager', status: 'active', createdAt: '2024-01-05' },
];

// Store CRUD
export function getStores(): Store[] {
  return stores;
}

export function getStore(id: string): Store | undefined {
  return stores.find(s => s.id === id);
}

export function createStore(store: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>): Store {
  const newStore: Store = {
    ...store,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  stores.push(newStore);
  return newStore;
}

export function updateStore(id: string, updates: Partial<Store>): Store | null {
  const index = stores.findIndex(s => s.id === id);
  if (index === -1) return null;
  stores[index] = { ...stores[index], ...updates, updatedAt: new Date().toISOString() };
  return stores[index];
}

export function deleteStore(id: string): boolean {
  const index = stores.findIndex(s => s.id === id);
  if (index === -1) return false;
  stores.splice(index, 1);
  return true;
}

// Product CRUD
export function getProducts(): Product[] {
  return products;
}

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  products.push(newProduct);
  return newProduct;
}

export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...updates, updatedAt: new Date().toISOString() };
  return products[index];
}

export function deleteProduct(id: string): boolean {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}

// Order operations
export function getOrders(): Order[] {
  return orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getOrder(id: string): Order | undefined {
  return orders.find(o => o.id === id);
}

// Review operations
export function getReviews(): Review[] {
  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getReview(id: string): Review | undefined {
  return reviews.find(r => r.id === id);
}

// User CRUD
export function getUsers(): User[] {
  return users;
}

export function getUser(id: string): User | undefined {
  return users.find(u => u.id === id);
}

export function createUser(user: Omit<User, 'id' | 'createdAt'>): User {
  const newUser: User = {
    ...user,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...updates };
  return users[index];
}

export function deleteUser(id: string): boolean {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

// Dashboard stats
export function getDashboardStats(): DashboardStats {
  const recentOrders = getOrders().slice(0, 5);
  const recentReviews = getReviews().slice(0, 5);
  const totalSales = orders
    .filter(o => o.status === 'completed')
    .reduce((sum, o) => sum + o.totalPrice, 0);

  return {
    totalStores: stores.length,
    totalSales,
    totalOrders: orders.length,
    totalReviews: reviews.length,
    recentOrders,
    recentReviews,
  };
}

// Settings (mock - in production, use database)
let settings = {
  socialMedia: {
    tiktok: 'https://tiktok.com/@lamafuel',
    instagram: 'https://instagram.com/lamafuel',
  },
  banners: {
    home: '/banners/home.jpg',
    about: '/banners/about.jpg',
    services: '/banners/services.jpg',
  },
  qrCodes: {
    reviews: '/qr/reviews.png',
  },
};

export function getSettings() {
  return settings;
}

export function updateSettings(updates: Partial<typeof settings>) {
  settings = { ...settings, ...updates };
  return settings;
}

