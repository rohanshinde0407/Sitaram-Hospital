"use client";

import Header from "@/components/Header";
import DepartmentsSection from "@/components/DepartmentsSection";
import Footer from "@/components/Footer";

export default function ServicesContent() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>
        <DepartmentsSection />
      </main>
      <Footer />
    </>
  );
}
