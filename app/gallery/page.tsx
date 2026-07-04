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
    src: "/img/machine-img/machine1.png",
    alt: "Laser System — ZEN Laser Procto Care",
    cat: "Equipment",
    label: "Laser System",
    desc: "Advanced diode laser — EU certified",
  },
  {
    src: "/img/machine-img/machine2.png",
    alt: "Diagnostic Equipment",
    cat: "Equipment",
    label: "Diagnostic Equipment",
    desc: "Precision diagnostic technology",
  },
  {
    src: "/img/machine-img/machine3.png",
    alt: "Surgical Equipment",
    cat: "Equipment",
    label: "Surgical Equipment",
    desc: "State-of-the-art surgical tools",
  },
  {
    src: "/img/machine-img/machine4.png",
    alt: "Treatment Equipment",
    cat: "Equipment",
    label: "Treatment Equipment",
    desc: "Advanced treatment technology",
  },

  /* ── Conditions ── */
  {
    src: "/img/Piles%20(Haemorrhoids).png",
    alt: "Piles (Haemorrhoids)",
    cat: "Conditions",
    label: "Piles (Haemorrhoids)",
    desc: "Laser Hemorrhoidoplasty · DGHAL-RAR · RFA",
  },
  {
    src: "/img/Fissure%20in%20Ano.png",
    alt: "Fissure in Ano",
    cat: "Conditions",
    label: "Fissure in Ano",
    desc: "Laser Fissurectomy · Lateral Sphincterotomy",
  },
  {
    src: "/img/Fistula%20in%20Ano.png",
    alt: "Fistula in Ano",
    cat: "Conditions",
    label: "Fistula in Ano",
    desc: "VAAFT · FiLaC · Laser Fistulotomy",
  },
  {
    src: "/img/Pilonidal%20Sinus.png",
    alt: "Pilonidal Sinus",
    cat: "Conditions",
    label: "Pilonidal Sinus",
    desc: "Laser Excision · Pit Picking · Sinusectomy",
  },
  {
    src: "/img/Perineal%20Tear%2000.png",
    alt: "Perineal Tear",
    cat: "Conditions",
    label: "Perineal Tear",
    desc: "Perineal Repair · Laser-Assisted Wound Healing",
  },
  {
    src: "/img/Recto-Vaginal%20Fistula.png",
    alt: "Recto-Vaginal Fistula",
    cat: "Conditions",
    label: "Recto-Vaginal Fistula",
    desc: "Fistula Flap Repair · Laser-Assisted Closure",
  },
  {
    src: "/img/Anal%20Stenosis.png",
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
