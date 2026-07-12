import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Our Services — Sitaram Hospital, Dhule",
  description:
    "Comprehensive healthcare services at Sitaram Hospital — Surgery, Women's Department, Proctology (Piles, Fissure, Fistula) and Family Physician services. All under one roof in Dhule, Maharashtra.",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/services",
    title: "Our Services — Surgery, Maternity, Proctology & Family Medicine | Sitaram Hospital, Dhule",
    description: "General Surgery · Laparoscopic Surgery · Maternity & Gynaecology · Laser Proctology · Family Medicine — all under one roof at Sitaram Hospital, Dhule.",
    images: [{ url: "https://www.sita-ramhospital.com/img/hero.png", alt: "Services — Sitaram Hospital, Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "Our Services — Sitaram Hospital, Dhule", description: "Surgery · Maternity · Laser Proctology · Family Medicine — all under one roof in Dhule." },
  alternates: { canonical: "https://www.sita-ramhospital.com/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
