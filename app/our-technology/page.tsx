import OurTechContent from "./OurTechContent";

export const metadata = {
  title: "Our Technology — Sitaram Hospital, Dhule",
  description:
    "State-of-the-art laser and diagnostic equipment at ZEN Laser Procto Care, Sitaram Hospital Dhule — Advanced Laser, DGHAL-RAR, VAAFT, FILAC, Rectocam and more.",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/our-technology",
    title: "Our Technology — ZEN Laser Procto Care, Sitaram Hospital Dhule",
    description: "EUFOTON LASER, Neo V Laser, DGHAL-RAR Doppler, VAAFT Scope, FILAC, Rectocam Full HD — EU-certified laser systems for advanced day-care proctology at Sitaram Hospital, Dhule.",
    images: [{ url: "https://www.sita-ramhospital.com/img/hero.png", alt: "Laser Technology — ZEN Laser Procto Care, Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "Our Technology — ZEN Laser Procto Care, Dhule", description: "EUFOTON LASER, VAAFT, FILAC, DGHAL-RAR and more — EU-certified laser systems at Sitaram Hospital, Dhule." },
  alternates: { canonical: "https://www.sita-ramhospital.com/our-technology" },
};

export default function OurTechnologyPage() {
  return <OurTechContent />;
}
