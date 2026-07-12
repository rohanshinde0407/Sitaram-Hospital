import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Us — Sitaram Hospital, Dhule",
  description:
    "Contact ZEN Laser Procto Care at Sitaram Hospital, Dhule. OPD: Mon–Sat 10 AM–2 PM & 6 PM–9 PM. Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001.",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/contact",
    title: "Contact Sitaram Hospital & ZEN Laser Procto Care — Dhule",
    description: "Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001. OPD: Mon–Sat 10 AM–2 PM & 6–9 PM. Ph: 94212 79065.",
    images: [{ url: "https://www.sita-ramhospital.com/img/hero.png", alt: "Contact Sitaram Hospital, Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "Contact Sitaram Hospital — Dhule", description: "Bhangya Maruti Chowk, Lane No. 6, Dhule. OPD: Mon–Sat 10 AM–2 PM & 6–9 PM." },
  alternates: { canonical: "https://www.sita-ramhospital.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
