import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery — Sitaram Hospital, Dhule",
  description:
    "Explore the state-of-the-art laser equipment and medical facility at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
};

const galleryImages = [
  /* ── Machines & Equipment ── */
  {
    src: "/img/Machine 01.jpg",
    alt: "EUFOTON Laser Machine",
    cat: "Equipment",
    label: "EUFOTON Laser System",
    desc: "EU-certified diode laser for advanced proctological procedures",
  },
  {
    src: "/img/machine-img/Computerised VDO Anoscopy.png",
    alt: "Computerised VDO Anoscopy",
    cat: "Equipment",
    label: "Computerised VDO Anoscopy",
    desc: "Full HD video-guided ano-rectal examination system",
  },
  {
    src: "/img/machine-img/Hal Rar Doppler.png",
    alt: "HAL-RAR Doppler",
    cat: "Equipment",
    label: "HAL-RAR Doppler",
    desc: "Doppler-guided haemorrhoidal artery ligation device",
  },
  {
    src: "/img/machine-img/Radio Frequency Ablator.jpg",
    alt: "Radio Frequency Ablator",
    cat: "Equipment",
    label: "Radio Frequency Ablator",
    desc: "RF electrosurgical device — Dr.Oppel ST-501",
  },
  {
    src: "/img/machine-img/Rectocam.png",
    alt: "Rectocam Full HD",
    cat: "Equipment",
    label: "Rectocam Full HD",
    desc: "High-definition rectoscopy imaging system",
  },
  {
    src: "/img/machine-img/VAAFT.png",
    alt: "VAAFT Scope",
    cat: "Equipment",
    label: "VAAFT Scope",
    desc: "Video-assisted anal fistula treatment scope",
  },
  {
    src: "/img/machine-img/WhatsApp Image 2026-07-05 at 16.35.00.png",
    alt: "Laser System",
    cat: "Equipment",
    label: "Laser System",
    desc: "Advanced laser system for proctological procedures",
  },

  /* ── Conditions ── */
  {
    src: "/img/Piles (Haemorrhoids).png",
    alt: "Piles (Haemorrhoids)",
    cat: "Conditions",
    label: "Piles (Haemorrhoids)",
    desc: "Laser Hemorrhoidoplasty · DGHAL-RAR · RFA",
  },
  {
    src: "/img/Fissure in Ano.png",
    alt: "Fissure in Ano",
    cat: "Conditions",
    label: "Fissure in Ano",
    desc: "Laser Fissurectomy · Lateral Sphincterotomy",
  },
  {
    src: "/img/Fistula in Ano.png",
    alt: "Fistula in Ano",
    cat: "Conditions",
    label: "Fistula in Ano",
    desc: "VAAFT · FiLaC · Laser Fistulotomy",
  },
  {
    src: "/img/Pilonidal Sinus.png",
    alt: "Pilonidal Sinus",
    cat: "Conditions",
    label: "Pilonidal Sinus",
    desc: "Laser Excision · Pit Picking · Sinusectomy",
  },
  {
    src: "/img/Perineal Tear 00.png",
    alt: "Perineal Tear",
    cat: "Conditions",
    label: "Perineal Tear",
    desc: "Perineal Repair · Laser-Assisted Wound Healing",
  },
  {
    src: "/img/Recto-Vaginal Fistula.png",
    alt: "Recto-Vaginal Fistula",
    cat: "Conditions",
    label: "Recto-Vaginal Fistula",
    desc: "Fistula Flap Repair · Laser-Assisted Closure",
  },
  {
    src: "/img/Anal Stenosis.png",
    alt: "Anal Stenosis",
    cat: "Conditions",
    label: "Anal Stenosis",
    desc: "Anal Dilation · Anoplasty · Laser Sphincteroplasty",
  },
];

const cats = ["All", "Equipment", "Conditions"];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ── Page hero ── */}
        <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-8 md:py-10 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">ZEN Laser Procto Care · Sitaram Hospital</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">Gallery</h1>
          </div>
        </div>

        <GalleryGrid images={galleryImages} cats={cats} />

      </main>
      <Footer />
    </>
  );
}
