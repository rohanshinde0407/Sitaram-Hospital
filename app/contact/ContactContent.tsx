"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Navigation, Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const doctors = [
  { name: "Dr. Ravindra Wankhedkar", roleKey: "raviRole" as const,  color: "#C62828", bg: "#FFF5F5", border: "#FECACA" },
  { name: "Dr. Meena Wankhedkar",    roleKey: "meenaRole" as const, color: "#AD1457", bg: "#FFF0F6", border: "#F9A8D4" },
];

const helplines = [
  { labelKey: "Hospital Main Line", number: "02562235795", display: "02562 – 235795" },
  { labelKey: "Hospital Helpline",  number: "9421279065",  display: "94212 79065"    },
  { labelKey: "Hospital Line 2",    number: "02562297695", display: "02562 – 297695" },
];

export default function ContactContent() {
  const t = useTranslation();
  const c = t.contact;

  const doctorRoles: Record<string, string> = {
    raviRole:  t.doctors.raviRole,
    meenaRole: t.doctors.meenaRole,
  };

  const opd = [
    { slotLabel: c.morningOpd, day: c.monSat, time: c.morning, open: true  },
    { slotLabel: c.eveningOpd, day: c.monSat, time: c.evening, open: true  },
    { slotLabel: c.sunday,     day: c.weeklyOff, time: c.closed,  open: false },
  ];

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main className="bg-[#F8FAFB] min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-10 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <div className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              {c.badge}
            </div>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight">
              {c.title}
            </h1>
            <p className="text-white/55 text-sm md:text-base">
              {c.subtitle}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> · </span>
              {c.confid}
            </p>
          </div>
        </div>

        {/* Map section */}
        <div className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF] mb-1">{c.locationLabel}</div>
                <h2 className="text-base md:text-lg font-black text-[#111827]">{c.hospitalName}</h2>
                <p className="text-xs md:text-sm text-[#6B7280] mt-0.5">{c.address}</p>
              </div>
              <a
                href="https://maps.app.goo.gl/5QVF217ZRecwuvMcA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#8E0000] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm w-full sm:w-auto"
              >
                <Navigation size={14} /> {c.directions}
              </a>
            </div>

            <div
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm w-full"
              style={{ height: "clamp(220px, 40vw, 400px)" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Sitaram+Hospital+Bhangya+Maruti+Chowk+Lane+No+6+Dhule+Maharashtra+424001+India&output=embed&z=17&hl=en"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sitaram Hospital Location"
              />
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-6 md:space-y-8">

          {/* Doctor contacts */}
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF] mb-3 md:mb-4">
              {c.consultLabel}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {doctors.map((d) => (
                <div
                  key={d.name}
                  className="bg-white rounded-2xl border p-5 md:p-6 shadow-sm flex items-center gap-4"
                  style={{ borderColor: d.border }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-base text-white"
                    style={{ background: d.color }}
                  >
                    {d.name.split(" ")[1][0]}
                  </div>
                  <div>
                    <div className="font-black text-[#111827] text-base md:text-lg leading-tight">{d.name}</div>
                    <div className="text-[11px] font-semibold mt-0.5" style={{ color: d.color }}>
                      {doctorRoles[d.roleKey]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helplines + Address + OPD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Helplines */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                <Phone size={13} className="text-[#C62828] flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-widest text-[#6B7280]">{c.helplineLabel}</span>
              </div>
              <div className="divide-y divide-gray-50">
                {helplines.map((h) => (
                  <div key={h.number} className="flex items-center justify-between px-5 py-3.5 gap-2">
                    <span className="text-xs text-[#9CA3AF] truncate">{h.labelKey}</span>
                    <a
                      href={`tel:${h.number}`}
                      className="font-bold text-sm text-[#111827] hover:text-[#C62828] transition-colors flex-shrink-0"
                    >
                      {h.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#C62828] flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-widest text-[#6B7280]">{c.addressLabel}</span>
              </div>
              <div className="text-sm text-[#374151] leading-relaxed">
                <div className="font-bold text-[#111827] mb-1">Sitaram Hospital</div>
                {c.addressFull.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </div>
              <div className="space-y-2 pt-2 border-t border-gray-50">
                <a
                  href="http://www.sita-ramhospital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#C62828] transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#C62828]">🌐</span>
                  {c.website}
                </a>
              </div>
            </div>

            {/* OPD Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                <Clock size={13} className="text-[#C62828] flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-widest text-[#6B7280]">{c.opdLabel}</span>
              </div>
              <div className="divide-y divide-gray-50">
                {opd.map((o) => (
                  <div key={o.slotLabel} className="px-5 py-3.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wide">{o.slotLabel}</div>
                      <div className="text-xs text-[#374151] mt-0.5">{o.day}</div>
                    </div>
                    <div
                      className="text-sm font-bold flex-shrink-0"
                      style={{ color: o.open ? "#2E7D32" : "#EF4444" }}
                    >
                      {o.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
