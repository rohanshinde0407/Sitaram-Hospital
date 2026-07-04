import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* ── Main footer ── */}
      <div className="bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4">
              <Image
                src="/img/img1/Sitaram%20Hospital%20Name%20with%20W%20Logo%2002.png"
                alt="Sitaram Hospital"
                width={180}
                height={55}
                className="h-11 w-auto object-contain"
              />
              <p className="text-white/50 text-sm leading-relaxed">
                Advanced Laser Treatment for Piles, Fissure &amp; Fistula — Day Care Procedures, Home Same Day.
              </p>
              <p className="text-white/40 text-xs italic border-l-2 border-white/20 pl-3">
                &ldquo;Number one clinic for your number two problems!&rdquo;
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home",         href: "/" },
                  { label: "About Us",     href: "/about" },
                  { label: "Services",     href: "/services" },
                  { label: "Our Doctors",  href: "/our-doctors" },
                  { label: "Contact Us",   href: "/contact" },
                  { label: "Gallery",      href: "/gallery" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Conditions Treated</h4>
              <ul className="space-y-2.5">
                {[
                  "Piles (Haemorrhoids)",
                  "Fissure in Ano",
                  "Fistula in Ano",
                  "Pilonidal Sinus",
                  "Perineal Tear / RVF",
                  "Anal Stenosis",
                ].map((c) => (
                  <li key={c}>
                    <Link href="/#conditions" className="text-white/50 hover:text-white text-sm transition-colors">
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Contact Us</h4>

              <a href="tel:9421279065" className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors">
                <Phone size={13} className="text-white/40 flex-shrink-0" />
                94212 79065
              </a>
              <a href="tel:02562235795" className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors">
                <Phone size={13} className="text-white/40 flex-shrink-0" />
                02562 – 235795 / 297695
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={13} className="text-white/40 flex-shrink-0 mt-0.5" />
                Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001
              </div>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <Clock size={13} className="text-white/40 flex-shrink-0 mt-0.5" />
                <div>
                  Mon–Sat: 10 AM–2 PM &amp; 6–9 PM<br />
                  <span className="text-red-400 text-xs font-semibold">Sunday Closed</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
            <span>© 2025 ZEN Laser Procto Care · Sitaram Hospital, Dhule. All rights reserved.</span>
            <span>www.sita-ramhospital.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
