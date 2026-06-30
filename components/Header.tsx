"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, ChevronDown, Clock, MapPin,
  Stethoscope, Zap, FlaskConical, Activity,
  CircleDot, Scissors, Radio, Eye, Shield,
  Users, ImageIcon, CalendarCheck, Info,
} from "lucide-react";

const conditions = [
  { icon: CircleDot,    label: "Piles (Haemorrhoids)", desc: "Internal & external haemorrhoid treatment",  color: "#C62828" },
  { icon: Scissors,     label: "Fissure in Ano",        desc: "Painful anal tear — laser healing",          color: "#E65100" },
  { icon: Activity,     label: "Fistula in Ano",        desc: "Abnormal tunnel — VAAFT & FILAC closure",    color: "#2E7D32" },
  { icon: FlaskConical, label: "Pilonidal Sinus",       desc: "Coccyx cyst — minimally invasive excision",  color: "#1565C0" },
  { icon: Shield,       label: "Anal Stenosis",         desc: "Narrowing of anal canal — dilatation",       color: "#7C3AED" },
  { icon: Stethoscope,  label: "Perineal Tear / RVF",  desc: "Recto-vaginal fistula & perineal tears",     color: "#0E7490" },
];

const treatments = [
  { icon: Zap,          label: "Advanced Laser",           desc: "LASEEV & Sabrina laser for piles, fissure, fistula", color: "#C62828" },
  { icon: Activity,     label: "FILAC",                    desc: "Fistula Laser Closure — sphincter-preserving",        color: "#2E7D32" },
  { icon: Eye,          label: "VAAFT",                    desc: "Video-Assisted Anal Fistula Treatment",               color: "#1565C0" },
  { icon: Radio,        label: "DGHAL-RAR",                desc: "Doppler-guided haemorrhoidal artery ligation",        color: "#0E7490" },
  { icon: FlaskConical, label: "Radio Frequency Ablation", desc: "Dr.Oppel RFA — targeted tissue shrinkage",            color: "#E65100" },
  { icon: CircleDot,    label: "Sclerotherapy",            desc: "Injection treatment for Grade I–II piles",            color: "#7C3AED" },
  { icon: Eye,          label: "Ano-Recto Videoscopy",     desc: "Full-HD video-guided examination & diagnosis",        color: "#047857" },
  { icon: Stethoscope,  label: "Anal Sphincterometry",     desc: "Sphincter pressure measurement & analysis",           color: "#B45309" },
];

const aboutItems = [
  { icon: Info,          label: "About the Clinic", desc: "Our story, mission & technology",       href: "/about" },
  { icon: Users,         label: "Our Doctors",       desc: "Dr. Ravindra & Dr. Meena Wankhedkar",  href: "/about#ravi" },
  { icon: ImageIcon,     label: "Photo Gallery",     desc: "Equipment & medical illustrations",     href: "/gallery" },
  { icon: CalendarCheck, label: "Book Appointment",  desc: "Schedule your consultation today",      href: "/#appointment" },
];

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/#contact" },
];

type MenuKey = "about" | "conditions" | "treatments";

