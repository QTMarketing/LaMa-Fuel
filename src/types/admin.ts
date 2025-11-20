// Admin Panel Type Definitions

export type UserRole = 'admin' | 'manager' | 'viewer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductType = 'fuel' | 'snack' | 'coffee';

export interface Product {
  id: string;
  name: string;
  price: number;
  type: ProductType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  customerName: string;
  storeId: string;
  storeName?: string;
  productId: string;
  productName?: string;
  quantity: number;
  totalPrice: number;
  status: OrderStatus;
  date: string;
  createdAt: string;
}

export interface Review {
  id: string;
  customerName: string;
  storeId: string;
  storeName?: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  googleMapsLink?: string;
  createdAt: string;
}

export interface Settings {
  socialMedia: {
    tiktok: string;
    instagram: string;
  };
  banners: {
    home: string;
    about: string;
    services: string;
  };
  qrCodes: {
    reviews: string;
  };
}

export interface DashboardStats {
  totalStores: number;
  totalSales: number;
  totalOrders: number;
  totalReviews: number;
  recentOrders: Order[];
  recentReviews: Review[];
}

export type FormStatus = 'new' | 'in_progress' | 'resolved';

export interface FormSubmission {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  formType: 'contact' | 'partnership' | 'support' | 'other' | 'brand_application';
  message: string;
  status: FormStatus;
  sourcePage?: string;
  submittedAt: string;
  payload?: Record<string, unknown>;
}

