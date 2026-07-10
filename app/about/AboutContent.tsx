"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutContent() {
  const { lang, t } = useLanguage();
  const ap = t.aboutPage;

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* Page hero */}
        <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-10 md:py-14 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">{ap.heroSubtitle}</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3">{ap.heroTitle}</h1>
            <p className="text-white/75 text-sm md:text-base max-w-xl mx-auto">{ap.heroDesc}</p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-10 md:py-16 bg-white border-b-4 border-[#C62828]">
          <div className="max-w-4xl mx-auto px-4 md:px-10">
            <div className="inline-block bg-[#C62828] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              {ap.storyBadge}
            </div>

            <div className="space-y-4 text-[#374151] text-sm md:text-base leading-relaxed">
              <p>
                {lang === "mr" ? (
                  <>
                    <Link href="/our-doctors#ravi" className="font-bold text-[#C62828] underline underline-offset-2 hover:text-[#8E0000] transition-colors">डॉ. रवी वानखेडकर</Link>
                    {" आणि "}
                    <Link href="/our-doctors#meena" className="font-bold text-[#AD1457] underline underline-offset-2 hover:text-[#880E4F] transition-colors">डॉ. मीना वानखेडकर</Link>
                    {" यांनी अनुक्रमे पुणे आणि मुंबईत वैद्यकीय शिक्षण पूर्ण केल्यानंतर, त्यांनी धुळे या छोट्या मोफस्सिल शहरात परत येण्याचा निर्णय घेतला — या प्रदेशातील लोकांना दर्जेदार आरोग्यसेवा प्रदान करण्याच्या दृष्टिकोनाने."}
                  </>
                ) : (
                  <>
                    <Link href="/our-doctors#ravi" className="font-bold text-[#C62828] underline underline-offset-2 hover:text-[#8E0000] transition-colors">Dr. Ravi Wankhedkar</Link>
                    {" and "}
                    <Link href="/our-doctors#meena" className="font-bold text-[#AD1457] underline underline-offset-2 hover:text-[#880E4F] transition-colors">Dr. Meena Wankhedkar</Link>
                    {", after completing their medical education in Pune and Mumbai respectively, chose to return to their roots in Dhule — a small mofussil town — with a vision to provide quality healthcare to the people of the region."}
                  </>
                )}
              </p>
              <p>
                {lang === "mr"
                  ? ap.para2
                  : <>Their journey began in <strong>1986</strong> with the establishment of the modest <strong>Bhagirath Clinic</strong>. This was followed by <strong>Devki Nursing Home</strong>, and eventually evolved into <strong>Sitaram Hospital</strong>, a modern multi-specialty healthcare institution. Throughout this journey, their commitment to delivering compassionate, ethical, and affordable medical care has remained unwavering.</>
                }
              </p>
              <p>
                {lang === "mr"
                  ? ap.para3
                  : <>Sitaram Hospital was inaugurated by renowned social reformer <strong>Shri Anna Hazare</strong> in the august presence of <strong>Dr. S. B. Mujumdar</strong>, Founder and President of Symbiosis, along with several distinguished dignitaries — an occasion that marked an important milestone in the hospital&apos;s journey.</>
                }
              </p>
              <p>{ap.para4}</p>
              <p>{ap.para5}</p>
              <p>
                {lang === "mr" ? (
                  <>
                    {ap.para6.split("डॉ. रवी")[0]}
                    <Link href="/our-doctors#ravi" className="font-bold text-[#C62828] underline underline-offset-2 hover:text-[#8E0000] transition-colors">डॉ. रवी</Link>
                    {" आणि "}
                    <Link href="/our-doctors#meena" className="font-bold text-[#AD1457] underline underline-offset-2 hover:text-[#880E4F] transition-colors">डॉ. मीना वानखेडकर</Link>
                    {" शेती, प्रवास, क्रीडा आणि पर्वतारोहणाचा आनंद घेतात."}
                  </>
                ) : (
                  <>
                    Outside their professional commitments,{" "}
                    <Link href="/our-doctors#ravi" className="font-bold text-[#C62828] underline underline-offset-2 hover:text-[#8E0000] transition-colors">Dr. Ravi</Link>
                    {" and "}
                    <Link href="/our-doctors#meena" className="font-bold text-[#AD1457] underline underline-offset-2 hover:text-[#880E4F] transition-colors">Dr. Meena Wankhedkar</Link>
                    {" enjoy "}<strong>farming, travelling, sports, and mountaineering</strong>{" — interests that reflect their spirit of adventure, resilience, and lifelong learning."}
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
