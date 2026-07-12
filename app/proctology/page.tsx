import ProctologyContent from "./ProctologyContent";

export const metadata = {
  title: "Proctology — ZEN Laser Procto Care, Sitaram Hospital Dhule",
  description:
    "Advanced laser treatment for Piles, Fissure, Fistula, Pilonidal Sinus and more ano-rectal conditions at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/proctology",
    title: "Proctology — Laser Treatment for Piles, Fissure & Fistula | Dhule",
    description: "Painless, day-care laser treatment for Piles (Haemorrhoids), Fissure in Ano, Fistula in Ano, Pilonidal Sinus, Anal Stenosis and more at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
    images: [{ url: "https://www.sita-ramhospital.com/img/procto-care.png", alt: "ZEN Laser Procto Care — Proctology, Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "Laser Proctology — Piles, Fissure & Fistula Treatment | Dhule", description: "Painless day-care laser treatment for Piles, Fissure & Fistula at ZEN Laser Procto Care, Sitaram Hospital, Dhule." },
  alternates: { canonical: "https://www.sita-ramhospital.com/proctology" },
};

export default function ProctologyPage() {
  return <ProctologyContent />;
}
