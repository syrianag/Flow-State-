"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/why", label: "Why Flow State?" },
  { href: "/product", label: "Product" },
  { href: "/features", label: "Features" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl">🦦</span>
          <span className="text-2xl font-bold text-white">Flow State</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-teal-400 font-semibold"
                    : "text-slate-300 hover:text-white transition font-medium"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}