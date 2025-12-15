"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import Breadcrumbs from "@/components/admin/Breadcrumbs";
import { isAuthenticated } from "@/lib/admin-auth";
import { getSettings, updateSettings } from "@/lib/admin-data";
import type { Settings } from "@/types/admin";

export default function AdminSettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [formData, setFormData] = useState({
    tiktok: "",
    instagram: "",
    homeBanner: "",
    aboutBanner: "",
    servicesBanner: "",
    reviewsQR: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login");
      return;
    }
    const currentSettings = getSettings();
    setSettings(currentSettings);
    setFormData({
      tiktok: currentSettings.socialMedia.tiktok,
      instagram: currentSettings.socialMedia.instagram,
      homeBanner: currentSettings.banners.home,
      aboutBanner: currentSettings.banners.about,
      servicesBanner: currentSettings.banners.services,
      reviewsQR: currentSettings.qrCodes.reviews,
    });
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      socialMedia: {
        tiktok: formData.tiktok,
        instagram: formData.instagram,
      },
      banners: {
        home: formData.homeBanner,
        about: formData.aboutBanner,
        services: formData.servicesBanner,
      },
      qrCodes: {
        reviews: formData.reviewsQR,
      },
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!settings) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Breadcrumbs items={[{ label: "Dashboard", href: "/admin" }, { label: "Settings" }]} />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 animate-slide-text">Settings</h1>
        <p className="text-gray-600 mt-2">Manage site configuration and social media links</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Social Media */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Media Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TikTok URL</label>
              <input
                type="url"
                value={formData.tiktok}
                onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="https://tiktok.com/@lamafuel"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
              <input
                type="url"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="https://instagram.com/lamafuel"
              />
            </div>
          </div>
        </div>

        {/* Banners */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Site Banners</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Home Banner URL</label>
              <input
                type="text"
                value={formData.homeBanner}
                onChange={(e) => setFormData({ ...formData, homeBanner: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="/banners/home.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About Banner URL</label>
              <input
                type="text"
                value={formData.aboutBanner}
                onChange={(e) => setFormData({ ...formData, aboutBanner: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="/banners/about.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Services Banner URL</label>
              <input
                type="text"
                value={formData.servicesBanner}
                onChange={(e) => setFormData({ ...formData, servicesBanner: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="/banners/services.jpg"
              />
            </div>
          </div>
        </div>

        {/* QR Codes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">QR Codes</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reviews QR Code URL</label>
            <input
              type="text"
              value={formData.reviewsQR}
              onChange={(e) => setFormData({ ...formData, reviewsQR: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="/qr/reviews.png"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between">
          {saved && (
            <div className="text-green-600 text-sm font-medium">Settings saved successfully!</div>
          )}
          <div className="ml-auto">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-semibold"
            >
              Save Settings
            </button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

