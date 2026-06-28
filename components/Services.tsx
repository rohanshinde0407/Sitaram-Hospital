import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🚑",
    title: "Emergency & Trauma Care",
    desc: "24×7 Level-I Trauma Center with fully equipped emergency bays, rapid triage, and ATLS-trained physicians.",
    color: "#c0392b",
    bg: "#fef2f2",
    href: "/services/emergency",
  },
  {
    icon: "🏥",
    title: "Inpatient & ICU Services",
    desc: "Modern private and semi-private rooms, medical/surgical ICU, cardiac ICU, and neonatal ICU.",
    color: "#0B4F8A",
    bg: "#eff6ff",
    href: "/services/inpatient",
  },
  {
    icon: "🔭",
    title: "Advanced Diagnostics",
    desc: "Comprehensive diagnostic services including 3T MRI, CT, Echo, PET-CT, endoscopy, and NABL lab.",
    color: "#00A99D",
    bg: "#f0fafa",
    href: "/services/diagnostics",
  },
  {
    icon: "💊",
    title: "Pharmacy & Blood Bank",
    desc: "24×7 in-house pharmacy with 5,000+ medicines and a licensed blood bank with all major blood types.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    href: "/services/pharmacy",
  },
  {
    icon: "🏃",
    title: "Physiotherapy & Rehab",
    desc: "Comprehensive rehabilitation including physiotherapy, occupational therapy, and speech therapy.",
    color: "#059669",
    bg: "#f0fdf4",
    href: "/services/rehabilitation",
  },
  {
    icon: "🤝",
    title: "Health Check Packages",
    desc: "Customized annual health check packages for individuals, corporates, and senior citizens.",
    color: "#E8711A",
    bg: "#fff7ed",
    href: "/services/health-checks",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="tag-line">What We Offer</span>
          <div className="section-divider mx-auto" />
          <h2 className="section-title mb-4">Our Core Services</h2>
          <p className="section-subtitle mx-auto text-center">
            From emergency care to preventive wellness — we provide end-to-end healthcare services
            designed around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group block p-6 rounded-2xl border border-[#e2e8f0] card-hover"
              style={{ backgroundColor: svc.bg }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${svc.color}15`, border: `2px solid ${svc.color}30` }}
              >
                {svc.icon}
              </div>
              <h3 className="font-bold text-[#1a2e44] text-base mb-2 group-hover:text-[#0B4F8A] transition-colors">
                {svc.title}
              </h3>
              <p className="text-sm text-[#4a5568] leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: svc.color }}>
                Learn More
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
