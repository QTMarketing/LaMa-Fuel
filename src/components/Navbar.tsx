"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const BrandApplicationModal = dynamic(() => import("@/components/BrandApplicationModal"), { ssr: false });

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/commitment" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header
      className={cn(
        "w-full z-50 transition-colors duration-300",
        isHomePage
          ? "absolute top-0 left-0 bg-transparent text-white"
          : "relative bg-white text-gray-900 shadow-sm"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-10" aria-label="Global">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold">LaMa Fuel</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 ml-auto mr-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3 py-2 rounded-md transition-all duration-300 group",
                isHomePage 
                  ? "text-white hover:text-white hover:bg-transparent"
                  : "text-dark hover:text-dark hover:bg-gray-100"
              )}
            >
              {/* Left/right translucent borders on hover (homepage only) */}
              {isHomePage && (
                <>
                  <span className="pointer-events-none absolute inset-y-1 left-0 w-px bg-white/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-full"></span>
                  <span className="pointer-events-none absolute inset-y-1 right-0 w-px bg-white/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-full"></span>
                </>
              )}

              <span className="relative">
                {item.name}
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 bg-[#FF6B35] opacity-0 transition-opacity duration-300"></span>
              </span>
            </Link>
          ))}

          {/* Solutions Dropdown (Desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "relative px-3 py-2 rounded-md transition-all duration-300 group",
                isHomePage 
                  ? "text-white hover:text-white hover:bg-transparent"
                  : "text-dark hover:text-dark hover:bg-gray-100"
              )}
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
            >
              {isHomePage && (
                <>
                  <span className="pointer-events-none absolute inset-y-1 left-0 w-px bg-white/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-full"></span>
                  <span className="pointer-events-none absolute inset-y-1 right-0 w-px bg-white/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-full"></span>
                </>
              )}
              <span className="relative inline-flex items-center gap-1">
                <span>Solutions</span>
                <span aria-hidden>▾</span>
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 bg-[#FF6B35] opacity-0 transition-opacity duration-300"></span>
              </span>
            </button>

            {solutionsOpen && (
              <>
                <div className="absolute left-0 right-0 top-full h-2"></div>
                <div
                  className="absolute top-full left-0 min-w-[220px] rounded-none bg-white text-gray-900 shadow-lg ring-1 ring-black/5 z-50"
                  role="menu"
                >
                <ul className="py-2 divide-y divide-gray-200">
                  <li>
                    <Link href="/solutions/unbranded" className="group block px-4 py-2">
                      <span className="text-sm font-medium text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FFA84B]">LaMa Fuel</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/branded" className="group block px-4 py-2">
                      <span className="text-sm font-medium text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FFA84B]">Branded Fuel</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/delivery" className="group block px-4 py-2">
                      <span className="text-sm font-medium text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FFA84B]">Delivery</span>
                    </Link>
                  </li>
                </ul>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:flex">
          <button
            onClick={() => window.dispatchEvent(new Event("open-brand-app"))}
            className="rounded-md btn-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
          >
            <span>Brand Application Form</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden ml-auto">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "px-3 py-2 rounded-md transition-colors",
              isHomePage ? "text-white" : "text-dark hover:bg-gray-100"
            )}
          >
            Menu
          </button>
        </div>
      </nav>
      <BrandApplicationModal />

      {/* Mobile panel */}
      {mobileOpen && (
        <div className={cn("md:hidden border-t", isHomePage ? "bg-white/95 text-gray-900" : "bg-white text-gray-900")}> 
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="block px-2 py-2 rounded hover:bg-gray-100">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((v) => !v)}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 font-medium"
                  aria-expanded={mobileSolutionsOpen}
                >
                  Solutions ▾
                </button>
                {mobileSolutionsOpen && (
                  <ul className="mt-1 ml-2 divide-y divide-gray-200">
                    <li>
                      <Link href="/solutions/unbranded" className="group block px-2 py-2 hover:bg-gray-100">
                        <span className="text-sm font-medium text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FFA84B]">LaMa Fuel</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/branded" className="group block px-2 py-2 hover:bg-gray-100">
                        <span className="text-sm font-medium text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FFA84B]">Branded Fuel</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/delivery" className="group block px-2 py-2 hover:bg-gray-100">
                        <span className="text-sm font-medium text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FFA84B]">Delivery</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-brand-app"))}
                  className="w-full rounded-md btn-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
                >
                  Brand Application Form
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}