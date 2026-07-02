"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname  = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* Shadow on scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Red accent line */}
      <div className="bg-[#C62828] h-1 w-full" />

      <header
        className="sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)" }}
      >
        {/* ── Helpline strip — desktop only ── */}
        <div className="hidden md:block bg-[#F8FAFB] border-b border-gray-100 text-xs text-[#6B7280]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 flex justify-between items-center">
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

        {/* ── Main nav row ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/img/img1/Sitaram%20Hospital%20Name%20with%20W%20Logo%2001.png"
                alt="Sitaram Hospital"
                width={200}
                height={48}
                className="h-8 sm:h-9 md:h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-0.5 lg:gap-1">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="relative px-4 lg:px-5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 group"
                    style={{ color: active ? "#C62828" : "#374151" }}
                  >
                    <span
                      className="absolute inset-0 rounded-lg transition-opacity duration-200"
                      style={{ background: "#FFF5F5", opacity: active ? 1 : 0 }}
                      aria-hidden
                    />
                    <span className="relative z-10 group-hover:text-[#C62828] transition-colors duration-200">
                      {l.label}
                    </span>
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

            {/* Right — Call CTA + hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="tel:9421279065"
                className="flex items-center gap-1.5 bg-[#C62828] hover:bg-[#B71C1C] active:bg-[#8E0000] text-white font-bold text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-xl transition-colors duration-150 shadow-sm"
              >
                <Phone size={13} />
                <span className="hidden sm:inline">94212 79065</span>
                <span className="sm:hidden">Call</span>
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-[#374151] hover:bg-gray-50 transition-colors duration-150"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span
                  className="transition-all duration-200"
                  style={{ opacity: menuOpen ? 0 : 1, position: menuOpen ? "absolute" : "static" }}
                >
                  <Menu size={18} />
                </span>
                <span
                  className="transition-all duration-200"
                  style={{ opacity: menuOpen ? 1 : 0, position: menuOpen ? "static" : "absolute" }}
                >
                  <X size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu — smooth slide ── */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            maxHeight: menuOpen ? "420px" : "0",
            opacity: menuOpen ? 1 : 0,
            transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease",
          }}
        >
          <div className="bg-white border-t border-gray-100">

            {/* OPD info */}
            <div className="bg-[#F8FAFB] px-5 py-3 border-b border-gray-100 space-y-1">
              <div className="text-xs text-[#9CA3AF] flex items-center gap-2">
                🕐 <span>Mon–Sat · 10 AM–2 PM &amp; 6 PM–9 PM</span>
              </div>
              <div className="text-xs text-[#9CA3AF] flex items-center gap-2">
                📍 <span>Bhangya Maruti Chowk, Lane No. 6, Dhule</span>
              </div>
            </div>

            {/* Nav links */}
            <nav className="px-3 pt-2 pb-1">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-150 mb-1"
                    style={{
                      color:      active ? "#C62828" : "#374151",
                      background: active ? "#FFF5F5" : "transparent",
                    }}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] flex-shrink-0" />}
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Helpline CTA */}
            <div className="px-4 pb-4 pt-1">
              <a
                href="tel:9421279065"
                className="flex items-center justify-center gap-2 w-full bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold text-sm py-3 rounded-xl transition-colors duration-150"
              >
                <Phone size={14} /> Helpline: 94212 79065
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
