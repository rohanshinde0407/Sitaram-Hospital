"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const depts = [
  { key: "surgery",    color: "#1565C0", bg: "#EFF6FF", border: "#BFDBFE", href: "/services#dept-surgery" },
  { key: "womens",     color: "#AD1457", bg: "#FDF2F8", border: "#F9A8D4", href: "/services#dept-women" },
  { key: "proctology", color: "#C62828", bg: "#FFF5F5", border: "#FECACA", href: "/services#dept-proctology" },
  { key: "family",     color: "#2E7D32", bg: "#F0FDF4", border: "#BBF7D0", href: "/services#dept-family" },
] as const;

export default function HomeContent() {
  const t = useTranslation();
  const h = t.home;

  const deptLabels: Record<string, string> = {
    surgery:    h.departments.surgery,
    womens:     h.departments.womens,
    proctology: h.departments.proctology,
    family:     h.departments.family,
  };

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />

      {/* Trust bar */}
      <div className="bg-gradient-to-r from-[#FFF5F5] via-white to-[#FFF5F5] border-b border-red-100 py-1.5 text-center">
        <span className="text-[10px] md:text-xs font-bold tracking-wider" style={{ color: "#C62828" }}>
          {t.trustBar}
        </span>
      </div>

      <main>
        <Hero />

        {/* Sitaram Hospital departments strip */}
        <div className="bg-white py-10 md:py-14 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight" style={{ color: "#C62828" }}>
              {h.hospitalName}
            </h1>
            <p className="text-sm font-bold text-[#6B7280] mt-1 mb-8 uppercase tracking-widest">{h.city}</p>

            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-8">
              {h.tagline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {depts.map((d) => (
                <Link
                  key={d.key}
                  href={d.href}
                  className="flex items-center justify-center text-center rounded-2xl border px-4 py-6 transition-shadow hover:shadow-md"
                  style={{ background: d.bg, borderColor: d.border }}
                >
                  <span className="text-sm font-black leading-snug" style={{ color: d.color }}>
                    {deptLabels[d.key]}
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </div>

        <About />
      </main>
      <Footer />
    </>
  );
}
