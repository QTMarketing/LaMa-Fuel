// Form validation utilities for admin panel

export interface ValidationError {
  field: string;
  message: string;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

export function validateStore(data: { name: string; address: string; phone: string }): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Store name must be at least 2 characters' });
  }
  
  if (!data.address || data.address.trim().length < 5) {
    errors.push({ field: 'address', message: 'Address must be at least 5 characters' });
  }
  
  if (!data.phone || !validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
  }
  
  return errors;
}

export function validateProduct(data: { name: string; price: number; type: string }): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Product name must be at least 2 characters' });
  }
  
  if (data.price === undefined || data.price < 0) {
    errors.push({ field: 'price', message: 'Price must be a positive number' });
  }
  
  if (!data.type || !['fuel', 'snack', 'coffee'].includes(data.type)) {
    errors.push({ field: 'type', message: 'Please select a valid product type' });
  }
  
  return errors;
}

export function validateUser(data: { email: string; name: string; role: string }): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!data.email || !validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  
  if (!data.role || !['admin', 'manager', 'viewer'].includes(data.role)) {
    errors.push({ field: 'role', message: 'Please select a valid role' });
  }
  
  return errors;
}

export function validateLogin(email: string, password: string): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!email || !validateEmail(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }
  
  if (!password || password.length < 6) {
    errors.push({ field: 'password', message: 'Password must be at least 6 characters' });
  }
  
  return errors;
}

