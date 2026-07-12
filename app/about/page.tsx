import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us — Sitaram Hospital, Dhule",
  description:
    "Learn the story behind Sitaram Hospital and ZEN Laser Procto Care, Dhule — four decades of compassionate, ethical, and affordable healthcare by Dr. Ravi and Dr. Meena Wankhedkar.",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/about",
    title: "About Sitaram Hospital & ZEN Laser Procto Care — Dhule",
    description: "Founded in 1986 by Dr. Ravi and Dr. Meena Wankhedkar — 40+ years of compassionate, ethical and affordable healthcare in Dhule, North Maharashtra.",
    images: [{ url: "https://www.sita-ramhospital.com/img/hero.png", alt: "About Sitaram Hospital, Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "About Sitaram Hospital — Dhule", description: "40+ years of trusted healthcare in Dhule by Dr. Ravi & Dr. Meena Wankhedkar." },
  alternates: { canonical: "https://www.sita-ramhospital.com/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
