import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Award, BookOpen, Stethoscope, Heart, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero banner ── */}
        <div className="relative bg-gradient-to-br from-[#0D1B2A] via-[#111827] to-[#0F1923] py-14 md:py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C62828, transparent 70%)", transform: "translate(40%,-40%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #2E7D32, transparent 70%)", transform: "translate(-40%,40%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 md:px-10 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Sitaram Hospital — Our Doctors
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-black mb-4 leading-tight">
              Meet the Specialists Behind<br />
              <span style={{ color: "#EF5350" }}>ZEN Laser Procto Care</span>
            </h1>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Nationally and internationally recognised leaders in surgery, coloproctology, and women's healthcare — serving Dhule and North Maharashtra for over four decades.
            </p>

            <div className="flex flex-wrap justify-center gap-10 mt-10 pt-8 border-t border-white/10">
              {[
                { val: "40+", label: "Years of Experience" },
                { val: "IMA", label: "National President" },
                { val: "WMA", label: "International Treasurer" },
                { val: "2.5L+", label: "Girls Served via Mission Pink" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">{s.val}</div>
                  <div className="text-white/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            DR. RAVINDRA WANKHEDKAR
        ════════════════════════════════════════ */}
        <section id="ravi" className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            {/* Profile header */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">

              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="w-36 h-36 rounded-3xl flex items-center justify-center text-white text-5xl font-black shadow-xl"
                  style={{ background: "linear-gradient(135deg, #C62828 0%, #8E0000 100%)" }}>
                  RW
                </div>
                <div className="text-center">
                  <div className="text-xs font-black uppercase tracking-widest text-[#C62828]">Senior Surgeon</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">Sitaram Hospital, Dhule</div>
                </div>
              </div>

              {/* Name & intro */}
              <div className="flex-1">
                <div className="section-eyebrow mb-1">Laser Proctologist & Colorectal Surgeon</div>
                <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Ravindra S. Wankhedkar
                </h2>
                <p className="text-sm text-[#6B7280] italic mb-4">(Dr. Ravindra Sitaram Wankhedkar)</p>

                {/* Leadership badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    { text: "National President — IMA 2017–18", color: "#C62828", bg: "#FFF5F5" },
                    { text: "Treasurer — World Medical Association", color: "#1565C0", bg: "#EFF6FF" },
                    { text: "Professor of Surgery — SBH Govt. Medical College", color: "#2E7D32", bg: "#F0FDF4" },
                  ].map(b => (
                    <span key={b.text} className="text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{ color: b.color, background: b.bg, borderColor: `${b.color}30` }}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed max-w-3xl">
                  Dr. Ravindra Sitaram Wankhedkar is a prominent Indian surgeon and medical leader who has held top leadership positions both nationally and internationally. Based in Dhule, Maharashtra, he is highly respected for his medical practice, health policy advocacy, and extensive social work. He served as the <strong className="text-[#C62828]">National President of the Indian Medical Association (IMA) 2017–2018</strong> — India's largest organisation of allopathic doctors — and as <strong className="text-[#1565C0]">Treasurer of the World Medical Association (WMA)</strong>, representing India in international medical ethics frameworks.
                </p>
              </div>
            </div>

            {/* Detail grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {/* Education */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
                  style={{ background: "#FFF5F5" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#C62828" }}>
                    <BookOpen size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Education</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { degree: "M.B.B.S.", inst: "B.J. Medical College, Pune" },
                    { degree: "M.S. (General Surgery)", inst: "B.J. Medical College, Pune" },
                  ].map(e => (
                    <div key={e.degree} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#C62828" }} />
                      <div>
                        <div className="text-sm font-bold text-[#111827]">{e.degree}</div>
                        <div className="text-xs text-[#6B7280]">{e.inst}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
                  style={{ background: "#EFF6FF" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#1565C0" }}>
                    <Globe size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Leadership Roles</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    "National President, IMA (2017–2018)",
                    "Treasurer, World Medical Association (WMA)",
                    "Professor & Head of Colo-Proctology, SBH Govt. Medical College, Dhule",
                    "Chair, IMA National Health Scheme",
                  ].map(r => (
                    <div key={r} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#1565C0" }} />
                      <span className="text-sm text-[#374151]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialty & Training */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
                  style={{ background: "#F0FDF4" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#2E7D32" }}>
                    <Stethoscope size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Specialty & Training</span>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    "Consulting General Surgeon & Coloproctologist",
                    "FIAMS (Coloproctology) — Hyderabad",
                    "FCGP (Proctology) — Chennai",
                    "FIIOPM — Australia",
                    "Advanced Laser Surgery Training — Germany",
                    "Member, ACRS India",
                    "Member, ASCRS USA",
                  ].map(t => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#2E7D32" }} />
                      <span className="text-sm text-[#374151]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Initiatives */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden md:col-span-2">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
                  style={{ background: "#FAF5FF" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#7B1FA2" }}>
                    <Heart size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Social Initiatives & Community Work</span>
                </div>
                <div className="p-5 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Mission Pink Health",
                      desc: "Founder Coordinator of this large-scale community health project providing screenings, anaemia control, and health education to over 2,50,000 adolescent tribal girls.",
                      color: "#AD1457",
                    },
                    {
                      title: "Shet Shivar Davakhana",
                      desc: "Established a free clinic at his farm specifically for poor farmers, agricultural labourers, and workers from the surrounding region.",
                      color: "#2E7D32",
                    },
                    {
                      title: "Healthcare Policy Advocacy",
                      desc: "A vocal critic of 'mixopathy' and frequent advocate for increased public spending on primary healthcare infrastructure.",
                      color: "#1565C0",
                    },
                    {
                      title: "Ravi Shrushti Farm & Personal Pursuits",
                      desc: "Transformed barren land into a lush farm 'Ravi Shrushti'. Completed the Kailash-Mansarovar Yatra and is an avid adventure trekker.",
                      color: "#E65100",
                    },
                  ].map(s => (
                    <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                      <div>
                        <div className="text-sm font-bold text-[#111827] mb-0.5">{s.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Services */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
                  style={{ background: "#FFFBEB" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#B45309" }}>
                    <Award size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Hospitals Served</span>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    "Sassoon General Hospital, Pune",
                    "Civil Hospital, Dhule",
                    "SBH Govt. Medical College, Dhule",
                    "Police & SRPF Medical Services",
                    "Devki Nursing Home, Dhule",
                    "Sitaram Hospital, Dhule (Current)",
                  ].map(p => (
                    <div key={p} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#B45309" }} />
                      <span className="text-sm text-[#374151]">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            DR. MEENA WANKHEDKAR
        ════════════════════════════════════════ */}
        <section id="meena" className="py-16 md:py-20 bg-[#F8FAFB]">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            {/* Profile header */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">

              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="w-36 h-36 rounded-3xl flex items-center justify-center text-white text-5xl font-black shadow-xl"
                  style={{ background: "linear-gradient(135deg, #AD1457 0%, #880E4F 100%)" }}>
                  MW
                </div>
                <div className="text-center">
                  <div className="text-xs font-black uppercase tracking-widest" style={{ color: "#AD1457" }}>Gynaecologist & Family Physician</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">Sitaram Hospital, Dhule</div>
                </div>
              </div>

              {/* Name & intro */}
              <div className="flex-1">
                <div className="section-eyebrow mb-1" style={{ color: "#AD1457" }}>
                  <span style={{ background: "#AD1457" }} className="inline-block w-5 h-[3px] rounded mr-2" />
                  Obstetrician, Gynaecologist & IMA Leader
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Meena R. Wankhedkar
                </h2>
                <p className="text-sm text-[#6B7280] italic mb-4">(Dr. Meenal R. Wankhedkar)</p>

                {/* Leadership badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    { text: "National Chairperson — IMA Women Doctors Wing", color: "#AD1457", bg: "#FDF2F8" },
                    { text: "President — IMA Dhule Branch", color: "#7B1FA2", bg: "#FAF5FF" },
                    { text: "State Joint Secretary — IMA CGP Maharashtra", color: "#1565C0", bg: "#EFF6FF" },
                  ].map(b => (
                    <span key={b.text} className="text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{ color: b.color, background: b.bg, borderColor: `${b.color}30` }}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed max-w-3xl">
                  Dr. Meena R. Wankhedkar is a prominent Indian medical professional, medical activist, and senior IMA leader. An experienced <strong className="text-[#AD1457]">family physician, obstetrician, and gynaecologist (OB/GYN)</strong>, she practices at Sitaram Hospital, Dhule. She served as the <strong className="text-[#AD1457]">National Chairperson of the IMA Women Doctors Wing (IMA-WDW)</strong> and has been the President of the IMA Dhule Branch, driving health initiatives for women physicians and the wider community.
                </p>
              </div>
            </div>

            {/* Detail grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {/* Education */}
              <div className="rounded-2xl border border-pink-100 overflow-hidden bg-white">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-pink-100"
                  style={{ background: "#FDF2F8" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#AD1457" }}>
                    <BookOpen size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Education</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { degree: "M.B.B.S.", inst: "Lokmanya Tilak Municipal Medical College, Mumbai" },
                    { degree: "FCGP", inst: "Chennai" },
                    { degree: "FIAMS", inst: "Hyderabad" },
                  ].map(e => (
                    <div key={e.degree} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#AD1457" }} />
                      <div>
                        <div className="text-sm font-bold text-[#111827]">{e.degree}</div>
                        <div className="text-xs text-[#6B7280]">{e.inst}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMA Roles */}
              <div className="rounded-2xl border border-purple-100 overflow-hidden bg-white">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-100"
                  style={{ background: "#FAF5FF" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#7B1FA2" }}>
                    <Users size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Key IMA Roles</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    "National Chairperson, IMA Women Doctors Wing (WDW)",
                    "President, IMA Dhule Branch",
                    "State Joint Secretary, IMA CGP Maharashtra",
                    "Speaker — ICON 2015 Conference",
                    "National Standing Committee Member, IMA",
                  ].map(r => (
                    <div key={r} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#7B1FA2" }} />
                      <span className="text-sm text-[#374151]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Services */}
              <div className="rounded-2xl border border-green-100 overflow-hidden bg-white">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-green-100"
                  style={{ background: "#F0FDF4" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#2E7D32" }}>
                    <Stethoscope size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Clinical Services</span>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    "Obstetrics & Gynaecology (OB/GYN)",
                    "Well Women Clinic",
                    "Antenatal Care & Maternity",
                    "Gynaecological Surgery",
                    "Family Medicine & General Practice",
                    "Acute & Chronic Illness Management",
                  ].map(s => (
                    <div key={s} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#2E7D32" }} />
                      <span className="text-sm text-[#374151]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Initiatives */}
              <div className="rounded-2xl border border-pink-100 overflow-hidden bg-white md:col-span-2">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-pink-100"
                  style={{ background: "#FDF2F8" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#AD1457" }}>
                    <Heart size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Community Initiatives</span>
                </div>
                <div className="p-5 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Mission Pink Health",
                      desc: "Centrally involved in this large-scale health awareness project focused on anaemia control and health education for adolescent tribal girls across the Satpuda region.",
                      color: "#AD1457",
                    },
                    {
                      title: "Free Medical Outreach",
                      desc: "Active in localised free medical camps for farm workers, tribal communities, and underprivileged populations in and around Dhule.",
                      color: "#2E7D32",
                    },
                    {
                      title: "IMA Women's Welfare Programs",
                      desc: "Led national standing committees and specialised welfare programs for women doctors under the IMA banner, including study tours, allergy guideline publications, and leadership development.",
                      color: "#7B1FA2",
                    },
                    {
                      title: "White Papers & Medical Education",
                      desc: "Contributed to white papers on women's issues in medicine and family doctor practices; recognised for contributions to medical education and women doctors' forums.",
                      color: "#1565C0",
                    },
                  ].map(s => (
                    <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                      <div>
                        <div className="text-sm font-bold text-[#111827] mb-0.5">{s.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hospitals Served */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
                  style={{ background: "#FFFBEB" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#B45309" }}>
                    <Award size={14} color="white" />
                  </div>
                  <span className="text-sm font-black text-[#111827] uppercase tracking-wide">Hospitals Served</span>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    "JMF Hospital, Dhule",
                    "Bhagirath Clinic, Dhule",
                    "Devki Nursing Home, Dhule",
                    "Sitaram Hospital, Dhule (Current)",
                  ].map(p => (
                    <div key={p} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#B45309" }} />
                      <span className="text-sm text-[#374151]">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Contact strip ── */}
        <div className="bg-[#111827] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
            <h3 className="text-white text-2xl font-black mb-2">Consult Our Specialists</h3>
            <p className="text-white/60 text-sm mb-6">Sitaram Hospital, Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:9421279065"
                className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#8E0000] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                📞 Call: 9421279065
              </a>
              <a href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                💬 WhatsApp Us
              </a>
              <Link href="/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-white/20">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
