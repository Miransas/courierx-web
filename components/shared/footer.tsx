/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

// X (Twitter) için en temiz ve güncel SVG ikon
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerNavigation = {
  social: [
    { name: "X (Twitter)", href: "#", icon: XIcon },
    { name: "GitHub", href: "#", icon: FaGithub },
    { name: "YouTube", href: "#", icon: FaYoutube },
    { name: "LinkedIn", href: "#", icon: FaLinkedin },
  ],
  links: {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
      { name: "Roadmap", href: "/roadmap" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Open Source", href: "https://github.com/miransas/courierx-api" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/docs/api" },
      { name: "SDKs", href: "/docs/sdks" },
      { name: "Status", href: "https://status.courierx.io" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-brand-bg text-zinc-400 font-sans mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        
        {/* Üst Segment: Marka Kimliği ve Link Sütunları */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12">
          
          {/* Marka ve Sosyal Blok (4/12 Sütun) */}
          <div className="md:col-span-4 flex flex-col gap-5 pr-8">
            <Link href="/" className="inline-flex items-center gap-2.5 active:scale-[0.98] transition-transform">
              <img src="./favicon/favicon.svg" alt="CourierX Logo" className="h-6 w-auto" />
              <span className="text-xl font-bold tracking-tight text-white">
                CourierX
              </span>
            </Link>

            <p className="max-w-sm text-sm text-zinc-500 leading-relaxed antialiased">
              Self-hosted transactional email infrastructure. Open source, developer-first, Resend-compatible.
            </p>
            
            {/* Sosyal Medya İkonları (Neon Yeşili Hover Destekli) */}
            <div className="flex items-center gap-5 text-zinc-500 pt-1.5">
              {footerNavigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-brand-primary hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    aria-label={item.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Dinamik Link Sütunları (8/12 Sütun, 4 Eşit Sütuna Bölünmüş, Kesikli Çizgili) */}
          <div className="md:col-span-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 md:divide-x divide-dashed divide-white/5 md:-mx-4 md:pl-4">
            {(["product", "company", "resources", "legal"] as const).map((section) => (
              <div key={section} className="space-y-4 md:px-6">
                <h3 className="text-xs font-semibold tracking-wider text-white uppercase select-none">
                  {section}
                </h3>
                <ul className="space-y-2.5">
                  {footerNavigation.links[section].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-400 hover:text-brand-primary transition-colors duration-200 antialiased"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Alt Segment: Telif Hakları ve Yasal Bilgiler (Subdued Renk) */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-md font-medium text-zinc-200">
          <div className="select-none">
            &copy; {currentYear}  CourierX · Part of Miransas
          </div>
          
          <div className="flex items-center gap-5 sm:gap-7">
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-zinc-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}