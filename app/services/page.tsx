import Header from "@/components/Header";
import DepartmentsSection from "@/components/DepartmentsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services — Sitaram Hospital, Dhule",
  description:
    "Comprehensive healthcare services at Sitaram Hospital — Surgery, Women's Department, Proctology (Piles, Fissure, Fistula) and Family Physician services. All under one roof in Dhule, Maharashtra.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />

      {/* Page hero */}
      <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-10 md:py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Sitaram Hospital</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3">
            Comprehensive Care
          </h1>
          <div className="inline-block bg-white text-[#0f6d6d] font-black text-xl md:text-3xl px-6 py-2 mb-4">
            All Under One Roof
          </div>
          <p className="text-white/75 text-sm md:text-base max-w-xl mx-auto">
            From general surgery and maternity care to advanced laser proctology — expert treatment for every need, in one trusted hospital.
          </p>
        </div>
      </div>

      <main>
        <DepartmentsSection />
      </main>

      <Footer />
    </>
  );
}
