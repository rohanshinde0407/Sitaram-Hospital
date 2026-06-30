import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Award, BookOpen, Stethoscope, Heart, Users, Globe, Star, MapPin } from "lucide-react";

function SectionCard({
  icon, title, color, bg, border, children,
  span,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  bg: string;
  border: string;
  children: React.ReactNode;
  span?: string;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden border bg-white ${span ?? ""}`} style={{ borderColor: border }}>
      <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ background: bg, borderColor: border }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: color }}>
          {icon}
        </div>
        <span className="text-sm font-black text-[#111827] uppercase tracking-wide">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />;
}

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
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10 pt-8 border-t border-white/10">
              {[
                { val: "40+", label: "Years of Experience" },
                { val: "IMA", label: "National President 2018" },
                { val: "WMA", label: "International Treasurer" },
                { val: "2.5L+", label: "Girls via Mission Pink" },
                { val: "SAARC", label: "Medical Association President" },
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

            {/* ── Profile header ── */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-10">

              {/* Passport photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-xl"
                  style={{ width: 160, height: 204, border: "3px solid #C62828" }}>
                  <Image
                    src="/img/img1/Dr.%20Ravindra.jpg"
                    alt="Dr. Ravindra S. Wankhedkar"
                    width={160}
                    height={204}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs font-black uppercase tracking-widest text-[#C62828]">Senior Surgeon</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">Sitaram Hospital, Dhule</div>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">Born: 21 September 1963</div>
                </div>
              </div>

              {/* Name & intro */}
              <div className="flex-1 min-w-0">
                <div className="section-eyebrow mb-1">General Surgeon · Laser Proctologist · Medical Leader</div>
                <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Ravindra S. Wankhedkar
                </h2>
                <p className="text-sm text-[#6B7280] italic mb-4">(Dr. Ravindra Sitaram Wankhedkar)</p>

                {/* Key badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    { text: "National President — IMA 2018", color: "#C62828", bg: "#FFF5F5" },
                    { text: "Treasurer — World Medical Association 2019–21", color: "#1565C0", bg: "#EFF6FF" },
                    { text: "President — SAARC Medical Association 2018–20", color: "#0E7490", bg: "#ECFEFF" },
                    { text: "Hony. Prof. of Surgery — SBH Govt. Medical College", color: "#2E7D32", bg: "#F0FDF4" },
                    { text: "National Chair — UNESCO Bioethics", color: "#7B1FA2", bg: "#FAF5FF" },
                  ].map(b => (
                    <span key={b.text} className="text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{ color: b.color, background: b.bg, borderColor: `${b.color}30` }}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed">
                  Born on <strong>21 September 1963</strong> to Smt. Bhagirathibai Wankhedkar (school teacher & headmistress) and Late Shri Sitaram Wankhedkar (freedom fighter), Dr. Ravi Wankhedkar is a perfect example of a modern-day <strong className="text-[#C62828]">Polymath</strong> — a person whose expertise and knowledge spans varied subjects. He completed his schooling from <strong>Canossa Convent, Dhule</strong>, and went on to complete <strong>MBBS &amp; MS (General Surgery)</strong> from the renowned <strong>B.J. Medical College, Pune</strong>. Before even gaining admission, he had resolved that his area of work would be his hometown Dhule — having witnessed firsthand the poverty and related health problems of the region.
                </p>
              </div>
            </div>

            {/* ── Detail cards grid ── */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {/* Education */}
              <SectionCard icon={<BookOpen size={14} color="white" />} title="Education"
                color="#C62828" bg="#FFF5F5" border="#FECACA">
                <div className="space-y-3">
                  {[
                    { degree: "Schooling", inst: "Canossa Convent, Dhule" },
                    { degree: "M.B.B.S.", inst: "B.J. Medical College, Pune" },
                    { degree: "M.S. (General Surgery)", inst: "B.J. Medical College, Pune" },
                  ].map(e => (
                    <div key={e.degree} className="flex items-start gap-3">
                      <Dot color="#C62828" />
                      <div>
                        <div className="text-sm font-bold text-[#111827]">{e.degree}</div>
                        <div className="text-xs text-[#6B7280]">{e.inst}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Academic Career */}
              <SectionCard icon={<Star size={14} color="white" />} title="Academic Career & Awards"
                color="#E65100" bg="#FFF8F4" border="#FED7AA">
                <div className="space-y-3">
                  {[
                    { point: "Assistant Professor in Surgery — Shri Bhausaheb Hire Govt. Medical College, Dhule", note: "" },
                    { point: "Teacher of the Decade Award — 1999", note: "Bestowed by students & staff of SBH Medical College" },
                    { point: "Hony. Professor of Surgery — SBH Govt. Medical College, Dhule", note: "Continuing passion for teaching" },
                    { point: "Member — Board of Exams, Maharashtra University of Health Sciences", note: "" },
                    { point: "Member — Governing Council, NBE Delhi", note: "" },
                    { point: "Board Member — NABH Delhi", note: "" },
                  ].map(e => (
                    <div key={e.point} className="flex items-start gap-3">
                      <Dot color="#E65100" />
                      <div>
                        <div className="text-sm text-[#374151]">{e.point}</div>
                        {e.note && <div className="text-[11px] text-[#9CA3AF] mt-0.5">{e.note}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Specialty & Training */}
              <SectionCard icon={<Stethoscope size={14} color="white" />} title="Specialty & Training"
                color="#2E7D32" bg="#F0FDF4" border="#BBF7D0">
                <div className="space-y-2">
                  {[
                    "Consulting General Surgeon & Coloproctologist",
                    "FIAMS (Coloproctology) — Hyderabad",
                    "FCGP (Proctology) — Chennai",
                    "FIIOPM — Australia",
                    "Basic & Advanced Courses in Coloproctology, Mumbai",
                    "Advanced Laser Surgery Training — Germany",
                    "Member, Association of Colon & Rectal Surgeons of India",
                    "Member, American Society of Colon & Rectal Surgeons (ASCRS USA)",
                  ].map(t => (
                    <div key={t} className="flex items-start gap-3">
                      <Dot color="#2E7D32" />
                      <span className="text-sm text-[#374151]">{t}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* IMA Leadership */}
              <SectionCard icon={<Globe size={14} color="white" />} title="IMA & International Leadership"
                color="#1565C0" bg="#EFF6FF" border="#BFDBFE" span="xl:col-span-2">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { role: "National President, Indian Medical Association", year: "2018" },
                    { role: "Treasurer, World Medical Association (WMA)", year: "2019–21" },
                    { role: "President, SAARC Medical Association", year: "2018–20" },
                    { role: "National Chair — UNESCO Bioethics", year: "Current" },
                    { role: "IMA Presidential Candidate — chosen unopposed", year: "2017" },
                    { role: "Proactive IMA participation since", year: "2003" },
                    { role: "Chair, IMA National Health Scheme", year: "" },
                    { role: "President, Dhule District Basketball Association", year: "Current" },
                  ].map(r => (
                    <div key={r.role} className="flex items-start gap-3 p-2.5 rounded-xl bg-blue-50/50">
                      <Dot color="#1565C0" />
                      <div>
                        <div className="text-sm text-[#374151] font-medium">{r.role}</div>
                        {r.year && <div className="text-[11px] text-[#1565C0] font-bold mt-0.5">{r.year}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* IMA Programs Organised */}
              <SectionCard icon={<Users size={14} color="white" />} title="Major Programs Organised"
                color="#7B1FA2" bg="#FAF5FF" border="#E9D5FF">
                <div className="space-y-2">
                  {[
                    { prog: "WEZ AMSCON HOSPEX", desc: "State-level medical conference" },
                    { prog: "EVECON", desc: "IMA initiative" },
                    { prog: "Unmesh", desc: "National IMA programme" },
                    { prog: "Yomedicon", desc: "Young Medicos' Convention" },
                    { prog: "WIMALS", desc: "Women IMA Leaders Summit" },
                    { prog: "SHABDANGAN", desc: "Medicos' Literary Festival" },
                  ].map(p => (
                    <div key={p.prog} className="flex items-start gap-3">
                      <Dot color="#7B1FA2" />
                      <div>
                        <span className="text-sm font-bold text-[#111827]">{p.prog}</span>
                        <span className="text-xs text-[#9CA3AF] ml-1.5">— {p.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Social Initiatives */}
              <SectionCard icon={<Heart size={14} color="white" />} title="Social Initiatives & Community Work"
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4" span="md:col-span-2 xl:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Mission Pink Health",
                      desc: "Founder Coordinator of an ongoing community health project for Adolescent Tribal Girls — providing screenings, anaemia control, and health education. Over 2,50,000 girls have benefited to date.",
                      color: "#AD1457",
                    },
                    {
                      title: "Shet Shivar Davakhana",
                      desc: "A free clinic for farmers — established at his farm for poor farm workers and agricultural labourers from the surrounding region.",
                      color: "#2E7D32",
                    },
                    {
                      title: "Medical Camps — Satpuda Tribal Region",
                      desc: "Conducted numerous medical camps in remote tribal areas of Satpuda, bringing primary healthcare to underserved communities.",
                      color: "#E65100",
                    },
                    {
                      title: "Disaster & Humanitarian Relief",
                      desc: "Led IMA Dhule's proactive relief for Gujarat & Nepal Earthquakes, Kashmir Floods, and Martyr Families. Founded 'Ubhari Abhiyan' — a helping hand from IMA Dhule for drought & hailstorm-affected farmers.",
                      color: "#1565C0",
                    },
                  ].map(s => (
                    <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <Dot color={s.color} />
                      <div>
                        <div className="text-sm font-bold text-[#111827] mb-0.5">{s.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Personal Life */}
              <SectionCard icon={<MapPin size={14} color="white" />} title="Personal Life & Pursuits"
                color="#047857" bg="#ECFDF5" border="#A7F3D0">
                <div className="space-y-3">
                  {[
                    { item: "Ravi Shrushti Farm", desc: "Transformed a piece of barren land into a lush, colourful farm — now a destination for informal meetings & gatherings." },
                    { item: "Adventure Mountaineering", desc: "Completed Basic Mountaineering Course at Manali. Successfully completed the Kailash-Mansarovar Yatra in 2011." },
                    { item: "Social & Literary Associations", desc: "Associated with many social, medical, sports, and literary organisations across Maharashtra." },
                  ].map(p => (
                    <div key={p.item} className="flex items-start gap-3">
                      <Dot color="#047857" />
                      <div>
                        <div className="text-sm font-bold text-[#111827]">{p.item}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Hospitals Served */}
              <SectionCard icon={<Award size={14} color="white" />} title="Hospitals Served"
                color="#B45309" bg="#FFFBEB" border="#FDE68A">
                <div className="space-y-2">
                  {[
                    "Sassoon General Hospital, Pune",
                    "Civil Hospital, Dhule",
                    "SBH Govt. Medical College, Dhule",
                    "Police & SRPF Medical Services",
                    "Devki Nursing Home, Dhule",
                    "Sitaram Hospital, Dhule (Current)",
                  ].map(p => (
                    <div key={p} className="flex items-center gap-3">
                      <Dot color="#B45309" />
                      <span className="text-sm text-[#374151]">{p}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>


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

              {/* Passport photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-xl"
                  style={{ width: 160, height: 204, border: "3px solid #AD1457" }}>
                  <Image
                    src="/img/img1/Dr.%20Meena.jpg"
                    alt="Dr. Meena R. Wankhedkar"
                    width={160}
                    height={204}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs font-black uppercase tracking-widest" style={{ color: "#AD1457" }}>
                    Gynaecologist & Family Physician
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">Sitaram Hospital, Dhule</div>
                </div>
              </div>

              {/* Name & intro */}
              <div className="flex-1 min-w-0">
                <div className="section-eyebrow mb-1">Family Physician · Obstetrician · Gynaecologist · IMA Leader</div>
                <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Meena R. Wankhedkar
                </h2>
                <p className="text-sm text-[#6B7280] italic mb-4">(Dr. Meenal R. Wankhedkar)</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    { text: "National Chairperson — IMA Women Doctors Wing", color: "#AD1457", bg: "#FDF2F8" },
                    { text: "Past President — IMA Dhule Branch", color: "#7B1FA2", bg: "#FAF5FF" },
                    { text: "Member — IMA Maharashtra State CWC", color: "#1565C0", bg: "#EFF6FF" },
                    { text: "FCGP — Fellow, College of General Practitioners", color: "#2E7D32", bg: "#F0FDF4" },
                    { text: "Past State Joint Secretary — IMA CGP Maharashtra", color: "#047857", bg: "#ECFDF5" },
                  ].map(b => (
                    <span key={b.text} className="text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{ color: b.color, background: b.bg, borderColor: `${b.color}30` }}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed max-w-3xl">
                  Dr. Meena R. Wankhedkar (also referred to as Dr. Meenal R. Wankhedkar) is a prominent Indian medical professional, medical activist, and senior leader within the Indian Medical Association (IMA). Based in Dhule, Maharashtra, she is an experienced <strong className="text-[#AD1457]">family physician, obstetrician, and gynaecologist (OB/GYN)</strong> practising at Sitaram Hospital. She holds an <strong>MBBS</strong> and is a <strong>Fellow of the College of General Practitioners (FCGP)</strong>. She served as the <strong className="text-[#AD1457]">National Chairperson of the IMA Women Doctors Wing (IMA-WDW)</strong> and as a member of the <strong>IMA Maharashtra State Central Working Committee</strong>, driving health initiatives for women physicians and the wider community.
                </p>
              </div>
            </div>

            {/* Detail grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              <SectionCard icon={<BookOpen size={14} color="white" />} title="Education"
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4">
                <div className="space-y-3">
                  {[
                    { degree: "M.B.B.S.", inst: "Lokmanya Tilak Municipal Medical College, Mumbai" },
                    { degree: "FCGP", inst: "Chennai" },
                    { degree: "FIAMS", inst: "Hyderabad" },
                  ].map(e => (
                    <div key={e.degree} className="flex items-start gap-3">
                      <Dot color="#AD1457" />
                      <div>
                        <div className="text-sm font-bold text-[#111827]">{e.degree}</div>
                        <div className="text-xs text-[#6B7280]">{e.inst}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Users size={14} color="white" />} title="Key IMA Roles"
                color="#7B1FA2" bg="#FAF5FF" border="#E9D5FF">
                <div className="space-y-2">
                  {[
                    "National Chairperson, IMA Women Doctors Wing (WDW) — IMA Headquarters",
                    "Member, IMA Maharashtra State Central Working Committee (CWC)",
                    "Past President, IMA Dhule Branch",
                    "Past National Joint Secretary, IMA CGP",
                    "Past State Joint Secretary, IMA CGP Maharashtra",
                    "Past Election Commission Member, IMA MS",
                    "National Standing Committee Member, IMA",
                    "Speaker — ICON 2015 Conference",
                  ].map(r => (
                    <div key={r} className="flex items-start gap-3">
                      <Dot color="#7B1FA2" />
                      <span className="text-sm text-[#374151]">{r}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Stethoscope size={14} color="white" />} title="Clinical Services"
                color="#2E7D32" bg="#F0FDF4" border="#BBF7D0">
                <div className="space-y-2">
                  {[
                    "Obstetrics & Gynaecology (OB/GYN)",
                    "Well Women Clinic",
                    "Antenatal Care & Maternity",
                    "Gynaecological Surgery",
                    "Family Medicine & General Practice",
                    "Acute & Chronic Illness Management",
                  ].map(s => (
                    <div key={s} className="flex items-start gap-3">
                      <Dot color="#2E7D32" />
                      <span className="text-sm text-[#374151]">{s}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Heart size={14} color="white" />} title="Advocacy, Community & IMA Contributions"
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4" span="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Mission Pink Health",
                      desc: "Centrally involved in this large-scale community health project focused on anaemia control and health education for adolescent tribal girls across the Satpuda region, run alongside Dr. Ravi Wankhedkar.",
                      color: "#AD1457",
                    },
                    {
                      title: "Free Medical Outreach",
                      desc: "Active in free medical camps for farm workers, tribal communities, and underprivileged populations in and around Dhule and the Satpuda tribal region.",
                      color: "#2E7D32",
                    },
                    {
                      title: "IMA Women's Welfare & Leadership Programs",
                      desc: "Led national standing committees and specialised welfare programs for women doctors under the IMA banner — including study tours, allergy booklets & guidelines, and dedicated leadership development initiatives.",
                      color: "#7B1FA2",
                    },
                    {
                      title: "White Papers & Medical Education",
                      desc: "Contributed to white papers on women's issues in medicine and family doctor practices. Recognised for contributions to medical education, women doctors' forums, and IMA programmes.",
                      color: "#1565C0",
                    },
                  ].map(s => (
                    <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <Dot color={s.color} />
                      <div>
                        <div className="text-sm font-bold text-[#111827] mb-0.5">{s.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Award size={14} color="white" />} title="Hospitals Served"
                color="#B45309" bg="#FFFBEB" border="#FDE68A">
                <div className="space-y-2">
                  {[
                    "JMF Hospital, Dhule",
                    "Bhagirath Clinic, Dhule",
                    "Devki Nursing Home, Dhule",
                    "Sitaram Hospital, Dhule (Current)",
                  ].map(p => (
                    <div key={p} className="flex items-center gap-3">
                      <Dot color="#B45309" />
                      <span className="text-sm text-[#374151]">{p}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

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
