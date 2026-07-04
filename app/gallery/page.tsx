import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { ArrowLeft } from "lucide-react";

const galleryImages = [
  /* ── Laser Machines ── */
  {
    src: "/img/laseev-machine.jpg",
    alt: "LASEEV Laser System",
    cat: "Equipment",
    label: "LASEEV Laser System",
    desc: "Advanced diode laser for proctological procedures",
  },
  {
    src: "/img/laser-treatment-overview.jpg",
    alt: "Sabrina Laser & Advanced Laser Proctology Treatment",
    cat: "Equipment",
    label: "Sabrina Laser — Proctology Overview",
    desc: "Treats Fistula, Hemorrhoids, Fissure & Pilonidal Sinus",
  },

  /* ── HAL RAR Doppler ── */
  {
    src: "/img/hal-rar-doppler.jpg",
    alt: "HAL RAR Doppler Equipment by A.M.I.",
    cat: "Equipment",
    label: "HAL RAR Doppler (A.M.I.)",
    desc: "Doppler-guided haemorrhoidal artery ligation",
  },

  /* ── RF Generator ── */
  {
    src: "/img/rf-generator.jpg",
    alt: "Dr.Oppel RF Electrosurgical Device ST-501",
    cat: "Equipment",
    label: "Dr.Oppel RF Generator ST-501",
    desc: "Radio frequency electrosurgical device for RFA",
  },

  /* ── Video Rectoscope ── */
  {
    src: "/img/video-rectoscope.jpg",
    alt: "Dr.Camscope Full HD LED Video Rectoscope DCS 103r Pro",
    cat: "Equipment",
    label: "Camscope Full HD Rectoscope",
    desc: "Full HD video-guided ano-rectal examination system",
  },

  /* ── Micro Rectocam ── */
  {
    src: "/img/micro-rectocam.jpg",
    alt: "Micro Rectocam WiFi EM200SW",
    cat: "Equipment",
    label: "Micro Rectocam WiFi EM200SW",
    desc: "Wireless HD mini-camera for real-time rectal imaging",
  },

  /* ── Rectocam HD ── */
  {
    src: "/img/rectocam-hd.jpg",
    alt: "Rectocam Full HD Camera",
    cat: "Equipment",
    label: "Rectocam Full HD",
    desc: "Crystal-clear HD imaging of rectum & anal canal",
  },

  /* ── VAAFT ── */
  {
    src: "/img/vaaft-scope.jpg",
    alt: "VAAFT Video-Assisted Anal Fistula Treatment Scope",
    cat: "Equipment",
    label: "VAAFT Scope",
    desc: "Video-assisted scope for fistula closure without cutting sphincter",
  },

  /* ── Sphinctometer ── */
  {
    src: "/img/sphinctometer.jpg",
    alt: "Sphinctometer anal pressure measurement device",
    cat: "Equipment",
    label: "Sphinctometer (ProMedico)",
    desc: "Anal sphincter pressure measurement & analysis",
  },

  /* ── Anatomy ── */
  {
    src: "/img/hemorrhoid-anatomy.jpg",
    alt: "Hemorrhoid anatomy diagram — internal and external",
    cat: "Anatomy",
    label: "Hemorrhoid Anatomy",
    desc: "Internal & external hemorrhoid classification diagram",
  },
  {
    src: "/img/fistula-anatomy.jpg",
    alt: "Fistula in ano ABCD classification anatomy",
    cat: "Anatomy",
    label: "Fistula — ABCD Classification",
    desc: "Fistula tract types A, B, C, D anatomy diagram",
  },

  /* ── Conditions ── */
  {
    src: "/img/piles-illustration.jpg",
    alt: "Piles patient illustration",
    cat: "Conditions",
    label: "Piles Condition",
    desc: "Illustration showing piles / haemorrhoids condition",
  },
];

const cats = ["All", "Equipment", "Anatomy", "Conditions"];

export default function GalleryPage() {
  const equipCount    = galleryImages.filter(i => i.cat === "Equipment").length;
  const anatomyCount  = galleryImages.filter(i => i.cat === "Anatomy").length;
  const condCount     = galleryImages.filter(i => i.cat === "Conditions").length;

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Equipment &amp; Medical Gallery
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-black mb-3">
              Our Equipment &amp; Medical Illustrations
            </h1>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Explore the state-of-the-art laser and diagnostic equipment at Sitaram Hospital — ZEN Laser Procto Care, along with medical anatomy illustrations for patient education.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { val: `${equipCount}`,   label: "Equipment Images" },
                { val: `${anatomyCount}`, label: "Anatomy Diagrams" },
                { val: `${condCount}`,    label: "Condition Illustrations" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-white">{s.val}</div>
                  <div className="text-white/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <GalleryGrid images={galleryImages} cats={cats} />
      </main>
      <Footer />
    </>
  );
}
