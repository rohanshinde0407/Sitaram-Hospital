"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Thin red top accent bar ── */}
      <div className="bg-[#C62828] h-1 w-full" />

      {/* ── Main sticky header ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">

        {/* Helpline strip */}
        <div className="hidden md:block bg-[#F8FAFB] border-b border-gray-100 text-xs text-[#6B7280]">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-1.5 flex justify-between items-center">
            <span>
              OPD: Mon–Sat &nbsp;·&nbsp; 10 AM–2 PM &amp; 6 PM–9 PM
              &nbsp;&nbsp;|&nbsp;&nbsp;
              📍 Bhangya Maruti Chowk, Lane No. 6, Dhule
            </span>
            <a href="tel:9421279065" className="hover:text-[#C62828] transition-colors font-medium">
              Helpline: 94212 79065
            </a>
          </div>
        </div>

        {/* Nav row */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center h-16 md:h-[70px]">

            {/* Logo — left */}
            <Link href="/" className="flex-shrink-0 mr-8">
              <Image
                src="/img/img1/Sitaram%20Hospital%20Name%20with%20W%20Logo%2001.png"
                alt="Sitaram Hospital"
                width={210}
                height={50}
                className="h-9 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Nav — centred */}
            <nav className="flex-1 flex items-center justify-center gap-1">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="relative px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 group"
                    style={{ color: active ? "#C62828" : "#374151" }}
                  >
                    {/* Hover / active background */}
                    <span
                      className="absolute inset-0 rounded-lg transition-opacity duration-200"
                      style={{
                        background: "#FFF5F5",
                        opacity: active ? 1 : 0,
                      }}
                      aria-hidden
                    />

                    {/* Label */}
                    <span className="relative z-10 group-hover:text-[#C62828] transition-colors duration-200">
                      {l.label}
                    </span>

                    {/* Active underline dot */}
                    {active && (
                      <span
                        className="absolute left-1/2 -translate-x-1/2 -bottom-px h-0.5 w-5 rounded-full"
                        style={{ background: "#C62828" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Call CTA — right */}
            <a
              href="tel:9421279065"
              className="flex-shrink-0 flex items-center gap-2 bg-[#C62828] hover:bg-[#B71C1C] active:bg-[#8E0000] text-white font-bold text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-xl transition-colors duration-150 shadow-sm ml-8"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">94212 79065</span>
              <span className="sm:hidden">Call Now</span>
            </a>

          </div>
        </div>
      </header>
    </>
  );
}
