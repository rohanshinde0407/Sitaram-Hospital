"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  cat: string;
  label: string;
  desc?: string;
}

const catColors: Record<string, string> = {
  Equipment:  "#1565C0",
  Conditions: "#C62828",
};

const catBg: Record<string, string> = {
  Equipment:  "#EFF6FF",
  Conditions: "#FFF5F5",
};

const catBorder: Record<string, string> = {
  Equipment:  "#BFDBFE",
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((img, i) => {
            const color  = catColors[img.cat]  || "#6B7280";
            const bg     = catBg[img.cat]      || "#F9FAFB";
            const border = catBorder[img.cat]  || "#E5E7EB";

            return (
              <div
                key={img.src + i}
                className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: border }}
              >
                {/* Image */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "4/3", background: bg }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Label */}
                <div className="px-3 py-3 border-t" style={{ borderColor: border }}>
                  <div
                    className="text-[9px] font-black uppercase tracking-widest mb-0.5"
                    style={{ color }}
                  >
                    {img.cat}
                  </div>
                  <div className="text-xs font-bold text-[#111827] leading-tight mb-0.5">
                    {img.label}
                  </div>
                  {img.desc && (
                    <div className="text-[10px] text-[#9CA3AF] leading-snug">{img.desc}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
