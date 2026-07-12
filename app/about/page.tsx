import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Sitaram Hospital — Dr. Ravi & Dr. Meena Wankhedkar, Dhule",
  description:
    "Sitaram Hospital, Dhule — started in 1986 by Dr. Ravi Wankhedkar and Dr. Meena Wankhedkar. Trusted for 40+ years by the people of Dhule and North Maharashtra for affordable, compassionate healthcare.",
  keywords:
    "sitaram hospital history dhule, dr ravi wankhedkar dhule, dr meena wankhedkar dhule, wankhedkar hospital dhule story, who started sitaram hospital, best doctors dhule, trusted hospital dhule, affordable hospital dhule, anna hazare hospital dhule, bhagirath clinic dhule, devki nursing home dhule",
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
