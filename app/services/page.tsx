import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Hospital Services in Dhule — Surgery, Maternity, Proctology | Sitaram Hospital",
  description:
    "Sitaram Hospital Dhule — Surgery, Laparoscopic Surgery, Maternity, Normal & Caesarean Delivery, Laser Piles Treatment, Family Doctor. Wankhedkar Hospital, Dhule. All services under one roof.",
  keywords:
    "dhule top hospital services, wankhedkar hospital dhule services, hernia surgery dhule, appendix surgery dhule, laparoscopic surgery dhule, maternity hospital dhule, normal delivery dhule, caesarean dhule, delivery hospital dhule, gynaecologist dhule, family doctor dhule, piles fissure fistula dhule, pailes treatment dhule, fisher treatment dhule, sitaram hospital services",
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
