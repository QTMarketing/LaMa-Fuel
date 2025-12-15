"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/commitment" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0 bg-white/95 text-gray-900 shadow-sm border-b border-gray-100 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 sm:py-5 lg:px-10"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl sm:text-2xl font-heading font-bold tracking-wider">
              LaMa Fuel
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 ml-auto mr-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200",
                pathname === item.href && "text-gray-900 bg-gray-100"
              )}
              style={{ fontWeight: pathname === item.href ? 700 : 500 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('font-weight', '700', 'important');
                const span = e.currentTarget.querySelector('span');
                if (span) span.style.setProperty('font-weight', '700', 'important');
              }}
              onMouseLeave={(e) => {
                const fontWeight = pathname === item.href ? '700' : '500';
                e.currentTarget.style.setProperty('font-weight', fontWeight, 'important');
                const span = e.currentTarget.querySelector('span');
                if (span) span.style.setProperty('font-weight', fontWeight, 'important');
              }}
            >
              <span className="relative">{item.name}</span>
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
              className="relative px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
              style={{ fontWeight: 500 }}
              onClick={() => setSolutionsOpen((v) => !v)}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('font-weight', '700', 'important');
                const spans = e.currentTarget.querySelectorAll('span');
                spans.forEach(span => span.style.setProperty('font-weight', '700', 'important'));
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('font-weight', '500', 'important');
                const spans = e.currentTarget.querySelectorAll('span');
                spans.forEach(span => span.style.setProperty('font-weight', '500', 'important'));
              }}
            >
              <span className="relative inline-flex items-center gap-1">
                <span>Solutions</span>
                <span aria-hidden>▾</span>
              </span>
            </button>

            {solutionsOpen && (
              <>
                <div className="absolute left-0 right-0 top-full h-2" />
                <div
                  className="absolute top-full left-0 min-w-[220px] rounded-lg bg-white text-gray-900 shadow-lg ring-1 ring-black/5 z-50"
                  role="menu"
                >
                  <ul className="py-2">
                    <li>
                      <Link 
                        href="/solutions/unbranded" 
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          LaMa Fuel
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/solutions/branded" 
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          Branded Fuel
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/delivery" 
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          Delivery
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/brand-application"
            className="rounded-md btn-orange-gradient px-4 py-2 font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
          >
            <span>Brand Application Form</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden ml-auto">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-md transition-colors text-dark hover:bg-gray-100"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white text-gray-900">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                    onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((v) => !v)}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 font-medium transition-all duration-200"
                  aria-expanded={mobileSolutionsOpen}
                  onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                  onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                >
                  Solutions ▾
                </button>
                {mobileSolutionsOpen && (
                  <ul className="mt-1 ml-2 divide-y divide-gray-200">
                    <li>
                      <Link 
                        href="/solutions/unbranded" 
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-black">
                          LaMa Fuel
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/solutions/branded" 
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-black">
                          Branded Fuel
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/delivery" 
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-black">
                          Delivery
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/brand-application"
                  className="w-full rounded-md btn-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition inline-block text-center"
                >
                  Brand Application Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}