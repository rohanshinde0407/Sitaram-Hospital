import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Spacer for fixed header: mobile h-14 (56px), desktop helpline+nav ≈ h-24 (96px) */}
      <div className="h-14 md:h-24" />

      {/* ── Trust bar ── */}
      <div className="bg-gradient-to-r from-[#FFF5F5] via-white to-[#FFF5F5] border-b border-red-100 py-1.5 text-center">
        <span className="text-[10px] md:text-xs font-bold tracking-wider" style={{ color: "#C62828" }}>
          40 Years of Trusted Care &nbsp;·&nbsp; Comprehensive Care &nbsp;·&nbsp; All Under One Roof
        </span>
      </div>

      <main>
        <Hero />

        {/* ── Sitaram Hospital departments strip ── */}
        <div className="bg-white py-10 md:py-14 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight" style={{ color: "#C62828" }}>
              Sitaram Hospital
            </h2>
            <p className="text-sm font-bold text-[#6B7280] mt-1 mb-8 uppercase tracking-widest">Dhule</p>

            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-8">
              Forty years of Trusted, Comprehensive &amp; Advanced Care with Human Touch
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Surgery Department",    color: "#1565C0", bg: "#EFF6FF", border: "#BFDBFE", href: "/services#dept-surgery" },
                { label: "Women's Department",    color: "#AD1457", bg: "#FDF2F8", border: "#F9A8D4", href: "/services#dept-women" },
                { label: "Proctology Department", color: "#C62828", bg: "#FFF5F5", border: "#FECACA", href: "/services#dept-proctology" },
                { label: "Family Physician",      color: "#2E7D32", bg: "#F0FDF4", border: "#BBF7D0", href: "/services#dept-family" },
              ].map((d) => (
                <Link
                  key={d.label}
                  href={d.href}
                  className="flex items-center justify-center text-center rounded-2xl border px-4 py-6 transition-shadow hover:shadow-md"
                  style={{ background: d.bg, borderColor: d.border }}
                >
                  <span className="text-sm font-black leading-snug" style={{ color: d.color }}>{d.label}</span>
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
