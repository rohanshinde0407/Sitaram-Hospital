"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone, Menu, X, ChevronDown, Clock, MapPin,
  Stethoscope, Zap, FlaskConical, Activity,
  CircleDot, Scissors, Radio, Eye, Shield,
  Users, ImageIcon, CalendarCheck, Info,
} from "lucide-react";

/* ─── Nav data ─────────────────────────────────────────────── */
const conditions = [
  { icon: CircleDot,   label: "Piles (Haemorrhoids)", desc: "Internal & external haemorrhoid treatment",   color: "#C62828" },
  { icon: Scissors,    label: "Fissure in Ano",        desc: "Painful anal tear — laser healing",           color: "#E65100" },
  { icon: Activity,    label: "Fistula in Ano",        desc: "Abnormal tunnel — VAAFT & FILAC closure",     color: "#2E7D32" },
  { icon: FlaskConical,label: "Pilonidal Sinus",       desc: "Coccyx cyst — minimally invasive excision",   color: "#1565C0" },
  { icon: Shield,      label: "Anal Stenosis",         desc: "Narrowing of anal canal — dilatation",         color: "#7C3AED" },
  { icon: Stethoscope, label: "Perineal Tear / RVF",  desc: "Recto-vaginal fistula & perineal tears",       color: "#0E7490" },
];

const treatments = [
  { icon: Zap,         label: "Advanced Laser",            desc: "LASEEV & Sabrina laser for piles, fissure, fistula",  color: "#C62828" },
  { icon: Activity,    label: "FILAC",                     desc: "Fistula Laser Closure — sphincter-preserving",         color: "#2E7D32" },
  { icon: Eye,         label: "VAAFT",                     desc: "Video-Assisted Anal Fistula Treatment",                color: "#1565C0" },
  { icon: Radio,       label: "DGHAL-RAR",                 desc: "Doppler-guided haemorrhoidal artery ligation",        color: "#0E7490" },
  { icon: FlaskConical,label: "Radio Frequency Ablation",  desc: "Dr.Oppel RFA — targeted tissue shrinkage",            color: "#E65100" },
  { icon: CircleDot,   label: "Sclerotherapy",             desc: "Injection treatment for Grade I–II piles",            color: "#7C3AED" },
  { icon: Eye,         label: "Ano-Recto Videoscopy",      desc: "Full-HD video-guided examination & diagnosis",        color: "#047857" },
  { icon: Stethoscope, label: "Anal Sphincterometry",      desc: "Sphincter pressure measurement & analysis",           color: "#B45309" },
];

