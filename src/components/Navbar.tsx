"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const BrandApplicationModal = dynamic(() => import("@/components/BrandApplicationModal"), { ssr: false });

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Commitment", href: "/commitment" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
        </div>

        <div className="hidden md:flex">
          <button
            onClick={() => window.dispatchEvent(new Event("open-brand-app"))}
            className="rounded-md btn-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
          >
            <span>Brand Application Form</span>
          </button>
        </div>
      </nav>
      <BrandApplicationModal />
    </header>
  );
}