"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  cat: string;
  label: string;
}

const catColors: Record<string, string> = {
  Equipment: "#1565C0",
  Anatomy: "#2E7D32",
  Conditions: "#C62828",
};

export default function GalleryGrid({ images, cats }: { images: GalleryImage[]; cats: string[] }) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

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
          {filtered.map((img, i) => (
            <div
              key={img.src + i}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => setLightbox(img)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:640px)50vw,(max-width:1024px)33vw,20vw"
                />
              </div>
              <div className="p-2.5">
                <div
                  className="text-[9px] font-bold uppercase tracking-widest mb-0.5"
                  style={{ color: catColors[img.cat] || "#6B7280" }}
                >
                  {img.cat}
                </div>
                <div className="text-[11px] font-semibold text-[#374151] leading-tight line-clamp-2">
                  {img.label}
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 rounded-full p-2"
              onClick={() => setLightbox(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className="relative max-w-3xl max-h-[85vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="text-center mt-3">
                <div className="text-white font-bold">{lightbox.label}</div>
                <div className="text-white/50 text-sm mt-0.5">{lightbox.cat}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
