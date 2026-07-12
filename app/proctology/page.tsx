import ProctologyContent from "./ProctologyContent";

export const metadata = {
  title: "Piles, Fissure & Fistula Laser Treatment in Dhule — ZEN Laser Procto Care",
  description:
    "Suffering from Piles, Fissure or Fistula in Dhule? Get painless laser treatment at ZEN Laser Procto Care, Sitaram Hospital. No cuts, no stitches, home the same day. Dr. Ravindra Wankhedkar.",
  keywords:
    "pailes dhule, piles dhule, fisher dhule, fissure in ano dhule, fistula dhule, mulvyadh dhule, bawaseer dhule, bleeding while passing stool dhule, pain in anus dhule, pus discharge near anus dhule, laser piles surgery dhule, no cut piles treatment dhule, painless piles treatment dhule, same day discharge piles dhule, pilonidal sinus dhule, ano-rectal doctor dhule, proctologist dhule, wankhedkar hospital piles",
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
