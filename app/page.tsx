import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Sitaram Hospital & ZEN Laser Procto Care — Piles, Fissure & Fistula Treatment | Dhule",
  description:
    "Sitaram Hospital, Dhule — 40+ years of trusted healthcare. ZEN Laser Procto Care: advanced laser treatment for Piles, Fissure & Fistula. Painless · Day Care · Home Same Day. Dr. Ravindra Wankhedkar.",
  keywords:
    "sitaram hospital dhule, ZEN laser procto care, piles treatment dhule, fissure treatment dhule, fistula treatment dhule, laser proctology dhule, ano-rectal treatment dhule, best hospital dhule, Dr Ravindra Wankhedkar",
  openGraph: {
    type: "website",
    url: "https://www.sita-ramhospital.com/",
    siteName: "Sitaram Hospital & ZEN Laser Procto Care",
    title: "Sitaram Hospital & ZEN Laser Procto Care — Piles, Fissure & Fistula Treatment | Dhule",
    description:
      "40+ years of trusted healthcare in Dhule. Advanced laser treatment for Piles, Fissure & Fistula — Painless, Day Care, Same-Day Discharge. Dr. Ravindra Wankhedkar.",
    images: [{ url: "https://www.sita-ramhospital.com/img/hero.png", width: 3450, height: 1715, alt: "Sitaram Hospital & ZEN Laser Procto Care, Dhule" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitaram Hospital & ZEN Laser Procto Care | Dhule",
    description: "Laser treatment for Piles, Fissure & Fistula — Painless, Day Care, Home Same Day. Sitaram Hospital, Dhule.",
    images: ["https://www.sita-ramhospital.com/img/hero.png"],
  },
  alternates: { canonical: "https://www.sita-ramhospital.com/" },
};

export default function HomePage() {
  return <HomeContent />;
}
