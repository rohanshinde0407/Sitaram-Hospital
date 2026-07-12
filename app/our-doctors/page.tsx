import OurDoctorsContent from "./OurDoctorsContent";

export const metadata = {
  title: "Our Doctors — Sitaram Hospital, Dhule",
  description:
    "Meet Dr. Ravindra S. Wankhedkar and Dr. Meena R. Wankhedkar — nationally and internationally recognised specialists in coloproctology, laser surgery, and family medicine at Sitaram Hospital, Dhule.",
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