const DROPDOWN_WIDTHS: Record<MenuKey, number> = {
  about: 260,
  conditions: 520,
  treatments: 560,
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [dropLeft, setDropLeft] = useState(0);

  const headerRef  = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Partial<Record<MenuKey, HTMLDivElement | null>>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Position calculation ── */
  const calcLeft = (key: MenuKey) => {
    const trigger = triggerRefs.current[key];
    const header  = headerRef.current;
    if (!trigger || !header) return 0;
    const tRect = trigger.getBoundingClientRect();
    const hRect = header.getBoundingClientRect();
    const w = DROPDOWN_WIDTHS[key];
    const raw = tRect.left - hRect.left;
    // clamp so dropdown doesn't overflow the right edge
    const maxLeft = hRect.width - w - 8;
    return Math.max(0, Math.min(raw, maxLeft));
  };

  /* ── Open / close with delay ── */
  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropLeft(calcLeft(key));
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  /* ── Close on outside click & Escape ── */
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (
        headerRef.current && !headerRef.current.contains(e.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveMenu(null); };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const navCls = (key?: MenuKey) =>
    `flex items-center gap-0.5 px-2 md:px-3 lg:px-4 py-1 md:py-1.5 font-semibold text-[11px] md:text-xs lg:text-sm rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
      activeMenu === key
        ? "text-[#C62828] bg-red-50"
        : "text-[#374151] hover:text-[#C62828] hover:bg-red-50"
    }`;

  return (
    <>
      {/* ── Top info bar — md+ ── */}
      <div className="hidden md:block bg-[#111827] text-white/75 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock size={11} className="opacity-50" />OPD: Mon–Sat &nbsp;·&nbsp; 10AM–2PM &amp; 6PM–9PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="opacity-50" />Bhangya Maruti Chowk, Lane No. 6, Dhule
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:9422296495" className="hover:text-white transition-colors font-semibold">Dr. Ravindra: 94222 96495</a>
            <span className="opacity-20">|</span>
            <a href="tel:8275008768" className="hover:text-white transition-colors font-semibold">Dr. Meena: 82750 08768</a>
          </div>
        </div>
      </div>

      {/* ── Helpline strip ── */}
      <div className="bg-[#C62828] text-white text-center text-[11px] md:text-xs py-1.5 font-semibold">
        📞&nbsp;
        <a href="tel:02562235795" className="font-black underline">02562-235795</a>
        <span className="mx-2 opacity-40">|</span>
        <a href="tel:9421279065" className="font-black underline">9421279065</a>
        <span className="mx-2 opacity-40">|</span>
        <span className="italic text-white/75">Sunday Closed</span>
      </div>

      {/* ── Main header ── */}
      {/* position: relative so dropdown panels can be absolute to this */}
      <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" style={{ position: "relative" }}>
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <div className="flex items-center h-12 md:h-[66px] gap-2 md:gap-3">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/img/img1/Sitaram%20Hospital%20Name%20with%20W%20Logo%2001.png"
                alt="Sitaram Hospital"
                width={210}
                height={50}
                className="object-contain h-8 md:h-11 w-auto"
                priority
              />
            </Link>

            <div className="hidden md:block w-px h-7 bg-gray-200 flex-shrink-0" />

            {/* ── Nav — horizontally scrollable on small screens ──
                IMPORTANT: dropdown panels are NOT inside this container,
                so overflow-x:auto does not clip them. */}
            <nav className="flex-1 overflow-x-auto" style={{ scrollbarWidth: "none", overflowY: "visible" }}>
              <div className="flex items-center min-w-max gap-0.5">

                {navLinks.map(l => (
                  <Link key={l.label} href={l.href} className={navCls()}>
                    {l.label}
                  </Link>
                ))}

                {/* About trigger */}
                <div
                  ref={el => { triggerRefs.current.about = el; }}
                  onMouseEnter={() => openMenu("about")}
                  onMouseLeave={scheduleClose}
                >
                  <button className={navCls("about")}>
                    About
                    <ChevronDown size={10} className={`hidden md:inline transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Conditions trigger */}
                <div
                  ref={el => { triggerRefs.current.conditions = el; }}
                  onMouseEnter={() => openMenu("conditions")}
                  onMouseLeave={scheduleClose}
                >
                  <button className={navCls("conditions")}>
                    Conditions
                    <ChevronDown size={10} className={`hidden md:inline transition-transform duration-200 ${activeMenu === "conditions" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Treatments trigger */}
                <div
                  ref={el => { triggerRefs.current.treatments = el; }}
                  onMouseEnter={() => openMenu("treatments")}
                  onMouseLeave={scheduleClose}
                >
                  <button className={navCls("treatments")}>
                    Treatments
                    <ChevronDown size={10} className={`hidden md:inline transition-transform duration-200 ${activeMenu === "treatments" ? "rotate-180" : ""}`} />
                  </button>
                </div>

              </div>
            </nav>

            {/* Call CTA */}
            <a
              href="tel:9421279065"
              className="flex-shrink-0 flex items-center gap-1.5 bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold text-[11px] md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl transition-colors"
            >
              <Phone size={12} className="md:hidden" />
              <Phone size={14} className="hidden md:block" />
              <span className="hidden sm:inline">Call</span>
              <span className="hidden lg:inline">&nbsp;9421279065</span>
            </a>
          </div>
        </div>

        {/* ── Dropdown panels — rendered HERE, outside the overflow nav ── */}
        {activeMenu && (
          <div
            ref={dropdownRef}
            className="absolute top-full z-[999] mt-1"
            style={{ left: dropLeft, width: DROPDOWN_WIDTHS[activeMenu] }}
            onMouseEnter={keepOpen}
            onMouseLeave={scheduleClose}
          >
            {/* About panel */}
            {activeMenu === "about" && (
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="p-2">
                  {aboutItems.map(({ icon: Icon, label, desc, href }) => (
                    <Link key={label} href={href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50 group transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 group-hover:bg-[#C62828]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon size={14} className="text-[#C62828]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#111827] text-xs group-hover:text-[#C62828] transition-colors">{label}</div>
                        <div className="text-[10px] text-[#9CA3AF] mt-0.5">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions panel */}
            {activeMenu === "conditions" && (
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#C62828] to-[#8E0000] px-5 py-3">
                  <div className="text-white font-bold text-sm">Conditions We Treat</div>
                  <div className="text-white/70 text-xs mt-0.5">Expert laser treatment for all ano-rectal conditions</div>
                </div>
                <div className="p-3 grid grid-cols-2 gap-1">
                  {conditions.map(({ icon: Icon, label, desc, color }) => (
                    <Link key={label} href="/#conditions"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                        <Icon size={14} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#111827] text-xs group-hover:text-[#C62828] transition-colors leading-snug">{label}</div>
                        <div className="text-[10px] text-[#9CA3AF] mt-0.5 leading-relaxed">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Treatments panel */}
            {activeMenu === "treatments" && (
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] px-5 py-3">
                  <div className="text-white font-bold text-sm">Our Laser Treatments</div>
                  <div className="text-white/70 text-xs mt-0.5">8 advanced procedures — Day Care, painless &amp; scarless</div>
                </div>
                <div className="p-3 grid grid-cols-2 gap-1">
                  {treatments.map(({ icon: Icon, label, desc, color }) => (
                    <Link key={label} href="/#treatments"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                        <Icon size={14} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#111827] text-xs group-hover:text-[#2E7D32] transition-colors leading-snug">{label}</div>
                        <div className="text-[10px] text-[#9CA3AF] mt-0.5 leading-relaxed">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}
