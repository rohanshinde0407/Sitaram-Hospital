import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

const doctors = [
  {
    name: "Dr. Ravindra Wankhedkar",
    role: "Senior Surgeon and Laser Proctologist",
    phone: "9422296495",
    display: "94222 96495",
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
  },
  {
    name: "Dr. Meena Wankhedkar",
    role: "Family Medicine Obstetrician & Laser Specialist",
    phone: "8275008768",
    display: "82750 08768",
    color: "#AD1457",
    bg: "#FFF0F6",
    border: "#F9A8D4",
  },
];

const helplines = [
  { label: "Hospital Main Line",  number: "02562235795",  display: "02562 – 235795" },
  { label: "Hospital Helpline",   number: "9421279065",   display: "94212 79065"    },
  { label: "Hospital Line 2",     number: "02562297695",  display: "02562 – 297695" },
];

const opd = [
  { slot: "Morning OPD", day: "Monday – Saturday", time: "10:00 AM – 2:00 PM", open: true  },
  { slot: "Evening OPD", day: "Monday – Saturday", time: "6:00 PM – 9:00 PM",  open: true  },
  { slot: "Sunday",      day: "Sunday",             time: "Closed",              open: false },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8FAFB] min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-5 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Get In Touch
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-black mb-3 leading-tight">
              Contact Us
            </h1>
            <p className="text-white/55 text-sm md:text-base max-w-lg mx-auto">
              ZEN Laser Procto Care · Sitaram Hospital, Dhule<br />
              All consultations are 100% confidential.
            </p>
          </div>
        </div>

        {/* ── Map ── */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-1">Our Location</div>
                <h2 className="text-lg font-black text-[#111827]">Sitaram Hospital, Dhule</h2>
                <p className="text-sm text-[#6B7280] mt-0.5">Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001</p>
              </div>
              <a
                href="https://maps.app.goo.gl/z2cjxo26zs38XatXA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#8E0000] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm flex-shrink-0"
              >
                <Navigation size={14} /> Get Directions
              </a>
            </div>

            {/* Map iframe */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 380 }}>
              <iframe
                src="https://maps.google.com/maps?q=Bhangya+Maruti+Chowk+Lane+No+6+Dhule+Maharashtra+424001&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sitaram Hospital Location"
              />
            </div>
          </div>
        </div>

        {/* ── Main contact info ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 space-y-8">

          {/* ── Doctor contacts ── */}
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-4">
              Consult Our Doctors
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {doctors.map((d) => (
                <div
                  key={d.name}
                  className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col gap-4"
                  style={{ borderColor: d.border }}
                >
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: d.color }}>
                      {d.role}
                    </div>
                    <div className="font-black text-[#111827] text-lg">{d.name}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`tel:${d.phone}`}
                      className="flex items-center justify-center gap-2 text-sm font-bold rounded-xl px-4 py-3 transition-opacity hover:opacity-80 flex-1"
                      style={{ background: d.bg, color: d.color, border: `1px solid ${d.border}` }}
                    >
                      <Phone size={14} /> {d.display}
                    </a>
                    <a
                      href={`https://wa.me/91${d.phone}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-bold rounded-xl px-4 py-3 bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0] hover:opacity-80 transition-opacity"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Helplines + Address + OPD ── */}
          <div className="grid md:grid-cols-3 gap-4">

            {/* Helplines */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                <Phone size={14} className="text-[#C62828]" />
                <div className="text-xs font-black uppercase tracking-widest text-[#6B7280]">
                  Hospital Helplines
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                {helplines.map((h) => (
                  <div key={h.number} className="flex items-center justify-between px-5 py-3.5 gap-3">
                    <span className="text-xs text-[#9CA3AF]">{h.label}</span>
                    <a
                      href={`tel:${h.number}`}
                      className="flex items-center gap-1.5 font-bold text-sm text-[#111827] hover:text-[#C62828] transition-colors flex-shrink-0"
                    >
                      {h.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#C62828]" />
                <div className="text-xs font-black uppercase tracking-widest text-[#6B7280]">Address</div>
              </div>
              <div className="text-sm text-[#374151] leading-relaxed">
                <div className="font-bold text-[#111827] mb-1">Sitaram Hospital</div>
                Bhangya Maruti Chowk,<br />
                Lane No. 6, Dhule – 424001<br />
                Maharashtra, India
              </div>
              <div className="space-y-2 pt-1 border-t border-gray-50">
                <a href="mailto:cearsdhule@gmail.com"
                  className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#C62828] transition-colors">
                  <Mail size={13} className="text-[#C62828] flex-shrink-0" />
                  cearsdhule@gmail.com
                </a>
                <a href="http://www.sitaramhospital.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#C62828] transition-colors">
                  <span className="text-[#C62828] text-xs font-bold">🌐</span>
                  www.sitaramhospital.com
                </a>
              </div>
            </div>

            {/* OPD Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                <Clock size={14} className="text-[#C62828]" />
                <div className="text-xs font-black uppercase tracking-widest text-[#6B7280]">OPD Hours</div>
              </div>
              <div className="divide-y divide-gray-50">
                {opd.map((o) => (
                  <div key={o.slot} className="px-5 py-3.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wide">{o.slot}</div>
                      <div className="text-xs text-[#374151] mt-0.5">{o.day}</div>
                    </div>
                    <div className={`text-sm font-bold flex-shrink-0 ${o.open ? "text-[#2E7D32]" : "text-red-500"}`}>
                      {o.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── WhatsApp / Call CTA ── */}
          <div className="bg-gradient-to-br from-[#C62828] to-[#8E0000] rounded-2xl p-8 md:p-10 text-white text-center">
            <h2 className="text-xl md:text-2xl font-black mb-2">Book an Appointment</h2>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Call or WhatsApp us to schedule your consultation. All discussions are strictly confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9421279065"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#C62828] font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm"
              >
                <Phone size={15} /> Call 94212 79065
              </a>
              <a
                href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Sitaram%20Hospital."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <a
                href="https://maps.app.goo.gl/z2cjxo26zs38XatXA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <Navigation size={15} /> Get Directions
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
