"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const HEADER_BG = "rgb(15,109,109)";

const serviceColors = [
  { color: "#1565C0", bg: "#EFF6FF", href: "/services#dept-surgery" },
  { color: "#AD1457", bg: "#FDF2F8", href: "/services#dept-women" },
  { color: "#C62828", bg: "#FFF5F5", href: "/services#dept-proctology" },
  { color: "#2E7D32", bg: "#F0FDF4", href: "/services#dept-family" },
];

export default function Header() {
  const pathname = usePathname();
  const t = useTranslation();

  const [menuOpen, setMenuOpen]                   = useState(false);
  const [scrolled, setScrolled]                   = useState(false);
  const [openDropdown, setOpenDropdown]           = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openDrop  = (label: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenDropdown(label); };
  const closeDrop = () => { closeTimer.current = setTimeout(() => setOpenDropdown(null), 150); };
  const keepDrop  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href.split("#")[0] && !href.includes("#");

  const dropdownLabel = t.nav.servicesDropdown;
  const services = [
    { label: dropdownLabel.surgery,    ...serviceColors[0] },
    { label: dropdownLabel.womens,     ...serviceColors[1] },
    { label: dropdownLabel.proctology, ...serviceColors[2] },
    { label: dropdownLabel.family,     ...serviceColors[3] },
  ];

  const navLinks = [
    { label: t.nav.home,          href: "/",              dropdown: null },
    { label: t.nav.about,         href: "/about",         dropdown: null },
    { label: t.nav.services,      href: "/services",      dropdown: services },
    { label: t.nav.ourTechnology, href: "/our-technology", dropdown: null },
    { label: t.nav.proctology,    href: "/proctology",    dropdown: null },
    { label: t.nav.ourDoctors,    href: "/our-doctors",   dropdown: null },
    { label: t.nav.gallery,       href: "/gallery",       dropdown: null },
    { label: t.nav.contact,       href: "/contact",       dropdown: null },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
        style={{
          background: HEADER_BG,
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {/* Helpline strip — desktop */}
        <div className="hidden md:block border-b" style={{ background: "rgba(0,0,0,0.15)", borderColor: "rgba(255,255,255,0.12)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 flex justify-center items-center">
            <span className="text-white/70 text-xs">{t.opd.strip} &nbsp;&nbsp;|&nbsp;&nbsp; 📍 {t.opd.location}</span>
          </div>
        </div>

        {/* Main nav row */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-[68px] gap-3">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src="/img/img1/fav.png"
                alt="Sitaram Hospital Icon"
                width={40}
                height={40}
                className="h-9 sm:h-10 md:h-11 w-auto object-contain flex-shrink-0"
                priority
              />
              <Image
                src="/img/img1/Name Sitaram Hospital.png"
                alt="Sitaram Hospital"
                width={200}
                height={40}
                className="h-5 sm:h-6 md:h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-0.5">
              {navLinks.map((l) => {
                const active   = isActive(l.href);
                const dropOpen = openDropdown === l.label;

                if (l.dropdown) {
                  return (
                    <div
                      key={l.href}
                      className="relative"
                      onMouseEnter={() => openDrop(l.label)}
                      onMouseLeave={closeDrop}
                    >
                      <button
                        className="relative flex items-center gap-1 px-3 lg:px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
                        style={{ color: active || dropOpen ? "white" : "rgba(255,255,255,0.85)" }}
                      >
                        {l.label}
                        <ChevronDown
                          size={13}
                          className="text-white/70 transition-transform duration-200"
                          style={{ transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                        <span
                          className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white transition-all duration-200 origin-left"
                          style={{ transform: active || dropOpen ? "scaleX(1)" : "scaleX(0)" }}
                        />
                      </button>

                      <div
                        className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-2xl border border-gray-100 py-2 overflow-hidden"
                        style={{
                          boxShadow:     "0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)",
                          opacity:       dropOpen ? 1 : 0,
                          transform:     dropOpen ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.97)",
                          pointerEvents: dropOpen ? "auto" : "none",
                          transition:    "opacity 0.18s ease, transform 0.18s ease",
                        }}
                        onMouseEnter={keepDrop}
                        onMouseLeave={closeDrop}
                      >
                        {l.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#374151] transition-all duration-150 hover:pl-5"
                            onMouseEnter={e => { e.currentTarget.style.color = item.color; e.currentTarget.style.background = item.bg; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "transparent"; }}
                          >
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="relative group px-3 lg:px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
                    style={{ color: active ? "white" : "rgba(255,255,255,0.85)" }}
                  >
                    <span className="group-hover:text-white transition-colors duration-200">
                      {l.label}
                    </span>
                    <span
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white transition-all duration-200 origin-left group-hover:scale-x-100"
                      style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right side: Language switcher + hamburger */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <LanguageSwitcher />
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.30)", color: "white" }}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            maxHeight:  menuOpen ? "640px" : "0",
            opacity:    menuOpen ? 1 : 0,
            transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease",
          }}
        >
          <div className="bg-white border-t" style={{ borderColor: "rgba(255,255,255,0.15)" }}>

            {/* OPD strip */}
            <div className="bg-[#F8FAFB] px-5 py-3 border-b border-gray-100 space-y-1">
              <div className="text-xs text-[#9CA3AF] flex items-center gap-2">
                🕐 <span>Mon–Sat · 10 AM–2 PM &amp; 6 PM–9 PM</span>
              </div>
              <div className="text-xs text-[#9CA3AF] flex items-center gap-2">
                📍 <span>Bhangya Maruti Chowk, Lane No. 6, Dhule</span>
              </div>
            </div>

            {/* Nav items */}
            <nav className="px-3 pt-2 pb-1">
              {navLinks.map((l) => {
                const active = isActive(l.href);

                if (l.dropdown) {
                  return (
                    <div key={l.href}>
                      <button
                        onClick={() => setMobileServicesOpen(o => !o)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold mb-1 text-[#374151] hover:bg-gray-50 transition-colors"
                      >
                        <span>{l.label}</span>
                        <ChevronDown
                          size={15}
                          className="transition-transform duration-200 text-[#9CA3AF]"
                          style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>

                      <div
                        className="overflow-hidden transition-all duration-200"
                        style={{ maxHeight: mobileServicesOpen ? "300px" : "0", opacity: mobileServicesOpen ? 1 : 0 }}
                      >
                        <div className="ml-3 mb-2 space-y-1">
                          {l.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                              style={{ color: item.color, background: item.bg }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors mb-1"
                    style={{
                      color:      active ? HEADER_BG : "#374151",
                      background: active ? "#e6f4f4" : "transparent",
                    }}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: HEADER_BG }} />}
                    {l.label}
                  </Link>
                );
              })}
            </nav>

          </div>
        </div>
      </header>
    </>
  );
}
