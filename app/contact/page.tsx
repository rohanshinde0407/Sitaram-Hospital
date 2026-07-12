import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Sitaram Hospital Dhule — Wankhedkar Hospital Phone & Address",
  description:
    "Sitaram Hospital Dhule address: Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001. Phone: 94212 79065. OPD Mon–Sat 10 AM–2 PM & 6–9 PM. Dr. Ravi Wankhedkar & Dr. Meena Wankhedkar.",
  keywords:
    "sitaram hospital dhule phone number, sitaram hospital dhule address, wankhedkar hospital contact dhule, sitaram hospital timing, piles doctor appointment dhule, dr ravi wankhedkar contact, dr meena wankhedkar contact, sitaram hospital bhangya maruti chowk, hospital near me dhule, laser proctology clinic dhule appointment",
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
