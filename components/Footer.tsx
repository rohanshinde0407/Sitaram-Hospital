import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const conditions = [
  { label: "Piles (Haemorrhoids)", href: "/#conditions" },
  { label: "Fissure in Ano", href: "/#conditions" },
  { label: "Fistula in Ano", href: "/#conditions" },
  { label: "Pilonidal Sinus", href: "/#conditions" },
  { label: "Anal Stenosis", href: "/#conditions" },
  { label: "Perineal Tear / RVF", href: "/#conditions" },
];

const treatmentLinks = [
  { label: "Advanced Laser Procedures", href: "/#treatments" },
  { label: "FILAC – Fistula Laser Closure", href: "/#treatments" },
  { label: "VAAFT", href: "/#treatments" },
  { label: "DGHAL-RAR (Doppler)", href: "/#treatments" },
  { label: "Radio Frequency Ablation", href: "/#treatments" },
  { label: "Sclerotherapy", href: "/#treatments" },
  { label: "Ano-Recto Videoscopy", href: "/#treatments" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/#contact" },
];

const stats = [
  { val: "40+", label: "Years Experience" },
  { val: "Day Care", label: "Same-day Discharge" },
  { val: "8+", label: "Advanced Procedures" },
  { val: "100%", label: "Confidential" },
];

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8E0000]">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/[0.02]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-white/15 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Start Your Recovery Today
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2">
                Don&apos;t Suffer in Silence
              </h2>
              <p className="text-white/75 text-base max-w-lg">
                Expert laser treatment for Piles, Fissure &amp; Fistula. Day care procedures — home within hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:9421279065"
                className="flex items-center justify-center gap-2 bg-white text-[#C62828] font-bold px-6 py-3.5 rounded-xl hover:bg-red-50 transition-colors text-sm shadow-lg">
                <Phone size={15} />
                Call 9421279065
              </a>
              <a href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/15 border border-white/30 hover:bg-white/25 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors">
                WhatsApp Us →
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/15">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.val}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-[#C62828] to-[#8E0000] rounded-xl flex items-center justify-center font-black text-base shadow-md">
                  Z
                </div>
                <div>
                  <div className="text-[#EF5350] font-black text-xl leading-none tracking-tight">ZEN</div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-[.2em]">Laser Procto Care</div>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                Advanced Comprehensive Treatment for Piles, Fissure &amp; Fistula — Relief Through Precision and Expertise.
              </p>

              <p className="text-[#EF5350]/70 text-xs italic font-medium border-l-2 border-[#EF5350]/30 pl-3">
                &ldquo;Number one clinic for your number two problems!&rdquo;
              </p>

              {/* Hospital card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5">
                <div className="font-bold text-white text-sm">Sitaram Hospital</div>
                <p className="text-white/40 text-xs">Surgical · Maternity · Family Physician</p>
                <div className="flex items-start gap-2 text-white/55 text-xs">
                  <MapPin size={11} className="mt-0.5 flex-shrink-0 text-[#EF5350]" />
                  Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001
                </div>
                <div className="flex items-center gap-2 text-white/55 text-xs">
                  <Clock size={11} className="text-[#4ade80]" />
                  Mon–Sat: 10 AM–2 PM &amp; 6–9 PM
                </div>
                <div className="text-red-400 text-xs font-semibold">⚠ Sunday Closed</div>
              </div>

              {/* Website link */}
              <a href="http://www.sitaramhospital.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/40 hover:text-white/80 text-xs transition-colors">
                <ExternalLink size={11} />
                www.sitaramhospital.com
              </a>
            </div>

            {/* Quick links + Conditions */}
            <div className="space-y-7">
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#EF5350] rounded-full" />
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}
                        className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                        <span className="text-[#EF5350] text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#EF5350] rounded-full" />
                  Conditions Treated
                </h4>
                <ul className="space-y-2">
                  {conditions.map((c) => (
                    <li key={c.label}>
                      <Link href={c.href}
                        className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                        <span className="text-[#EF5350] text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#4ade80] rounded-full" />
                Our Treatments
              </h4>
              <ul className="space-y-2">
                {treatmentLinks.map((t) => (
                  <li key={t.label}>
                    <Link href={t.href}
                      className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                      <span className="text-[#4ade80] text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#60a5fa] rounded-full" />
                  Contact Doctors
                </h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/8">
                    <div className="text-[#EF5350] text-xs font-bold mb-1">Dr. Ravindra Wankhedkar</div>
                    <div className="text-[9px] text-white/40 mb-1.5">Senior Laser Proctologist</div>
                    <a href="tel:9422296495" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors">
                      <Phone size={12} className="text-[#EF5350]" />
                      94222 96495
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/8">
                    <div className="text-[#4ade80] text-xs font-bold mb-1">Dr. Meena Wankhedkar</div>
                    <div className="text-[9px] text-white/40 mb-1.5">Proctologist &amp; Ano-Rectal Specialist</div>
                    <a href="tel:8275008768" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors">
                      <Phone size={12} className="text-[#4ade80]" />
                      82750 08768
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/8">
                    <div className="text-white/50 text-xs font-bold mb-1.5">Hospital Helplines</div>
                    <a href="tel:02562235795" className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors">
                      <Phone size={12} className="text-[#60a5fa]" />
                      02562 – 235795 / 297695
                    </a>
                    <a href="tel:9421279065" className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors mt-1">
                      <Phone size={12} className="text-[#60a5fa]" />
                      94212 79065
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:cearsdhule@gmail.com"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                <Mail size={13} className="text-[#a78bfa]" />
                cearsdhule@gmail.com
              </a>

              {/* OPD Summary */}
              <div className="bg-gradient-to-br from-[#1B5E20]/40 to-[#2E7D32]/20 border border-green-900/40 rounded-xl p-4">
                <div className="text-[#4ade80] text-xs font-bold uppercase tracking-wider mb-2">OPD Hours</div>
                <div className="text-white/80 text-sm font-semibold">10:00 AM – 2:00 PM</div>
                <div className="text-white/80 text-sm font-semibold">6:00 PM – 9:00 PM</div>
                <div className="text-white/40 text-xs mt-1">Monday – Saturday only</div>
                <div className="text-red-400 text-xs font-semibold mt-1">⚠ Sunday Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-white/30 text-xs text-center sm:text-left">
              © 2025 Zen Laser Procto Care · Sitaram Hospital, Dhule. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-white/30 text-xs">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <span className="opacity-30">|</span>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
              <span className="opacity-30">|</span>
              <span>Designed for ZEN Laser Procto Care</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
