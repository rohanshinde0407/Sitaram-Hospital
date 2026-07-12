import GalleryContent from "./GalleryContent";

export const metadata = {
  title: "Gallery — Sitaram Hospital, Dhule",
  description:
    "Explore the state-of-the-art laser equipment and medical facility at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/gallery",
    title: "Gallery — ZEN Laser Procto Care, Sitaram Hospital Dhule",
    description: "Photos of state-of-the-art laser proctology equipment and the medical facility at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
    images: [{ url: "https://www.sita-ramhospital.com/img/hero.png", alt: "Gallery — Sitaram Hospital, Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "Gallery — Sitaram Hospital, Dhule", description: "State-of-the-art laser equipment at ZEN Laser Procto Care, Sitaram Hospital, Dhule." },
  alternates: { canonical: "https://www.sita-ramhospital.com/gallery" },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
