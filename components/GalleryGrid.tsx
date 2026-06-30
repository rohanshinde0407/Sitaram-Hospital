"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  cat: string;
  label: string;
}

const catColors: Record<string, string> = {
  Equipment:  "#1565C0",
  Anatomy:    "#2E7D32",
  Conditions: "#C62828",
};

const catBg: Record<string, string> = {
  Equipment:  "#EFF6FF",
  Anatomy:    "#F0FDF4",
  Conditions: "#FFF5F5",
};

const catBorder: Record<string, string> = {
  Equipment:  "#BFDBFE",
  Anatomy:    "#BBF7D0",
  Conditions: "#FECACA",
};

export default function GalleryGrid({ images, cats }: { images: GalleryImage[]; cats: string[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? images : images.filter(i => i.cat === active);

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                active === cat
                  ? "bg-[#C62828] border-[#C62828] text-white shadow-md"
                  : "bg-white border-gray-200 text-[#374151] hover:border-[#C62828] hover:text-[#C62828]"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({images.filter(i => i.cat === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-[#9CA3AF] text-sm mb-8">
          Showing <strong className="text-[#374151]">{filtered.length}</strong> images
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((img, i) => {
            const color  = catColors[img.cat]  || "#6B7280";
            const bg     = catBg[img.cat]      || "#F9FAFB";
            const border = catBorder[img.cat]  || "#E5E7EB";

            return (
              <div
                key={img.src + i}
                className="rounded-2xl overflow-hidden border-2 bg-white shadow-sm"
                style={{ borderColor: border }}
              >
                {/* Placeholder square */}
                <div
                  className="aspect-square flex flex-col items-center justify-center gap-2 border-b-2"
                  style={{ background: bg, borderColor: border }}
                >
                  <svg
                    width="28" height="28" viewBox="0 0 24 24"
                    fill="none" stroke={color} strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: `${color}99` }}>
                    Coming soon
                  </span>
                </div>

                {/* Label */}
                <div className="p-2.5">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-0.5"
                    style={{ color }}
                  >
                    {img.cat}
                  </div>
                  <div className="text-[11px] font-semibold text-[#374151] leading-tight line-clamp-2">
                    {img.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
