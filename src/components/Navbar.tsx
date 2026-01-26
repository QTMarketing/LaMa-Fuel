"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServicesActive =
    pathname === "/services" ||
    pathname === "/fuel-solutions" ||
    pathname === "/delivery" ||
    pathname === "/maintenance" ||
    pathname === "/pump-tank-installation" ||
    pathname.startsWith("/solutions/");

  return (
    <>
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
                // active indicator
                "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-orange-gradient after:opacity-0 after:transition-opacity",
                "hover:after:opacity-100",
                pathname === item.href && "text-gray-900 bg-gray-100 after:opacity-100"
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
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span className="relative">{item.name}</span>
            </Link>
          ))}

          {/* Services Dropdown (Desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center rounded-md transition-all duration-200 hover:bg-gray-100">
              <Link
                href="/services"
                className={cn(
                  "relative px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-all duration-200",
                  "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-orange-gradient after:opacity-0 after:transition-opacity",
                  "hover:after:opacity-100",
                  isServicesActive && "text-gray-900 bg-gray-100 after:opacity-100"
                )}
                style={{ fontWeight: isServicesActive ? 700 : 500 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty("font-weight", "700", "important");
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.setProperty("font-weight", "700", "important");
                }}
                onMouseLeave={(e) => {
                  const fontWeight = isServicesActive ? "700" : "500";
                  e.currentTarget.style.setProperty("font-weight", fontWeight, "important");
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.setProperty("font-weight", fontWeight, "important");
                }}
                aria-current={isServicesActive ? "page" : undefined}
              >
                <span className="relative">Services</span>
              </Link>

              <button
                type="button"
                className="px-2 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
                onClick={() => setServicesOpen((v) => !v)}
              >
                <span aria-hidden>▾</span>
              </button>
            </div>

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
                        href="/pump-tank-installation"
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          Pump &amp; Tank Installation Services
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/fuel-solutions"
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          Fuel Solutions
                        </span>
                      </Link>
                    </li>
                    <li className="my-2 border-t border-gray-100" />
                    <li>
                      <Link 
                        href="/delivery" 
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          Fuel Delivery
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/maintenance" 
                        className="group block px-4 py-2 hover:bg-gray-50 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          Maintenance
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
                <Link 
                  href="/services"
                  className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                  onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                >
                  Services
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 font-medium transition-all duration-200"
                  aria-expanded={mobileServicesOpen}
                  onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                  onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                >
                  Services ▾
                </button>
                {mobileServicesOpen && (
                  <ul className="mt-1 ml-2 divide-y divide-gray-200">
                    <li>
                      <Link 
                        href="/pump-tank-installation"
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-black">
                          Pump &amp; Tank Installation Services
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/fuel-solutions"
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-black">
                          Fuel Solutions
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
                          Fuel Delivery
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/maintenance" 
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.fontWeight = '700'}
                        onMouseLeave={(e) => e.currentTarget.style.fontWeight = '500'}
                      >
                        <span className="text-sm font-medium text-black">
                          Maintenance
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
                  <span>Brand Application Form</span>
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