const aboutItems = [
  { icon: Info,         label: "About the Clinic",  desc: "Our story, mission & technology",    href: "/about" },
  { icon: Users,        label: "Our Doctors",        desc: "Dr. Ravi & Dr. Meena Wankhedkar",   href: "/about#ravi" },
  { icon: ImageIcon,    label: "Photo Gallery",      desc: "Equipment & medical illustrations",  href: "/gallery" },
  { icon: CalendarCheck,label: "Book Appointment",  desc: "Schedule your consultation today",    href: "/#appointment" },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeMenu,  setActiveMenu]  = useState<string | null>(null);
  const [mobileExp,   setMobileExp]   = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const open  = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(key); };
  const close = ()            => { closeTimer.current = setTimeout(() => setActiveMenu(null), 120); };

  return (
    <>
      {/* ── Top info bar ── */}
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
            <a href="tel:9422296495" className="hover:text-white transition-colors font-semibold">Dr. Ravi: 94222 96495</a>
            <span className="opacity-20">|</span>
            <a href="tel:8275008768" className="hover:text-white transition-colors font-semibold">Dr. Meena: 82750 08768</a>
          </div>
        </div>
      </div>

      {/* ── Helpline strip ── */}
      <div className="bg-[#C62828] text-white text-center text-xs py-1.5 font-semibold">
        📞&nbsp;
        <a href="tel:02562235795" className="font-black underline">02562-235795</a>
        <span className="mx-2 opacity-40">|</span>
        <a href="tel:9421279065"  className="font-black underline">9421279065</a>
        <span className="mx-2 opacity-40">|</span>
        <span className="italic text-white/75">Sunday Closed</span>
      </div>

      {/* ── Main header ── */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-xl border-b-0" : "border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#C62828] to-[#8E0000] flex items-center justify-center text-white font-black text-lg shadow-sm flex-shrink-0">
                S
              </div>
              <div className="text-[#111827] font-black text-base md:text-lg leading-none tracking-tight uppercase">
                Sitaram Hospital
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center">

              {/* Home */}
              <Link href="/"
                className="px-4 py-2 text-[#374151] hover:text-[#C62828] font-semibold text-sm transition-colors rounded-lg hover:bg-red-50">
                Home
              </Link>

              {/* About ▾ */}
              <div className="relative" onMouseEnter={() => open("about")} onMouseLeave={close}>
                <button className={`flex items-center gap-1 px-4 py-2 font-semibold text-sm rounded-lg transition-colors ${activeMenu === "about" ? "text-[#C62828] bg-red-50" : "text-[#374151] hover:text-[#C62828] hover:bg-red-50"}`}>
                  About Us <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`} />
                </button>
                {activeMenu === "about" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    onMouseEnter={() => open("about")} onMouseLeave={close}
                  >
                    <div className="p-2">
                      {aboutItems.map(({ icon: Icon, label, desc, href }) => (
                        <Link key={label} href={href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50 group transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="w-9 h-9 rounded-lg bg-red-50 group-hover:bg-[#C62828]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon size={16} className="text-[#C62828]" />
                          </div>
                          <div>
                            <div className="font-bold text-[#111827] text-sm group-hover:text-[#C62828] transition-colors">{label}</div>
                            <div className="text-[11px] text-[#9CA3AF] mt-0.5">{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Conditions ▾ — mega menu */}
              <div className="relative" onMouseEnter={() => open("conditions")} onMouseLeave={close}>
                <button className={`flex items-center gap-1 px-4 py-2 font-semibold text-sm rounded-lg transition-colors ${activeMenu === "conditions" ? "text-[#C62828] bg-red-50" : "text-[#374151] hover:text-[#C62828] hover:bg-red-50"}`}>
                  Conditions <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === "conditions" ? "rotate-180" : ""}`} />
                </button>
                {activeMenu === "conditions" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                    onMouseEnter={() => open("conditions")} onMouseLeave={close}
                  >
                    {/* Header strip */}
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
                            <Icon size={15} style={{ color }} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#111827] text-xs group-hover:text-[#C62828] transition-colors leading-snug">{label}</div>
                            <div className="text-[10px] text-[#9CA3AF] mt-0.5 leading-relaxed">{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-5 py-3 bg-gray-50/50">
                      <Link href="/#appointment"
                        className="text-xs font-bold text-[#C62828] hover:underline flex items-center gap-1"
                        onClick={() => setActiveMenu(null)}
                      >
                        Book a consultation for any of these conditions →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Treatments ▾ — mega menu */}
              <div className="relative" onMouseEnter={() => open("treatments")} onMouseLeave={close}>
                <button className={`flex items-center gap-1 px-4 py-2 font-semibold text-sm rounded-lg transition-colors ${activeMenu === "treatments" ? "text-[#C62828] bg-red-50" : "text-[#374151] hover:text-[#C62828] hover:bg-red-50"}`}>
                  Treatments <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === "treatments" ? "rotate-180" : ""}`} />
                </button>
                {activeMenu === "treatments" && (
                  <div
                    className="absolute top-full left-[-180px] mt-2 w-[620px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                    onMouseEnter={() => open("treatments")} onMouseLeave={close}
                  >
                    <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] px-5 py-3">
                      <div className="text-white font-bold text-sm">Our Laser Treatments</div>
                      <div className="text-white/70 text-xs mt-0.5">8 advanced procedures — all Day Care, painless &amp; scarless</div>
                    </div>
                    <div className="p-3 grid grid-cols-2 gap-1">
                      {treatments.map(({ icon: Icon, label, desc, color }) => (
                        <Link key={label} href="/#treatments"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                            <Icon size={15} style={{ color }} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#111827] text-xs group-hover:text-[#2E7D32] transition-colors leading-snug">{label}</div>
                            <div className="text-[10px] text-[#9CA3AF] mt-0.5 leading-relaxed">{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-5 py-3 bg-gray-50/50 flex items-center justify-between">
                      <Link href="/gallery"
                        className="text-xs font-bold text-[#2E7D32] hover:underline flex items-center gap-1"
                        onClick={() => setActiveMenu(null)}
                      >
                        View our equipment gallery →
                      </Link>
                      <Link href="/#appointment"
                        className="text-xs bg-[#2E7D32] text-white font-bold px-3 py-1.5 rounded-lg hover:bg-[#1B5E20] transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Doctors */}
              <Link href="/#doctors"
                className="px-4 py-2 text-[#374151] hover:text-[#C62828] font-semibold text-sm transition-colors rounded-lg hover:bg-red-50">
                Our Doctors
              </Link>

              {/* Contact */}
              <Link href="/#contact"
                className="px-4 py-2 text-[#374151] hover:text-[#C62828] font-semibold text-sm transition-colors rounded-lg hover:bg-red-50">
                Contact
              </Link>
            </nav>

            {/* CTA — empty slot kept for layout balance */}
            <div className="hidden lg:block w-4" />

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-[#374151] rounded-lg hover:bg-gray-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile nav ── */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[calc(1.5rem+3.5rem+2.5rem)] bg-white z-40 overflow-y-auto">
            <nav className="p-4">

              {/* Simple links */}
              {[
                { label: "Home",        href: "/" },
                { label: "Our Doctors", href: "/#doctors" },
                { label: "Gallery",     href: "/gallery" },
                { label: "About Us",    href: "/about" },
                { label: "Contact",     href: "/#contact" },
              ].map(link => (
                <div key={link.label}>
                  <Link href={link.href}
                    className="block py-3 px-3 text-[#111827] font-semibold text-base hover:text-[#C62828] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >{link.label}</Link>
                  <div className="border-b border-gray-100" />
                </div>
              ))}

              {/* Conditions accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-3 text-[#111827] font-semibold text-base"
                  onClick={() => setMobileExp(mobileExp === "conditions" ? null : "conditions")}
                >
                  Conditions
                  <ChevronDown size={15} className={`text-gray-400 transition-transform ${mobileExp === "conditions" ? "rotate-180" : ""}`} />
                </button>
                {mobileExp === "conditions" && (
                  <div className="ml-3 border-l-2 border-red-100 pl-3 pb-2 space-y-1">
                    {conditions.map(c => (
                      <Link key={c.label} href="/#conditions"
                        className="flex items-center gap-2 py-2 text-sm text-[#374151] hover:text-[#C62828] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="border-b border-gray-100" />
              </div>

              {/* Treatments accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-3 text-[#111827] font-semibold text-base"
                  onClick={() => setMobileExp(mobileExp === "treatments" ? null : "treatments")}
                >
                  Treatments
                  <ChevronDown size={15} className={`text-gray-400 transition-transform ${mobileExp === "treatments" ? "rotate-180" : ""}`} />
                </button>
                {mobileExp === "treatments" && (
                  <div className="ml-3 border-l-2 border-green-100 pl-3 pb-2 space-y-1">
                    {treatments.map(t => (
                      <Link key={t.label} href="/#treatments"
                        className="flex items-center gap-2 py-2 text-sm text-[#374151] hover:text-[#2E7D32] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
                        {t.label}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="border-b border-gray-100" />
              </div>

              {/* CTAs */}
              <div className="pt-5 space-y-3">
                <a href="/#appointment" className="btn btn-red w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Book Appointment
                </a>
                <a href="tel:9422296495" className="btn btn-green w-full justify-center">
                  <Phone size={15} />Dr. Ravi: 94222 96495
                </a>
                <a href="tel:8275008768" className="btn btn-outline-red w-full justify-center">
                  <Phone size={15} />Dr. Meena: 82750 08768
                </a>
              </div>

              {/* Info card */}
              <div className="mt-5 p-4 bg-gray-50 rounded-2xl text-sm text-[#6B7280] space-y-2">
                <p className="flex items-center gap-2"><Clock size={13} />Mon–Sat: 10AM–2PM &amp; 6PM–9PM</p>
                <p className="flex items-center gap-2"><MapPin size={13} />Bhangya Maruti Chowk, Lane No. 6, Dhule</p>
                <p className="text-[#C62828] text-xs font-semibold">⚠ Sunday Closed</p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
