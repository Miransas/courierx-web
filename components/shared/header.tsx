/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  title?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Docs",
    href: "https://github.com/sardorazimov/courierx-web#readme",
    external: true,
    title: "Docs site coming soon — for now, see the README",
  },
  {
    label: "Changelog",
    href: "https://github.com/sardorazimov/courierx-web/releases",
    external: true,
    title: "Track releases on GitHub",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 w-full transition-all duration-300 ease-in-out font-sans border-b",
        isScrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 text-white font-bold text-lg tracking-tight group">
           <img src="./favicon/favicon.svg" alt="CourierX Logo" className="h-6 w-6 group-hover:animate-pulse" />
          <span>CourierX</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              title={item.title}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center text-zinc-400 hover:text-brand-primary transition-colors duration-200"
            >
              {item.label}
              {item.external && (
                <ArrowUpRight className="ml-1 size-3.5 text-zinc-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Butonları */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://console.courierx.io/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link
            href="https://console.courierx.io"
            className="group relative inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 text-sm font-bold text-zinc-950 transition-all hover:shadow-[0_0_20px_rgba(140,255,46,0.4)] active:scale-95"
          >
            <span>Get started</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>

        {/* Mobil Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-white hover:text-brand-primary transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-brand-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              title={item.title}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center text-lg font-medium text-white hover:text-brand-primary"
            >
              {item.label}
              {item.external && (
                <ArrowUpRight className="ml-1 size-4 text-zinc-500" />
              )}
            </Link>
          ))}
          <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
            <Link href="https://console.courierx.io/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center text-zinc-400">Sign In</Link>
            <Link href="https://console.courierx.io" onClick={() => setIsMobileMenuOpen(false)} className="h-12 flex items-center justify-center rounded-lg bg-brand-primary text-zinc-950 font-bold">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
