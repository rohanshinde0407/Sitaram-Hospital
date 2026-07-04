import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, BookOpen, Stethoscope, Heart, Users, Globe, Star, MapPin, Trophy, CalendarDays } from "lucide-react";

export const metadata = {
  title: "Our Doctors — Sitaram Hospital, Dhule",
  description:
    "Meet Dr. Ravindra S. Wankhedkar and Dr. Meena R. Wankhedkar — nationally and internationally recognised specialists in coloproctology, laser surgery, and family medicine at Sitaram Hospital, Dhule.",
};

function SectionCard({
  icon, title, color, bg, border, children, span,
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

export default function OurDoctorsPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ════════════════════════════════════════
            DR. RAVINDRA WANKHEDKAR
        ════════════════════════════════════════ */}
        <section id="ravi" className="py-10 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            {/* ── Profile header ── */}
            <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-10">

              {/* Passport photo */}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Ravindra S. Wankhedkar
                </h2>
                <div className="section-eyebrow mb-3 text-[10px] md:text-xs">General Surgeon · Laser Proctologist · Medical Leader</div>

                {/* Key posts — single colour bullets */}
                <div className="space-y-1.5 mb-4">
                  {[
                    "National President — Indian Medical Association, 2018",
                    "Treasurer — World Medical Association 2019–21",
                    "President — South Asian Association for Regional Cooperation Medical Association 2018–20",
                    "Hony. Prof. of Surgery — SBH Govt. Medical College",
                    "National Chair — UNESCO Bioethics",
                  ].map(text => (
                    <div key={text} className="flex items-start gap-2.5">
                      <Dot color="#C62828" />
                      <span className="text-xs md:text-sm text-[#374151] font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#374151] text-sm md:text-base leading-relaxed">
                  Son of Smt. Bhagirathibai Wankhedkar (school teacher &amp; headmistress) and Late Shri Sitaram Wankhedkar (freedom fighter), Dr. Ravi Wankhedkar is a perfect example of a modern-day <strong className="text-[#111827]">Polymath</strong> — a person whose expertise and knowledge spans varied subjects. He completed his schooling from <strong>Canossa Convent, Dhule</strong>, and went on to complete <strong>MBBS &amp; MS (General Surgery)</strong> from the renowned <strong>B.J. Medical College, Pune</strong>. Before even gaining admission, he had resolved that his area of work would be his hometown Dhule — having witnessed firsthand the poverty and related health problems of the region.
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

              {/* Indian Medical Association Leadership */}
              <SectionCard icon={<Globe size={14} color="white" />} title="Indian Medical Association & International Leadership"
                color="#1565C0" bg="#EFF6FF" border="#BFDBFE" span="xl:col-span-2">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { role: "National President, Indian Medical Association", year: "2018" },
                    { role: "Treasurer, World Medical Association", year: "2019–21" },
                    { role: "President, South Asian Association for Regional Cooperation Medical Association", year: "2018–20" },
                    { role: "National Chair — UNESCO Bioethics", year: "Current" },
                    { role: "Indian Medical Association Presidential Candidate — chosen unopposed", year: "2017" },
                    { role: "Proactive Indian Medical Association participation since", year: "2003" },
                    { role: "Chair, Indian Medical Association National Health Scheme", year: "" },
                    { role: "President, Dhule District Basketball Association", year: "Current" },
                    { role: "National Chairman, Indian Medical Association Academy of Medical Specialties", year: "" },
                    { role: "National Secretary, Indian Medical Association Hospital Board of India", year: "" },
                    { role: "Chief Election Commissioner, National Indian Medical Association", year: "" },
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

              {/* Major Programs Organised */}
              <SectionCard icon={<Users size={14} color="white" />} title="Major Programs Organised"
                color="#7B1FA2" bg="#FAF5FF" border="#E9D5FF">
                <div className="space-y-2">
                  {[
                    { prog: "WEZ AMSCON HOSPEX", desc: "State-level medical conference" },
                    { prog: "EVECON", desc: "Indian Medical Association initiative" },
                    { prog: "Unmesh", desc: "National Indian Medical Association programme" },
                    { prog: "Yomedicon", desc: "Young Medicos' Convention" },
                    { prog: "WIMALS", desc: "Women Indian Medical Association Leaders Summit" },
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
                      desc: "Led Indian Medical Association Dhule's proactive relief for Gujarat & Nepal Earthquakes, Kashmir Floods, and Martyr Families. Founded 'Ubhari Abhiyan' — a helping hand from Indian Medical Association Dhule for drought & hailstorm-affected farmers.",
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

              {/* Indian Medical Association National Events */}
              <SectionCard icon={<CalendarDays size={14} color="white" />} title="Organised Indian Medical Association National Events"
                color="#0E7490" bg="#ECFEFF" border="#A5F3FC">
                <div className="space-y-3">
                  {[
                    { event: "Indian Medical Association National Sports Event", desc: "Organised Indian Medical Association national-level sports activities." },
                    { event: "Indian Medical Association National Cultural and Literary Festival", desc: "Organised the national cultural and literary celebration of the medical fraternity." },
                    { event: "Indian Medical Association Bharat Yatra", desc: "Organised the nationwide Indian Medical Association journey across India." },
                    { event: "Indian Medical Association Mahapanchayat", desc: "Organised the historic gathering of 25,000 doctors at Delhi." },
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

              {/* Passport photo */}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  Dr. Meena R. Wankhedkar
                </h2>
                <div className="section-eyebrow mb-3 text-[10px] md:text-xs">Family Physician · Obstetrician · Indian Medical Association Leader</div>

                {/* Key posts — single colour bullets */}
                <div className="space-y-1.5 mb-4">
                  {[
                    "National Chairperson — Indian Medical Association Women Doctors Wing",
                    "Past President — Indian Medical Association Dhule Branch",
                    "Member — Indian Medical Association Maharashtra State CWC",
                    "FCGP — Fellow, College of General Practitioners",
                    "Past State Joint Secretary — Indian Medical Association CGP Maharashtra",
                  ].map(text => (
                    <div key={text} className="flex items-start gap-2.5">
                      <Dot color="#AD1457" />
                      <span className="text-xs md:text-sm text-[#374151] font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed max-w-3xl">
                  Dr. Meena R. Wankhedkar is a prominent Indian medical professional, medical activist, and senior leader within the Indian Medical Association. Based in Dhule, Maharashtra, she is an experienced <strong className="text-[#AD1457]">Family Physician and Family Medicine Obstetrician</strong> practising at Sitaram Hospital. She holds an <strong>MBBS</strong> and is a <strong>Fellow of the College of General Practitioners (FCGP)</strong>. She served as the <strong className="text-[#AD1457]">National Chairperson of the Indian Medical Association Women Doctors Wing (WDW)</strong> and as a member of the <strong>Indian Medical Association Maharashtra State Central Working Committee</strong>, driving health initiatives for women physicians and the wider community.
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
                    "National Chairperson, Indian Medical Association Women Doctors Wing (WDW) — Indian Medical Association Headquarters",
                    "Member, Indian Medical Association Maharashtra State Central Working Committee (CWC)",
                    "Past President, Indian Medical Association Dhule Branch",
                    "Past National Joint Secretary, Indian Medical Association CGP",
                    "Past State Joint Secretary, Indian Medical Association CGP Maharashtra",
                    "Past Election Commission Member, Indian Medical Association MS",
                    "National Standing Committee Member, Indian Medical Association",
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

              <SectionCard icon={<Heart size={14} color="white" />} title="Advocacy, Community & Indian Medical Association Contributions"
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
                      title: "Indian Medical Association Women's Welfare & Leadership Programs",
                      desc: "Led national standing committees and specialised welfare programs for women doctors under the Indian Medical Association banner — including study tours, allergy booklets & guidelines, and dedicated leadership development initiatives.",
                      color: "#7B1FA2",
                    },
                    {
                      title: "White Papers & Medical Education",
                      desc: "Contributed to white papers on women's issues in medicine and family doctor practices. Recognised for contributions to medical education, women doctors' forums, and Indian Medical Association programmes.",
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

      </main>
      <Footer />
    </>
  );
}
