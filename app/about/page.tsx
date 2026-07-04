import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us — Sitaram Hospital, Dhule",
  description:
    "Learn the story behind Sitaram Hospital and ZEN Laser Procto Care, Dhule — four decades of compassionate, ethical, and affordable healthcare by Dr. Ravi and Dr. Meena Wankhedkar.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ── Page hero ── */}
        <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-10 md:py-14 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Sitaram Hospital</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3">About Us</h1>
            <p className="text-white/75 text-sm md:text-base max-w-xl mx-auto">
              Four decades of compassionate, ethical, and affordable healthcare — rooted in Dhule, North Maharashtra.
            </p>
          </div>
        </div>

        {/* ── Our Story ── */}
        <section className="py-10 md:py-16 bg-white border-b-4 border-[#C62828]">
          <div className="max-w-4xl mx-auto px-4 md:px-10">
            <div className="inline-block bg-[#C62828] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Our Story
            </div>

            <div className="space-y-4 text-[#374151] text-sm md:text-base leading-relaxed">
              <p>
                <Link href="/our-doctors#ravi" className="font-bold text-[#C62828] underline underline-offset-2 hover:text-[#8E0000] transition-colors">Dr. Ravi Wankhedkar</Link> and <Link href="/our-doctors#meena" className="font-bold text-[#AD1457] underline underline-offset-2 hover:text-[#880E4F] transition-colors">Dr. Meena Wankhedkar</Link>, after completing their medical education in Pune and Mumbai respectively, chose to return to their roots in Dhule — a small mofussil town — with a vision to provide quality healthcare to the people of the region.
              </p>
              <p>
                Their journey began in <strong>1986</strong> with the establishment of the modest <strong>Bhagirath Clinic</strong>. This was followed by <strong>Devki Nursing Home</strong>, and eventually evolved into <strong>Sitaram Hospital</strong>, a modern multi-specialty healthcare institution. Throughout this journey, their commitment to delivering compassionate, ethical, and affordable medical care has remained unwavering.
              </p>
              <p>
                Sitaram Hospital was inaugurated by renowned social reformer <strong>Shri Anna Hazare</strong> in the august presence of <strong>Dr. S. B. Mujumdar</strong>, Founder and President of Symbiosis, along with several distinguished dignitaries — an occasion that marked an important milestone in the hospital's journey.
              </p>
              <p>
                In addition to their private practice, both doctors have served in various capacities at public hospitals, contributing significantly to community healthcare. Beyond clinical practice, they have played active leadership roles within the medical fraternity, advocating for professional excellence and the welfare of healthcare professionals.
              </p>
              <p>
                Their dedication to society extends well beyond the hospital through numerous community health initiatives, awareness programs, and medical camps aimed at improving public health and reaching underserved populations.
              </p>
              <p>
                Outside their professional commitments, <Link href="/our-doctors#ravi" className="font-bold text-[#C62828] underline underline-offset-2 hover:text-[#8E0000] transition-colors">Dr. Ravi</Link> and <Link href="/our-doctors#meena" className="font-bold text-[#AD1457] underline underline-offset-2 hover:text-[#880E4F] transition-colors">Dr. Meena Wankhedkar</Link> enjoy <strong>farming, travelling, sports, and mountaineering</strong> — interests that reflect their spirit of adventure, resilience, and lifelong learning.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
