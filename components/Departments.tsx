"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    icon: "❤️",
    name: "Cardiology",
    desc: "Comprehensive heart care including interventional cardiology, cardiac surgery, and preventive care.",
    color: "#e8f4fd",
    border: "#0B4F8A",
    href: "/departments/cardiology",
    count: "45+ Specialists",
  },
  {
    icon: "🧠",
    name: "Neurology & Neurosurgery",
    desc: "Expert care for brain and spine disorders, including minimally invasive neurosurgery.",
    color: "#f0faf9",
    border: "#00A99D",
    href: "/departments/neurology",
    count: "30+ Specialists",
  },
  {
    icon: "🦴",
    name: "Orthopedics",
    desc: "Advanced joint replacement, sports medicine, and spine surgery with rapid recovery protocols.",
    color: "#fff8f3",
    border: "#E8711A",
    href: "/departments/orthopedics",
    count: "35+ Specialists",
  },
  {
    icon: "🎗️",
    name: "Oncology",
    desc: "Comprehensive cancer care with medical, surgical, and radiation oncology under one roof.",
    color: "#fdf6ff",
    border: "#7c3aed",
    href: "/departments/oncology",
    count: "25+ Specialists",
  },
  {
    icon: "👶",
    name: "Pediatrics",
    desc: "Specialized care for children from newborns to adolescents in a child-friendly environment.",
    color: "#f0faf9",
    border: "#059669",
    href: "/departments/pediatrics",
    count: "20+ Specialists",
  },
  {
    icon: "🌸",
    name: "Gynecology & Obstetrics",
    desc: "Comprehensive women's health services including high-risk pregnancy and minimally invasive surgery.",
    color: "#fff0f6",
    border: "#db2777",
    href: "/departments/gynecology",
    count: "28+ Specialists",
  },
  {
    icon: "👁️",
    name: "Ophthalmology",
    desc: "Advanced eye care including LASIK, cataract surgery, retina treatment, and pediatric eye care.",
    color: "#fffbeb",
    border: "#d97706",
    href: "/departments/ophthalmology",
    count: "18+ Specialists",
  },
  {
    icon: "🫁",
    name: "Pulmonology",
    desc: "Expert treatment for respiratory disorders, sleep apnea, and critical care pulmonology.",
    color: "#eff6ff",
    border: "#3b82f6",
    href: "/departments/pulmonology",
    count: "15+ Specialists",
  },
  {
    icon: "🧬",
    name: "Gastroenterology",
    desc: "Diagnosis and treatment of digestive system disorders with advanced endoscopy services.",
    color: "#f0fdf4",
    border: "#16a34a",
    href: "/departments/gastroenterology",
    count: "22+ Specialists",
  },
  {
    icon: "🦷",
    name: "Nephrology & Urology",
    desc: "Advanced kidney care, dialysis, robotic urology, and kidney transplantation services.",
    color: "#f8f4ff",
    border: "#9333ea",
    href: "/departments/nephrology",
    count: "20+ Specialists",
  },
  {
    icon: "🩻",
    name: "Radiology & Imaging",
    desc: "State-of-the-art diagnostic imaging including 3T MRI, CT, PET-CT, and digital X-ray.",
    color: "#f0f9ff",
    border: "#0284c7",
    href: "/departments/radiology",
    count: "12+ Specialists",
  },
  {
    icon: "🧪",
    name: "Pathology & Lab",
    desc: "Comprehensive diagnostic lab services with NABL accreditation and quick turnaround times.",
    color: "#fef3c7",
    border: "#ca8a04",
    href: "/departments/pathology",
    count: "24/7 Service",
  },
];

export default function Departments() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? departments : departments.slice(0, 8);

  return (
    <section id="departments" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag-line">Our Specialties</span>
          <div className="section-divider mx-auto" />
          <h2 className="section-title mb-4">Comprehensive Medical Departments</h2>
          <p className="section-subtitle mx-auto text-center">
            From routine check-ups to complex surgeries, our 40+ departments deliver expert care under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((dept) => (
            <Link
              key={dept.name}
              href={dept.href}
              className="group rounded-2xl border border-[#e2e8f0] p-5 card-hover cursor-pointer block"
              style={{ backgroundColor: dept.color }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border-2"
                style={{ borderColor: dept.border, background: "white" }}
              >
                {dept.icon}
              </div>
              <h3
                className="font-bold text-base mb-2 group-hover:text-[#0B4F8A] transition-colors"
                style={{ color: "#1a2e44" }}
              >
                {dept.name}
              </h3>
              <p className="text-sm text-[#4a5568] mb-3 leading-relaxed">{dept.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold" style={{ color: dept.border }}>
                  {dept.count}
                </span>
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: dept.border }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Show more / View all */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showAll && departments.length > 8 && (
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Show All Departments
            </button>
          )}
          <Link href="/departments" className="btn-primary">
            View All 40+ Departments
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
