"use client";

import { useState, useEffect, useRef } from "react";

/* ─── SVG Icons ─────────────────────────────────────────────── */
const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MapPinIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const CalIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width={size} height={size}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ─── Panel backdrop ─────────────────────────────────────────── */
type Panel = "whatsapp" | "call" | "contact" | null;

export default function FloatingActions() {
  const [open, setOpen] = useState<Panel>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Close when clicking outside the entire floating widget */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const toggle = (panel: Panel) => setOpen(prev => (prev === panel ? null : panel));

  /* Button base style */
  const btnCls = "w-12 h-12 flex items-center justify-center rounded-l-2xl shadow-xl transition-all duration-200 cursor-pointer select-none";

  return (
    <>
      {/* ───── Desktop: right-side vertical strip ───── */}
      <div
        ref={containerRef}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-end gap-2"
      >

        {/* ── WhatsApp ── */}
        <div className="relative flex items-center">
          {/* Panel */}
          <div
            className={`absolute right-14 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-right ${open === "whatsapp" ? "opacity-100 scale-100 pointer-events-auto w-72" : "opacity-0 scale-95 pointer-events-none w-72"}`}
          >
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-white font-black text-sm">WhatsApp Us</div>
                <div className="text-white/80 text-xs">We typically reply within minutes</div>
              </div>
              <button onClick={() => setOpen(null)} className="text-white/70 hover:text-white">
                <XIcon size={16} />
              </button>
            </div>
            <div className="p-4">
              <a
                href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                onClick={() => setOpen(null)}
              >
                <div className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <WhatsAppIcon size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#111827] text-sm group-hover:text-[#25D366] transition-colors">Sitaram Hospital</div>
                  <div className="text-[#25D366] font-bold text-base">+91 94212 79065</div>
                  <div className="text-[#6B7280] text-xs mt-0.5">Tap to open WhatsApp chat</div>
                </div>
              </a>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => toggle("whatsapp")}
            className={`${btnCls} text-white ${open === "whatsapp" ? "bg-[#1da851] w-14 h-14" : "bg-[#25D366] hover:bg-[#1da851] hover:w-14 hover:h-14"}`}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </button>
        </div>

        {/* ── Call ── */}
        <div className="relative flex items-center">
          <div
            className={`absolute right-14 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-right ${open === "call" ? "opacity-100 scale-100 pointer-events-auto w-72" : "opacity-0 scale-95 pointer-events-none w-72"}`}
          >
            <div className="bg-[#C62828] px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-white font-black text-sm">Call Us Now</div>
                <div className="text-white/80 text-xs">Mon–Sat · 10AM–2PM &amp; 6PM–9PM</div>
              </div>
              <button onClick={() => setOpen(null)} className="text-white/70 hover:text-white">
                <XIcon size={16} />
              </button>
            </div>
            <div className="p-4">
              <a href="tel:9421279065"
                className="flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-colors group"
                onClick={() => setOpen(null)}
              >
                <div className="w-11 h-11 bg-[#C62828] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827] text-sm group-hover:text-[#C62828] transition-colors">Sitaram Hospital</div>
                  <div className="text-[#C62828] font-bold text-lg">+91 94212 79065</div>
                  <div className="text-[#6B7280] text-xs mt-0.5">Mon–Sat · 10AM–2PM &amp; 6PM–9PM</div>
                </div>
              </a>
            </div>
          </div>

          <button
            onClick={() => toggle("call")}
            className={`${btnCls} text-white ${open === "call" ? "bg-[#8E0000] w-14 h-14" : "bg-[#C62828] hover:bg-[#8E0000] hover:w-14 hover:h-14"}`}
            aria-label="Call"
          >
            <PhoneIcon size={20} />
          </button>
        </div>

        {/* ── Contact / Info ── */}
        <div className="relative flex items-center">
          <div
            className={`absolute right-14 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-right ${open === "contact" ? "opacity-100 scale-100 pointer-events-auto w-80" : "opacity-0 scale-95 pointer-events-none w-80"}`}
          >
            <div className="bg-[#1565C0] px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-white font-black text-sm">Contact Information</div>
                <div className="text-white/80 text-xs">Sitaram Hospital, Dhule</div>
              </div>
              <button onClick={() => setOpen(null)} className="text-white/70 hover:text-white">
                <XIcon size={16} />
              </button>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon size={16} />
                <div>
                  <div className="font-bold text-[#111827] text-xs">Address</div>
                  <div className="text-[#374151] text-xs mt-0.5">Bhangya Maruti Chowk, Lane No. 6,<br />Dhule – 424001, Maharashtra</div>
                </div>
              </div>
              <div className="border-t border-gray-100" />
              <div className="flex items-start gap-3">
                <ClockIcon size={16} />
                <div>
                  <div className="font-bold text-[#111827] text-xs">OPD Hours</div>
                  <div className="text-[#374151] text-xs mt-0.5">Mon–Sat · 10:00 AM – 2:00 PM</div>
                  <div className="text-[#374151] text-xs">Mon–Sat · 6:00 PM – 9:00 PM</div>
                  <div className="text-[#C62828] text-xs font-semibold mt-0.5">Sunday — Closed</div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-1">
                <a href="tel:9421279065"
                  className="w-full flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#8E0000] text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
                  onClick={() => setOpen(null)}
                >
                  <PhoneIcon size={14} /> Call 9421279065
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={() => toggle("contact")}
            className={`${btnCls} text-white ${open === "contact" ? "bg-[#0D47A1] w-14 h-14" : "bg-[#1565C0] hover:bg-[#0D47A1] hover:w-14 hover:h-14"}`}
            aria-label="Contact Info"
          >
            <CalIcon size={20} />
          </button>
        </div>

        {/* ── Facebook ── */}
        <a
          href="https://www.facebook.com/people/Sitaram-Hospital-Dhule/61591739822089/"
          target="_blank" rel="noopener noreferrer"
          className={`${btnCls} text-white hover:w-14 hover:h-14`}
          style={{ background: "#1877F2" }}
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* ── Instagram ── */}
        <a
          href="https://www.instagram.com/sitaramhospitaldhule/"
          target="_blank" rel="noopener noreferrer"
          className={`${btnCls} text-white hover:w-14 hover:h-14`}
          style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>

      {/* ───── Mobile: small floating icons ───── */}
      <div className="fixed bottom-6 right-3 z-[60] md:hidden flex flex-col gap-2.5">
        <a
          href="https://www.facebook.com/people/Sitaram-Hospital-Dhule/61591739822089/"
          target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          style={{ background: "rgba(24,119,242,0.88)", backdropFilter: "blur(8px)" }}
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/sitaramhospitaldhule/"
          target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", backdropFilter: "blur(8px)" }}
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a
          href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital."
          target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          style={{ background: "rgba(37,211,102,0.82)", backdropFilter: "blur(8px)" }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={18} />
        </a>
        <a
          href="tel:9421279065"
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          style={{ background: "rgba(198,40,40,0.82)", backdropFilter: "blur(8px)" }}
          aria-label="Call"
        >
          <PhoneIcon size={17} />
        </a>
      </div>
    </>
  );
}
