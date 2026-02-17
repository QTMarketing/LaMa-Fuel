"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !mobileOpen && !isNavHovered;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isSolutionsActive =
    pathname === "/solutions/unbranded" ||
    pathname === "/solutions/branded";

  return (
    <>
      <header
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
        className={cn(
          "w-full z-[70] fixed top-0 left-0 right-0 transition-all duration-300",
          isTransparent
            ? "bg-transparent text-white"
            : "bg-white/95 text-gray-900 border-b border-gray-200/70 backdrop-blur-md shadow-[0_8px_28px_rgba(2,6,23,0.08)]"
        )}
      >
        <nav
          className="site-container flex h-[80px] items-center"
          aria-label="Global"
        >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span
              className={cn(
                "text-xl sm:text-2xl font-heading font-bold tracking-wide transition-colors duration-300",
                isTransparent ? "text-white" : "text-slate-900"
              )}
            >
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
                "group relative flex h-full items-center px-2 transition-[color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "after:absolute after:left-0 after:bottom-0 after:z-10 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:opacity-0 after:rounded-full after:bg-orange-gradient after:transform-gpu after:will-change-transform after:transition-[transform,opacity] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:after:scale-x-100 hover:after:opacity-100",
                pathname === item.href && "after:scale-x-100 after:opacity-100"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span
                className={cn(
                  "relative translate-y-[2px] text-[20px] font-semibold transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-orange-500",
                  isTransparent ? "text-white/95" : "text-slate-800"
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}

          {/* Solutions Dropdown (Desktop) */}
          <Popover className="static">
            {({ open, close }) => (
              <div className="relative pb-4 -mb-4" onMouseLeave={() => close()}>
                <PopoverButton
                  className={cn(
                    "group relative flex h-full items-center px-2 focus:outline-none focus-visible:outline-none transition-[color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "after:absolute after:left-0 after:bottom-0 after:z-10 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:opacity-0 after:rounded-full after:bg-orange-gradient after:transform-gpu after:will-change-transform after:transition-[transform,opacity] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:after:scale-x-100 hover:after:opacity-100",
                    (isSolutionsActive || open) && "after:scale-x-100 after:opacity-100"
                  )}
                  aria-label="Toggle solutions menu"
                  onMouseEnter={(e) => {
                    if (!open) {
                      e.currentTarget.click();
                    }
                  }}
                >
                  <span
                    className={cn(
                      "relative translate-y-[2px] text-[20px] font-semibold transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-orange-500",
                      isTransparent ? "text-white/95" : "text-slate-800"
                    )}
                  >
                    Solutions
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      "ml-1 h-4 w-4 translate-y-[2px] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isTransparent ? "text-white/90" : "text-slate-700",
                      open && "rotate-180"
                    )}
                  />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  enter="transition duration-180 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  enterFrom="opacity-0 -translate-y-0.5"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-140 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-0.5"
                >
                  <PopoverPanel
                    className="absolute left-0 top-full mt-0 z-[80] w-[360px] rounded-b-xl rounded-t-none border border-slate-200 border-t-0 bg-white p-2 text-slate-900 shadow-[0_20px_45px_rgba(2,6,23,0.14)]"
                  >
                    <div className="space-y-1">
                      <Link
                        href="/solutions/branded"
                        onClick={() => close()}
                        className="group/item relative block rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-slate-50"
                      >
                        <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-orange-gradient opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                        <span className="block pl-2 text-[17px] font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover/item:text-orange-600">
                          Branded Fuel
                        </span>
                        <span className="block pl-2 text-sm text-slate-500">
                          Branded fuel supply for retail locations.
                        </span>
                      </Link>
                      <Link
                        href="/solutions/unbranded"
                        onClick={() => close()}
                        className="group/item relative block rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-slate-50"
                      >
                        <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-orange-gradient opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                        <span className="block pl-2 text-[17px] font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover/item:text-orange-600">
                          Unbranded Fuel (Lama Fuel)
                        </span>
                        <span className="block pl-2 text-sm text-slate-500">
                          Unbranded supply with higher margin flexibility.
                        </span>
                      </Link>
                    </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/brand-application"
            className={cn(
              "font-heading rounded-md px-5 py-2.5 font-semibold tracking-wide transition-all duration-300",
              isTransparent
                ? "border border-white/40 bg-transparent text-white hover:bg-white/10"
                : "btn-primary text-white"
            )}
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
            className={cn(
              "p-2 rounded-md transition-colors",
              isTransparent
                ? "text-white hover:bg-white/15"
                : "text-dark hover:bg-gray-100"
            )}
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
        <div className="md:hidden border-t border-gray-200 bg-white text-gray-900">
          <div className="site-container py-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="block px-2 py-2 rounded font-medium hover:bg-gray-100 hover:text-orange-600 transition-all duration-200"
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
                          Branded Fuel
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/unbranded"
                        className="group block px-2 py-2 hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="text-sm font-medium text-black">
                          Unbranded Fuel (Lama Fuel)
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
      {!isHome && <div aria-hidden="true" className="h-[80px]" />}
      <FloatingChatWidget />
    </>
  );
}