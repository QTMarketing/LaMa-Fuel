// Simple authentication utilities for admin panel
// In production, replace with proper JWT/session management

const ADMIN_EMAIL = 'admin@lamafuel.com';
const ADMIN_PASSWORD = 'admin123'; // Change this in production!

export interface AuthUser {
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'viewer';
}

export function login(email: string, password: string): AuthUser | null {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return {
      email: ADMIN_EMAIL,
      name: 'Admin User',
      role: 'admin',
    };
  }
  return null;
}

export function getStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('admin_user');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function storeUser(user: AuthUser): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin_user', JSON.stringify(user));
}

export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('admin_user');
}

export function isAuthenticated(): boolean {
  return getStoredUser() !== null;
}

