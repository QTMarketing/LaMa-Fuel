"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, storeUser, isAuthenticated } from "@/lib/admin-auth";
import { validateLogin } from "@/lib/admin-validation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<{ field: string; message: string }[]>([]);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/admin");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setValidationErrors([]);

    const valErrors = validateLogin(email, password);
    if (valErrors.length > 0) {
      setValidationErrors(valErrors);
      return;
    }

    const user = login(email, password);
    if (user) {
      storeUser(user);
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">LaMa Fuel Admin</h1>
          <p className="text-gray-600">Sign in to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="admin@lamafuel.com"
            />
            {validationErrors.find(e => e.field === 'email') && (
              <p className="mt-1 text-sm text-red-600">
                {validationErrors.find(e => e.field === 'email')?.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
            {validationErrors.find(e => e.field === 'password') && (
              <p className="mt-1 text-sm text-red-600">
                {validationErrors.find(e => e.field === 'password')?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Default credentials:</p>
          <p className="font-mono mt-1">admin@lamafuel.com / admin123</p>
        </div>
      </div>
    </div>
  );
}

