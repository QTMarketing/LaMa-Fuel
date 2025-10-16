"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BrandApplicationForm from "@/components/BrandApplicationForm";

export default function BrandApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const open = () => setIsOpen(true);
    window.addEventListener("open-brand-app", open as EventListener);
    return () => window.removeEventListener("open-brand-app", open as EventListener);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [isOpen]);

  if (!mounted) return null;
  if (!isOpen) return null;

  return createPortal(
    (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 opacity-100 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
        {/* Modal */}
        <div className="relative z-[1001] max-h-[85vh] w-[92vw] max-w-5xl overflow-y-auto rounded-xl bg-white p-4 sm:p-6 shadow-2xl animate-scale-in">
          <button
            aria-label="Close"
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <BrandApplicationForm />
        </div>
        <style jsx>{`
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes scaleIn { from { opacity: 0; transform: scale(0.98) translateY(6px) } to { opacity: 1; transform: scale(1) translateY(0) } }
          .animate-fade-in { animation: fadeIn 200ms ease-out both; }
          .animate-scale-in { animation: scaleIn 220ms ease-out both; }
        `}</style>
      </div>
    ),
    document.body
  );
}


