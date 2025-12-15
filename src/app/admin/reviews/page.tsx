"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import Breadcrumbs from "@/components/admin/Breadcrumbs";
import { isAuthenticated } from "@/lib/admin-auth";
import { getReviews } from "@/lib/admin-data";
import type { Review } from "@/types/admin";
import { formatDate } from "@/lib/admin-utils";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function AdminReviewsPage() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login");
      return;
    }
    setReviews(getReviews());
  }, [router]);

  return (
    <AdminLayout>
      <Breadcrumbs items={[{ label: "Dashboard", href: "/admin" }, { label: "Reviews" }]} />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 animate-slide-text">Reviews</h1>
        <p className="text-gray-600 mt-2">View customer reviews and ratings</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{review.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{review.storeName || review.storeId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{review.comment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(review.date)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {review.googleMapsLink ? (
                      <a
                        href={review.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-orange-600 hover:text-orange-800"
                      >
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-xs">View</span>
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

