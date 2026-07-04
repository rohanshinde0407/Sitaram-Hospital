import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DepartmentsSection from "@/components/DepartmentsSection";
import ClinicOverview from "@/components/ClinicOverview";
import About from "@/components/About";
import Conditions from "@/components/Conditions";
import Treatments from "@/components/Treatments";
import LaserBenefits from "@/components/LaserBenefits";
import Doctors from "@/components/Doctors";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Spacer for fixed header: mobile h-14 (56px), desktop helpline+nav ≈ h-24 (96px) */}
      <div className="h-14 md:h-24" />

      {/* ── Trust bar ── */}
      <div className="bg-gradient-to-r from-[#FFF5F5] via-white to-[#FFF5F5] border-b border-red-100 py-1.5 text-center">
        <span className="text-[10px] md:text-xs font-bold tracking-wider" style={{ color: "#C62828" }}>
          40 Years of Trusted Care &nbsp;·&nbsp; Comprehensive Care &nbsp;·&nbsp; All Under One Roof
        </span>
      </div>

      <main>
        <Hero />
        <About />
        <DepartmentsSection />
        <ClinicOverview />
        <Conditions />
        <Treatments />
        <LaserBenefits />
        <Doctors />
      </main>
      <Footer />
    </>
  );
}
