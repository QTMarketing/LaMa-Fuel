# LaMa Fuel Admin Panel Documentation

## Overview

A full-featured admin panel for managing LaMa Fuel website operations, built with Next.js, TypeScript, and TailwindCSS.

## Features

- ✅ **Authentication**: Login system with email/password
- ✅ **Dashboard**: Overview with key stats and recent activity
- ✅ **Stores Management**: CRUD operations for store locations
- ✅ **Products Management**: CRUD operations for fuel/products
- ✅ **Orders Viewing**: List all customer orders
- ✅ **Reviews Management**: View customer reviews with Google Maps links
- ✅ **Users Management**: CRUD operations for admin users
- ✅ **Settings**: Configure social media links, banners, and QR codes
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Form Validation**: Client-side validation for all forms
- ✅ **Breadcrumbs**: Navigation breadcrumbs on all pages

## File Structure

```
src/
├── app/
│   └── admin/
│       ├── page.tsx                    # Dashboard page
│       ├── login/
│       │   └── page.tsx                # Login page
│       ├── stores/
│       │   └── page.tsx                # Stores CRUD page
│       ├── products/
│       │   └── page.tsx                # Products CRUD page
│       ├── orders/
│       │   └── page.tsx                # Orders listing page
│       ├── reviews/
│       │   └── page.tsx                # Reviews listing page
│       ├── users/
│       │   └── page.tsx                # Users CRUD page
│       └── settings/
│           └── page.tsx                # Settings page
├── components/
│   └── admin/
│       ├── AdminLayout.tsx              # Main layout with sidebar
│       └── Breadcrumbs.tsx             # Breadcrumb navigation component
├── lib/
│   ├── admin-auth.ts                   # Authentication utilities
│   ├── admin-data.ts                   # Data storage and CRUD operations
│   ├── admin-validation.ts             # Form validation functions
│   └── admin-utils.ts                  # Utility functions (formatting, etc.)
└── types/
    └── admin.ts                        # TypeScript type definitions
```

## How It Works

### 1. Authentication (`src/lib/admin-auth.ts`)

Simple authentication system using localStorage (replace with proper JWT/session in production).

- **Default Credentials**: 
  - Email: `admin@lamafuel.com`
  - Password: `admin123`

**Functions:**
- `login(email, password)`: Validates credentials and returns user object
- `getStoredUser()`: Retrieves current logged-in user
- `storeUser(user)`: Saves user to localStorage
- `logout()`: Clears user session
- `isAuthenticated()`: Checks if user is logged in

### 2. Data Management (`src/lib/admin-data.ts`)

In-memory data storage (resets on page refresh). In production, replace with API calls to your backend.

**Data Models:**
- Stores: name, address, phone
- Products: name, price, type (fuel/snack/coffee), active status
- Orders: customer, store, product, quantity, total, status, date
- Reviews: customer, store, rating, comment, date, Google Maps link
- Users: email, name, role (admin/manager/viewer), status
- Settings: social media links, banners, QR codes

**CRUD Operations:**
- `getStores()`, `createStore()`, `updateStore()`, `deleteStore()`
- `getProducts()`, `createProduct()`, `updateProduct()`, `deleteProduct()`
- `getUsers()`, `createUser()`, `updateUser()`, `deleteUser()`
- `getOrders()`, `getReviews()`, `getDashboardStats()`
- `getSettings()`, `updateSettings()`

### 3. Form Validation (`src/lib/admin-validation.ts`)

Client-side validation functions for all forms.

**Validation Functions:**
- `validateEmail(email)`: Email format validation
- `validatePhone(phone)`: Phone number validation
- `validateStore(data)`: Store form validation
- `validateProduct(data)`: Product form validation
- `validateUser(data)`: User form validation
- `validateLogin(email, password)`: Login form validation

### 4. Admin Layout (`src/components/admin/AdminLayout.tsx`)

Main layout component that wraps all admin pages.

**Features:**
- Sidebar navigation with menu items
- Mobile-responsive hamburger menu
- Active route highlighting
- Logout functionality
- Authentication check (redirects to login if not authenticated)

**Menu Items:**
- Dashboard
- Stores
- Products
- Orders
- Reviews
- Users
- Settings

