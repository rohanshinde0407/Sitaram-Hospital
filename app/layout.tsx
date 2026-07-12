import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "Sitaram Hospital & ZEN Laser Procto Care — Piles, Fissure & Fistula Treatment | Dhule",
    template: "%s | Sitaram Hospital, Dhule",
  },
  description:
    "Sitaram Hospital, Dhule — 40+ years of trusted healthcare. ZEN Laser Procto Care: advanced laser treatment for Piles, Fissure & Fistula. Painless · Day Care · Home Same Day. Dr. Ravindra Wankhedkar.",
  keywords:
    "sitaram hospital dhule, ZEN laser procto care, dhule top hospital, best hospital in dhule, wankhedkar hospital dhule, ravi wankhedkar hospital, dr meena wankhedkar hospital, piles treatment dhule, pailes dhule, fisher dhule, fissure treatment dhule, fistula treatment dhule, mulvyadh dhule, bawaseer dhule, laser proctology dhule, ano-rectal treatment dhule, Dr Ravindra Wankhedkar, Dr Meena Wankhedkar, haemorrhoids dhule, bleeding piles dhule, pain during passing stool dhule",
  metadataBase: new URL("https://www.sita-ramhospital.com"),
  openGraph: {
    type: "website",
    siteName: "Sitaram Hospital & ZEN Laser Procto Care",
    locale: "en_IN",
    images: [{ url: "/img/hero.png", width: 3450, height: 1715, alt: "Sitaram Hospital & ZEN Laser Procto Care, Dhule" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sitaramhospital",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/img/img1/fav.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalOrganization", "LocalBusiness"],
      "@id": "https://www.sita-ramhospital.com/#organization",
      "name": "Sitaram Hospital",
      "alternateName": ["ZEN Laser Procto Care", "ZEN Laser Procto Care Dhule", "Sitaram Hospital Dhule"],
      "description": "Sitaram Hospital is a trusted multi-specialty hospital in Dhule, Maharashtra with 40+ years of healthcare. ZEN Laser Procto Care is its dedicated advanced laser proctology centre offering day-care treatment for Piles, Fissure and Fistula.",
      "url": "https://www.sita-ramhospital.com",
      "logo": "https://www.sita-ramhospital.com/img/img1/fav.png",
      "image": "https://www.sita-ramhospital.com/img/hero.png",
      "telephone": ["+919421279065", "+910256235795", "+910256297695"],
      "email": "",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhangya Maruti Chowk, Lane No. 6",
        "addressLocality": "Dhule",
        "addressRegion": "Maharashtra",
        "postalCode": "424001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "20.9042",
        "longitude": "74.7748",
      },
      "hasMap": "https://maps.app.goo.gl/5QVF217ZRecwuvMcA",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "10:00",
          "closes": "14:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "18:00",
          "closes": "21:00",
        },
      ],
      "medicalSpecialty": ["Proctology","GeneralSurgery","Obstetrics","FamilyMedicine","Coloproctology"],
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Card",
      "areaServed": ["Dhule", "North Maharashtra", "Maharashtra"],
      "sameAs": ["https://maps.app.goo.gl/5QVF217ZRecwuvMcA"],
    },
    {
      "@type": "Physician",
      "@id": "https://www.sita-ramhospital.com/#dr-ravi",
      "name": "Dr. Ravindra S. Wankhedkar",
      "honorificPrefix": "Dr.",
      "jobTitle": "Senior Surgeon & Laser Proctologist",
      "description": "MS (General Surgery), MBBS — B.J. Medical College Pune. National President IMA 2018. Advanced Laser Surgery Training Germany. Member ASCRS USA.",
      "medicalSpecialty": ["Proctology","GeneralSurgery","Coloproctology"],
      "alumniOf": {"@type": "CollegeOrUniversity", "name": "B.J. Medical College, Pune"},
      "worksFor": {"@id": "https://www.sita-ramhospital.com/#organization"},
      "award": ["National President Indian Medical Association 2018","Treasurer World Medical Association 2019-21","Teacher of the Decade 1999","Green Doctor Award"],
    },
    {
      "@type": "Physician",
      "@id": "https://www.sita-ramhospital.com/#dr-meena",
      "name": "Dr. Meena R. Wankhedkar",
      "honorificPrefix": "Dr.",
      "jobTitle": "Family Physician & Obstetrician",
      "description": "MBBS — Lokmanya Tilak Municipal Medical College Mumbai. FCGP. National Chairperson IMA Women Doctors Wing.",
      "medicalSpecialty": ["FamilyMedicine","Obstetrics","GeneralPractice"],
      "alumniOf": {"@type": "CollegeOrUniversity", "name": "Lokmanya Tilak Municipal Medical College, Mumbai"},
      "worksFor": {"@id": "https://www.sita-ramhospital.com/#organization"},
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
