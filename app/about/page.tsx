import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Award, BookOpen, Stethoscope, Heart, Users, Globe, Star, MapPin, Trophy, CalendarDays } from "lucide-react";

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
      <div className="h-14 md:h-24" />
      <main>

        {/* ── Hero banner ── */}
        <div className="relative bg-gradient-to-br from-[#0D1B2A] via-[#111827] to-[#0F1923] py-10 md:py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C62828, transparent 70%)", transform: "translate(40%,-40%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #2E7D32, transparent 70%)", transform: "translate(-40%,40%)" }} />

          <div className="relative max-w-3xl mx-auto px-4 md:px-10 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-5 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Sitaram Hospital — Our Doctors
            </div>
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-black mb-3 leading-tight">
              Meet the Specialists Behind<br />
              <span style={{ color: "#EF5350" }}>ZEN Laser Procto Care</span>
            </h1>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto px-2">
              Nationally and internationally recognised leaders in surgery, coloproctology, and women's healthcare — serving Dhule and North Maharashtra for over four decades.
            </p>
            {/* Stats grid — 2x2 on mobile, row on md */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-10 mt-8 pt-7 border-t border-white/10">
              {[
                { val: "40+",   label: "Years of Experience" },
                { val: "IMA",   label: "National President 2018" },
                { val: "WMA",   label: "International Treasurer" },
                { val: "2.5L+", label: "Girls via Mission Pink" },
                { val: "SAARC", label: "Medical Assoc. President" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-xl md:text-3xl font-black text-white">{s.val}</div>
                  <div className="text-white/50 text-[10px] md:text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            ABOUT THE FOUNDERS
        ════════════════════════════════════════ */}
        <section className="py-10 md:py-16 bg-white border-b-4 border-[#C62828]">
          <div className="max-w-4xl mx-auto px-4 md:px-10">
            <div className="inline-block bg-[#C62828] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Story
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#111827] mb-6">About the Founders</h2>

            <div className="space-y-4 text-[#374151] text-sm md:text-base leading-relaxed">
              <p>
                Dr. Ravi Wankhedkar and Dr. Meena Wankhedkar, after completing their medical education in Pune and Mumbai respectively, chose to return to their roots in Dhule — a small mofussil town — with a vision to provide quality healthcare to the people of the region.
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
                Outside their professional commitments, Dr. Ravi and Dr. Meena Wankhedkar enjoy <strong>farming, travelling, sports, and mountaineering</strong> — interests that reflect their spirit of adventure, resilience, and lifelong learning.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            DR. RAVINDRA WANKHEDKAR
        ════════════════════════════════════════ */}
        <section id="ravi" className="py-10 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            {/* ── Profile header ── */}
            <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-10">

              {/* Passport photo — centered on mobile */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 w-full sm:w-auto">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
                  style={{ width: 130, height: 166 }}>
                  <Image
                    src="/img/img1/Dr%20Ravi%20Wankhedkar.png"
                    alt="Dr. Ravindra S. Wankhedkar"
                    width={130}
                    height={166}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#C62828]">Senior Surgeon</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Sitaram Hospital, Dhule</div>
                </div>
              </div>

              {/* Name & intro */}
              <div className="flex-1 min-w-0">
                <div className="section-eyebrow mb-1 text-[10px] md:text-xs">General Surgeon · Laser Proctologist · Medical Leader</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Ravindra S. Wankhedkar
                </h2>
                <p className="text-xs text-[#6B7280] italic mb-3">(Dr. Ravindra Sitaram Wankhedkar)</p>

                {/* Key badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { text: "National President — Indian Medical Association, 2018", color: "#C62828", bg: "#FFF5F5" },
                    { text: "Treasurer — World Medical Association 2019–21", color: "#1565C0", bg: "#EFF6FF" },
                    { text: "President — SAARC Medical Association 2018–20", color: "#0E7490", bg: "#ECFEFF" },
                    { text: "Hony. Prof. of Surgery — SBH Govt. Medical College", color: "#2E7D32", bg: "#F0FDF4" },
                    { text: "National Chair — UNESCO Bioethics", color: "#7B1FA2", bg: "#FAF5FF" },
                  ].map(b => (
                    <span key={b.text} className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border"
                      style={{ color: b.color, background: b.bg, borderColor: `${b.color}30` }}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] text-sm md:text-base leading-relaxed">
                  Son of Smt. Bhagirathibai Wankhedkar (school teacher &amp; headmistress) and Late Shri Sitaram Wankhedkar (freedom fighter), Dr. Ravi Wankhedkar is a perfect example of a modern-day <strong className="text-[#C62828]">Polymath</strong> — a person whose expertise and knowledge spans varied subjects. He completed his schooling from <strong>Canossa Convent, Dhule</strong>, and went on to complete <strong>MBBS &amp; MS (General Surgery)</strong> from the renowned <strong>B.J. Medical College, Pune</strong>. Before even gaining admission, he had resolved that his area of work would be his hometown Dhule — having witnessed firsthand the poverty and related health problems of the region.
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
                    { degree: "M.S. (General Surgery)", inst: "B.J. Medical College, Pune" },
                    { degree: "M.B.B.S.", inst: "B.J. Medical College, Pune" },
                    { degree: "Schooling", inst: "Canossa Convent, Dhule" },
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
              <SectionCard icon={<Globe size={14} color="white" />} title="Indian Medical Association & International Leadership"
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
                    { role: "National Chairman, IMA Academy of Medical Specialties", year: "" },
                    { role: "National Secretary, IMA Hospital Board of India", year: "" },
                    { role: "Chief Election Commissioner, National IMA", year: "" },
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

              {/* IMA National Events */}
              <SectionCard icon={<CalendarDays size={14} color="white" />} title="Organised IMA National Events"
                color="#0E7490" bg="#ECFEFF" border="#A5F3FC">
                <div className="space-y-3">
                  {[
                    { event: "IMA National Sports Event", desc: "Organised IMA national-level sports activities." },
                    { event: "IMA National Cultural and Literary Festival", desc: "Organised the national cultural and literary celebration of the medical fraternity." },
                    { event: "IMA Bharat Yatra", desc: "Organised the nationwide IMA journey across India." },
                    { event: "IMA Mahapanchayat", desc: "Organised the historic gathering of 25,000 doctors at Delhi." },
                  ].map(e => (
                    <div key={e.event} className="flex items-start gap-3">
                      <Dot color="#0E7490" />
                      <div>
                        <div className="text-sm font-bold text-[#111827]">{e.event}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{e.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Awards & Recognition */}
              <SectionCard icon={<Trophy size={14} color="white" />} title="Awards & Recognition"
                color="#5B21B6" bg="#F5F3FF" border="#DDD6FE" span="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Green Doctor Award — for planting 10,000 trees",
                    "Covid Warrior Award",
                    "Dr. B.C. Roy Oration Memorial Award",
                    "Dr. R.K. Menda Award",
                    "Dr. A.K. Sinha Award",
                    "Medical Education and Research Award",
                    "Dr. V.V.R. Oration Award",
                    "Dr. V.C. Pillai Oration Award",
                    "Dr. Kishore Taori Oration Award",
                    "Dr. Ketan Desai Oration Award",
                  ].map(a => (
                    <div key={a} className="flex items-start gap-3 bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl px-3 py-2.5">
                      <Dot color="#5B21B6" />
                      <span className="text-sm text-[#374151]">{a}</span>
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
        <section id="meena" className="py-10 md:py-20 bg-[#F8FAFB]">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            {/* Profile header */}
            <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-12">

              {/* Passport photo — centered on mobile */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 w-full sm:w-auto">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
                  style={{ width: 130, height: 166 }}>
                  <Image
                    src="/img/img1/Dr%20Mrs%20Meena%20Wankhedkar.png"
                    alt="Dr. Meena R. Wankhedkar"
                    width={130}
                    height={166}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#AD1457" }}>
                    Family Physician
                  </div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Sitaram Hospital, Dhule</div>
                </div>
              </div>

              {/* Name & intro */}
              <div className="flex-1 min-w-0">
                <div className="section-eyebrow mb-1 text-[10px] md:text-xs">Family Physician · Obstetrician · Indian Medical Association Leader</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-3">
                  Dr. Meena R. Wankhedkar
                </h2>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { text: "National Chairperson — IMA Women Doctors Wing", color: "#AD1457", bg: "#FDF2F8" },
                    { text: "Past President — IMA Dhule Branch", color: "#7B1FA2", bg: "#FAF5FF" },
                    { text: "Member — IMA Maharashtra State CWC", color: "#1565C0", bg: "#EFF6FF" },
                    { text: "FCGP — Fellow, College of General Practitioners", color: "#2E7D32", bg: "#F0FDF4" },
                    { text: "Past State Joint Secretary — IMA CGP Maharashtra", color: "#047857", bg: "#ECFDF5" },
                  ].map(b => (
                    <span key={b.text} className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border"
                      style={{ color: b.color, background: b.bg, borderColor: `${b.color}30` }}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed max-w-3xl">
                  Dr. Meena R. Wankhedkar is a prominent Indian medical professional, medical activist, and senior leader within the Indian Medical Association (IMA). Based in Dhule, Maharashtra, she is an experienced <strong className="text-[#AD1457]">Family Physician and Family Medicine Obstetrician</strong> practising at Sitaram Hospital. She holds an <strong>MBBS</strong> and is a <strong>Fellow of the College of General Practitioners (FCGP)</strong>. She served as the <strong className="text-[#AD1457]">National Chairperson of the IMA Women Doctors Wing (IMA-WDW)</strong> and as a member of the <strong>IMA Maharashtra State Central Working Committee</strong>, driving health initiatives for women physicians and the wider community.
                </p>
              </div>
            </div>

            {/* Detail grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              <SectionCard icon={<BookOpen size={14} color="white" />} title="Education"
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4">
                <div className="space-y-3">
                  {[
                    { degree: "FIAMS", inst: "Hyderabad" },
                    { degree: "FCGP", inst: "Chennai" },
                    { degree: "M.B.B.S.", inst: "Lokmanya Tilak Municipal Medical College, Mumbai" },
                    { degree: "Schooling", inst: "Dhule" },
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

              <SectionCard icon={<Users size={14} color="white" />} title="Key Indian Medical Association Roles"
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
                    "Advisor — Socio-Medical Affairs Committee, World Medical Association",
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
                    "Well Women Clinic",
                    "Antenatal Care & Maternity",
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
        <div className="bg-[#111827] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
            <h3 className="text-white text-xl md:text-2xl font-black mb-2">Consult Our Specialists</h3>
            <p className="text-white/60 text-xs md:text-sm mb-6 px-2">
              Sitaram Hospital, Bhangya Maruti Chowk, Lane No. 6, Dhule – 424001
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md sm:max-w-none mx-auto">
              <a href="tel:9421279065"
                className="inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#8E0000] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                📞 Call: 9421279065
              </a>
              <a href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                💬 WhatsApp Us
              </a>
              <Link href="/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-white/20">
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
