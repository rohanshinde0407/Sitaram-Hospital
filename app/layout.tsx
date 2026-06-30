import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Zen Laser Procto Care – Advanced Treatment for Piles, Fissure & Fistula | Dhule",
  description:
    "Zen Laser Procto Care at Sitaram Hospital, Dhule – A One-Stop Advanced Laser Centre for Piles, Fissure & Fistula. Painless, Scarless, Quick Recovery. Day Care Procedures. Dr. Ravindra Wankhedkar.",
  keywords: "piles treatment dhule, fissure laser surgery, fistula laser treatment, zen laser procto care, proctology dhule, laser piles surgery, ano-rectal diseases, Dr Ravindra Wankhedkar",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
