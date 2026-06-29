"use client";

import { useState } from "react";
import { Phone, Calendar, User, Clock, CheckCircle2, MapPin, Mail } from "lucide-react";

const conditions = [
  "Piles (Haemorrhoids)", "Fissure in Ano", "Fistula in Ano",
  "Pilonidal Sinus", "Perineal Tear / Recto-Vaginal Fistula",
  "Anal Stenosis", "Second Opinion", "Other",
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
];

export default function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", condition: "", date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls = "w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#C62828] transition-all";

  return (
    <section id="appointment" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* LEFT info – 2/5 */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="section-eyebrow">Appointments</div>
              <div className="rule" />
              <h2 className="section-title mb-3">Book Your Consultation</h2>
              <p className="text-[#374151] text-base leading-relaxed">
                Consult our specialist proctologists in a completely confidential, judgment-free environment.
                Early consultation leads to faster, more effective treatment.
              </p>
            </div>

            {/* OPD card */}
            <div className="bg-[#F0FDF4] border border-green-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-[#2E7D32] font-bold text-sm mb-3">
                <Clock size={16} /> OPD Timings
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#374151]">Morning OPD</span>
                  <span className="font-bold text-[#111827]">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#374151]">Evening OPD</span>
                  <span className="font-bold text-[#111827]">6:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#374151]">Days Open</span>
                  <span className="font-bold text-[#111827]">Monday – Saturday</span>
                </div>
                <div className="border-t border-green-200 pt-2 flex justify-between">
                  <span className="text-red-500 font-semibold">Sunday</span>
                  <span className="font-bold text-red-500">CLOSED</span>
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div id="contact" className="space-y-2">
              {[
                { Icon: Phone, label: "Dr. Ravindra Wankhedkar", val: "94222 96495", href: "tel:9422296495", col: "#C62828" },
                { Icon: Phone, label: "Dr. Meena Wankhedkar", val: "82750 08768", href: "tel:8275008768", col: "#2E7D32" },
                { Icon: Phone, label: "Hospital Landline", val: "02562 – 235795 / 297695", href: "tel:02562235795", col: "#1565C0" },
                { Icon: Mail, label: "Email", val: "cearsdhule@gmail.com", href: "mailto:cearsdhule@gmail.com", col: "#7C3AED" },
                { Icon: MapPin, label: "Address", val: "Bhangya Maruti Chowk, Lane No. 6, Dhule", href: "#", col: "#B45309" },
              ].map(({ Icon, label, val, href, col }) => (
                <a key={label} href={href}
                  className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${col}12` }}>
                    <Icon size={15} style={{ color: col }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">{label}</div>
                    <div className="text-sm font-semibold text-[#111827] group-hover:text-[#C62828] transition-colors">{val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT form – 3/5 */}
          <div className="lg:col-span-3">
            <div className="card p-7 md:p-8 shadow-md">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} className="text-[#2E7D32]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Appointment Requested!</h3>
                  <p className="text-[#374151] text-sm max-w-xs">
                    Thank you, <strong>{form.name}</strong>. Our team will call you at{" "}
                    <strong>{form.phone}</strong> to confirm your appointment.
                  </p>
                  <button
                    className="btn btn-red mt-5"
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", condition: "", date: "", time: "", message: "" }); }}
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                      <Calendar size={18} className="text-[#C62828]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Appointment Request</h3>
                      <p className="text-xs text-[#6B7280]">All information is 100% confidential</p>
                    </div>
                  </div>

                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">Full Name *</label>
                        <div className="relative">
                          <User size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="text" name="name" required value={form.name} onChange={handle}
                            placeholder="Your full name"
                            className={inputCls + " pl-9"} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">Phone Number *</label>
                        <div className="relative">
                          <Phone size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="tel" name="phone" required value={form.phone} onChange={handle}
                            placeholder="+91 XXXXX XXXXX"
                            className={inputCls + " pl-9"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">Condition / Problem *</label>
                      <select name="condition" required value={form.condition} onChange={handle} className={inputCls}>
                        <option value="">Select your condition</option>
                        {conditions.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">Preferred Date *</label>
                        <input type="date" name="date" required value={form.date} onChange={handle}
                          min={new Date().toISOString().split("T")[0]}
                          className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">Preferred Time</label>
                        <select name="time" value={form.time} onChange={handle} className={inputCls}>
                          <option value="">Any time</option>
                          {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">Brief Description</label>
                      <textarea name="message" value={form.message} onChange={handle} rows={3}
                        placeholder="Describe your symptoms briefly…"
                        className={inputCls + " resize-none"} />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full btn btn-red justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting…</>
                      ) : (
                        <><Calendar size={16} /> Request Appointment</>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-[#9CA3AF]">
                      All consultations are <strong>100% confidential</strong>. Your data will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
