"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Gupta",
    location: "Mumbai",
    dept: "Cardiology",
    rating: 5,
    text: "I was diagnosed with a complex heart condition and was terrified. Dr. Sharma and the entire cardiology team at Sitaram Hospital walked me through every step. The surgery went perfectly and I'm back to my normal life. I can't thank them enough.",
    initials: "RG",
    color: "#0B4F8A",
  },
  {
    name: "Meena Patel",
    location: "Pune",
    dept: "Gynecology",
    rating: 5,
    text: "Dr. Kavita Joshi is exceptional. She was patient, thorough, and made me feel at ease throughout my pregnancy. The maternity ward is clean, modern, and the nurses are absolutely wonderful. Sitaram Hospital made my delivery experience beautiful.",
    initials: "MP",
    color: "#db2777",
  },
  {
    name: "Arun Desai",
    location: "Ahmedabad",
    dept: "Orthopedics",
    rating: 5,
    text: "After years of knee pain, Dr. Kulkarni performed a knee replacement that gave me my life back. The minimally invasive approach meant I was walking within days. The physiotherapy team was also outstanding.",
    initials: "AD",
    color: "#E8711A",
  },
  {
    name: "Sunita Krishnan",
    location: "Bangalore",
    dept: "Oncology",
    rating: 5,
    text: "When we got the cancer diagnosis, we were devastated. But Dr. Rao and the oncology team gave us hope. Their comprehensive treatment plan and emotional support throughout chemotherapy made all the difference. I'm in remission today.",
    initials: "SK",
    color: "#7c3aed",
  },
  {
    name: "Vijay Nair",
    location: "Kochi",
    dept: "Neurology",
    rating: 5,
    text: "My mother had a severe stroke. The rapid response team at Sitaram Hospital acted within the golden hour. Their neurology ICU is exceptional and the neuro-rehab program helped her recover beyond our expectations.",
    initials: "VN",
    color: "#00A99D",
  },
  {
    name: "Priya Sharma",
    location: "Surat",
    dept: "Pediatrics",
    rating: 5,
    text: "Dr. Nair is the most patient, caring pediatrician we've ever met. My son has been treated here since birth. The child-friendly environment, the colorful wards, the way staff handles kids — everything is simply wonderful.",
    initials: "PS",
    color: "#059669",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="py-14 md:py-20 bg-[#F4F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="tag-line">Patient Stories</span>
            <div className="section-divider" />
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#0B4F8A] hover:text-white hover:border-[#0B4F8A] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrent((c) => Math.min(pages - 1, c + 1))}
              disabled={current >= pages - 1}
              className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#0B4F8A] hover:text-white hover:border-[#0B4F8A] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-[#e2e8f0] card-hover flex flex-col">
              <Quote size={28} className="mb-3" style={{ color: t.color, opacity: 0.3 }} />
              <p className="text-[#4a5568] text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>

              <div>
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a2e44] text-sm">{t.name}</div>
                    <div className="text-xs text-[#718096]">
                      {t.location} • {t.dept}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all rounded-full ${
                i === current ? "w-6 h-2.5 bg-[#0B4F8A]" : "w-2.5 h-2.5 bg-[#e2e8f0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
