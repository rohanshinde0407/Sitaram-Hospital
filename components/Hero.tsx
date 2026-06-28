"use client";

import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2, Clock, MapPin, Shield } from "lucide-react";

const pills = [
  { label: "Piles", color: "#C62828", bg: "#FFF5F5" },
  { label: "Fissure", color: "#E65100", bg: "#FFF8F4" },
  { label: "Fistula", color: "#2E7D32", bg: "#F0FDF4" },
  { label: "Pilonidal Sinus", color: "#1565C0", bg: "#EFF6FF" },
];

const checks = [
  "No Cuts · No Stitches",
  "Day Care – Home Same Day",
  "Painless & Scarless",
  "3–5 Day Recovery",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Very subtle top gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F5] via-white to-[#EFF6FF] pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-50 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-50 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="pb-12 lg:pb-20">

            {/* Eyebrow */}
            <div className="anim-up inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-5">
              <Shield size={13} className="text-[#C62828]" />
              <span className="text-[#C62828] text-xs font-bold uppercase tracking-widest">
                One-Stop Advanced Laser Proctology Centre
              </span>
            </div>

            {/* ZEN brand headline */}
            <div className="anim-up d1 mb-2">
              <div className="flex items-end flex-wrap gap-x-2 gap-y-0">
                <span
                  className="font-black leading-none tracking-tight"
                  style={{ fontSize: "clamp(3.2rem,8vw,5.5rem)", color: "#C62828" }}
                >
                  ZEN
                </span>
                <div className="mb-1.5">
                  <div className="text-[#111827] font-black uppercase tracking-[.18em] text-base md:text-xl leading-tight">
                    Laser Procto Care
                  </div>
                  <div className="h-[3px] mt-1 rounded-full bg-gradient-to-r from-[#C62828] to-[#2E7D32]" />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="anim-up d2 text-[#C62828] font-semibold italic text-base md:text-lg mb-1">
              "Number one clinic for your number two problems!"
            </p>

            <p className="anim-up d2 text-[#374151] text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Advanced Comprehensive Treatment for <strong>Piles, Fissure &amp; Fistula.</strong><br />
              Relief through Precision and Expertise with Modern Scientific Care.
            </p>

            {/* Condition pills */}
            <div className="anim-up d3 flex flex-wrap gap-2 mb-6">
              {pills.map((p) => (
                <span
                  key={p.label}
                  className="text-xs font-bold px-3.5 py-1.5 rounded-full border"
                  style={{ color: p.color, background: p.bg, borderColor: `${p.color}30` }}
                >
                  {p.label}
                </span>
              ))}
            </div>

            {/* Checkmarks */}
            <ul className="anim-up d3 grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-[#374151]">
                  <CheckCircle2 size={15} className="text-[#2E7D32] flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="anim-up d4 flex flex-wrap gap-3 mb-8">
              <a href="#appointment" className="btn btn-red">
                Book Appointment <ArrowRight size={15} />
              </a>
              <a href="tel:9422296495" className="btn btn-green">
                <Phone size={15} /> Call Dr. Ravi
              </a>
              <a href="tel:8275008768" className="btn btn-outline-red">
                <Phone size={15} /> Dr. Meena
              </a>
            </div>

            {/* OPD badge */}
            <div className="anim-up d5 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
              <Clock size={16} className="text-[#C62828]" />
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">OPD Hours</div>
                <div className="text-sm font-bold text-[#111827]">10AM–2PM &amp; 6PM–9PM</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <MapPin size={16} className="text-[#2E7D32]" />
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Location</div>
                <div className="text-sm font-bold text-[#111827]">Dhule, Maharashtra</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN – Hero Image ── */}
          <div className="relative flex items-end justify-center pb-0 lg:pb-0 anim-scale d2">

            {/* Main image frame */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-red-50 blur-2xl opacity-70" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden img-glow-blue border border-white/60">
                <Image
                  src="/img/laseev-machine.jpg"
                  alt="LASEEV Advanced Laser System"
                  width={540}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay caption bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                  <div className="text-white font-bold text-sm">LASEEV Advanced Laser System</div>
                  <div className="text-white/70 text-xs">State-of-the-art laser technology for proctology</div>
                </div>
              </div>

              {/* Floating badge – Day Care */}
              <div className="float-badge -top-4 -left-4 text-[#2E7D32] border border-green-100">
                <CheckCircle2 size={16} className="text-[#2E7D32]" />
                Day Care Procedure
              </div>

              {/* Floating badge – Painless */}
              <div className="float-badge -bottom-4 -right-4 text-[#C62828] border border-red-100" style={{ animationDelay: "1.2s" }}>
                😌 Painless Treatment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom quick-access bar ── */}
      <div className="relative border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: "📅", label: "Book Appointment", sub: "Online & Phone", href: "#appointment" },
              { icon: "🩺", label: "Our Doctors", sub: "2 Expert Proctologists", href: "#doctors" },
              { icon: "🔬", label: "Treatments", sub: "8 Advanced Procedures", href: "#treatments" },
              { icon: "📞", label: "02562-235795", sub: "Hospital Helpline", href: "tel:02562235795" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 px-4 py-4 hover:bg-red-50 transition-colors"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-xs md:text-sm font-bold text-[#111827] group-hover:text-[#C62828] transition-colors leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-400">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
