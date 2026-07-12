import OurDoctorsContent from "./OurDoctorsContent";

export const metadata = {
  title: "Dr. Ravi Wankhedkar & Dr. Meena Wankhedkar — Sitaram Hospital, Dhule",
  description:
    "Dr. Ravindra Wankhedkar — IMA National President 2018, Senior Surgeon & Laser Proctologist at Sitaram Hospital, Dhule. Dr. Meena Wankhedkar — Family Physician & Obstetrician. Wankhedkar Hospital, Dhule.",
  keywords:
    "dr ravi wankhedkar dhule, dr ravindra wankhedkar, ravi wankhedkar hospital dhule, dr meena wankhedkar dhule, meena wankhedkar hospital dhule, wankhedkar hospital dhule, wankhedkar doctor dhule, IMA president doctor dhule, best surgeon dhule, best doctor dhule, coloproctologist dhule, laser surgeon dhule, family doctor dhule, sitaram hospital doctors",
  openGraph: {
    type: "website" as const,
    url: "https://www.sita-ramhospital.com/our-doctors",
    title: "Our Doctors — Dr. Ravindra & Dr. Meena Wankhedkar | Sitaram Hospital, Dhule",
    description: "Dr. Ravindra S. Wankhedkar — IMA National President 2018, Senior Surgeon & Laser Proctologist. Dr. Meena R. Wankhedkar — Family Physician & IMA Women Doctors Wing National Chairperson.",
    images: [{ url: "https://www.sita-ramhospital.com/img/img1/Dr Ravi Wankhedkar.png", alt: "Dr. Ravindra Wankhedkar — Senior Surgeon, Sitaram Hospital Dhule" }],
  },
  twitter: { card: "summary_large_image" as const, title: "Our Doctors — Sitaram Hospital, Dhule", description: "Dr. Ravindra Wankhedkar (IMA National President 2018) & Dr. Meena Wankhedkar — Sitaram Hospital, Dhule." },
  alternates: { canonical: "https://www.sita-ramhospital.com/our-doctors" },
};

export default function OurDoctorsPage() {
  return <OurDoctorsContent />;
}
