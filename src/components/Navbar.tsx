"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isSolutionsActive =
    pathname === "/solutions/unbranded" ||
    pathname === "/solutions/branded";

  return (
    <>
      <header className="w-full z-50 sticky top-0 bg-white/95 text-gray-900 border-b border-gray-100 backdrop-blur">
        <nav
          className="site-container flex items-center py-4 sm:py-5"
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
                "group relative px-2 py-1 transition-colors duration-200",
                "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-orange-gradient after:opacity-0 after:transition-opacity",
                "hover:after:opacity-100",
                pathname === item.href && "after:opacity-100"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span className="relative text-[22px] font-medium text-slate-800 group-hover:font-bold group-hover:text-primary-gradient">
                {item.name}
              </span>
            </Link>
          ))}

          {/* Solutions Dropdown (Desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "group relative px-2 py-1 transition-colors duration-200",
                "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-orange-gradient after:opacity-0 after:transition-opacity",
                "hover:after:opacity-100",
                isSolutionsActive && "after:opacity-100"
              )}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-label="Toggle solutions menu"
              onClick={() => setServicesOpen((v) => !v)}
            >
              <span className="relative text-[22px] font-medium text-slate-800 group-hover:font-bold group-hover:text-primary-gradient">
                Solutions ▾
              </span>
            </button>

            {servicesOpen && (
              <>
                <div className="absolute left-0 right-0 top-full h-2" />
                <div
                  className="absolute top-full left-0 min-w-[220px] rounded-lg bg-white text-gray-900 shadow-lg ring-1 ring-black/5 z-50"
                  role="menu"
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/solutions/branded"
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                      >
                        <span className="text-xl font-semibold text-gray-900">
                          Fuels
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/unbranded"
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                      >
                        <span className="text-xl font-semibold text-gray-900">
                          LaMa Fuel
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
            className="btn-primary font-heading"
          >
            <span className="font-heading font-semibold tracking-wide">Brand Application Form</span>
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
          <div className="site-container py-4">
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
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 font-medium transition-all duration-200"
                  aria-expanded={mobileServicesOpen}
                >
                  Solutions ▾
                </button>
                {mobileServicesOpen && (
                  <ul className="mt-1 ml-2 divide-y divide-gray-200">
                    <li>
                      <Link
                        href="/solutions/branded"
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="text-sm font-medium text-black">
                          Fuels
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/unbranded"
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="text-sm font-medium text-black">
                          LaMa Fuel
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/brand-application"
                  className="w-full btn-primary text-center font-heading"
                >
                  <span className="font-heading font-semibold tracking-wide">Brand Application Form</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      </header>
      <FloatingChatWidget />
    </>
  );
}