### 5. Pages

#### Dashboard (`src/app/admin/page.tsx`)
- Displays key statistics (total stores, sales, orders, reviews)
- Shows recent 5 orders and reviews
- Uses `getDashboardStats()` to fetch data

#### Stores (`src/app/admin/stores/page.tsx`)
- Lists all stores in a table
- Add/Edit/Delete functionality via modal
- Form validation for name, address, phone

#### Products (`src/app/admin/products/page.tsx`)
- Lists all products in a table
- Add/Edit/Delete functionality via modal
- Form validation for name, price, type, active status

#### Orders (`src/app/admin/orders/page.tsx`)
- Lists all orders in a table
- Shows customer, store, product, quantity, total, status, date
- Read-only view (no edit/delete)

#### Reviews (`src/app/admin/reviews/page.tsx`)
- Lists all customer reviews
- Shows rating (stars), comment, date
- Google Maps link for each review location

#### Users (`src/app/admin/users/page.tsx`)
- Lists all admin users
- Add/Edit/Delete functionality via modal
- Role management (admin/manager/viewer)
- Status management (active/inactive)

#### Settings (`src/app/admin/settings/page.tsx`)
- Social media links (TikTok, Instagram)
- Site banners (home, about, services)
- QR codes (reviews)

### 6. Breadcrumbs (`src/components/admin/Breadcrumbs.tsx`)

Navigation breadcrumb component used on all pages.

**Usage:**
```tsx
<Breadcrumbs items={[
  { label: "Dashboard", href: "/admin" },
  { label: "Stores" }
]} />
```

## Accessing the Admin Panel

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/admin/login`

3. Login with default credentials:
   - Email: `admin@lamafuel.com`
   - Password: `admin123`

4. After login, you'll be redirected to the dashboard at `/admin`

## Production Considerations

### Security
- **Replace localStorage with secure session management** (JWT tokens, httpOnly cookies)
- **Implement proper password hashing** (bcrypt, argon2)
- **Add rate limiting** for login attempts
- **Use HTTPS** for all admin routes
- **Implement role-based access control** (RBAC) for different user roles

### Data Storage
- **Replace in-memory storage with database** (PostgreSQL, MongoDB, etc.)
- **Create API routes** (`src/app/api/admin/...`) for CRUD operations
- **Add data persistence** so changes survive page refreshes
- **Implement proper error handling** and loading states

### Authentication
- **Use NextAuth.js** or similar for proper authentication
- **Add password reset functionality**
- **Implement two-factor authentication (2FA)**
- **Add session timeout** and auto-logout

### Additional Features
- **Export data** (CSV, PDF)
- **Search and filtering** for tables
- **Pagination** for large datasets
- **Bulk operations** (delete multiple items)
- **Activity logs** and audit trails
- **Email notifications** for important events

## Customization

### Changing Brand Colors
The admin panel uses orange (`orange-600`) as the primary color. To change it:

1. Search for `orange-600` in all admin files
2. Replace with your brand color (e.g., `blue-600`, `green-600`)
3. Update hover states accordingly (e.g., `orange-700` → `blue-700`)

### Adding New Menu Items
1. Add new item to `menuItems` array in `AdminLayout.tsx`
2. Create corresponding page in `src/app/admin/[new-page]/page.tsx`
3. Add route to breadcrumbs on the new page

### Modifying Data Models
1. Update types in `src/types/admin.ts`
2. Update mock data in `src/lib/admin-data.ts`
3. Update validation in `src/lib/admin-validation.ts`
4. Update forms in corresponding page components

## Troubleshooting

### "Cannot find module '@heroicons/react'"
Run: `npm install @heroicons/react`

### "User not authenticated" errors
- Check if localStorage is enabled in browser
- Verify login credentials
- Check browser console for errors

### Data not persisting
- This is expected behavior with in-memory storage
- Implement database/API integration for persistence

### Styling issues
- Ensure TailwindCSS is properly configured
- Check `tailwind.config.ts` includes all admin files
- Run `npm run build` to verify Tailwind compilation

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- TailwindCSS Documentation: https://tailwindcss.com/docs
- TypeScript Documentation: https://www.typescriptlang.org/docs

