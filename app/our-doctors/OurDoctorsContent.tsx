"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, BookOpen, Stethoscope, Heart, Users, Globe, Star, MapPin, Trophy, CalendarDays } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

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

export default function OurDoctorsContent() {
  const t = useTranslation();
  const ravi  = t.doctorRavi;
  const meena = t.doctorMeena;
  const s     = ravi.sections;
  const ms    = meena.sections;

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ══ DR. RAVINDRA WANKHEDKAR ══ */}
        <section id="ravi" className="py-10 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-10">

              <div className="flex-shrink-0 flex flex-col items-center gap-2 w-full sm:w-auto">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
                  style={{ width: 130, height: 166 }}>
                  <Image
                    src="/img/img1/Dr%20Ravi%20Wankhedkar.png"
                    alt="Dr. Ravindra S. Wankhedkar"
                    width={130} height={166}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#C62828]">{ravi.role}</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">{ravi.hosp}</div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  {ravi.name}
                </h2>
                <div className="section-eyebrow mb-3 text-[10px] md:text-xs">{ravi.eyebrow}</div>

                <div className="space-y-1.5 mb-4">
                  {ravi.posts.map(text => (
                    <div key={text} className="flex items-start gap-2.5">
                      <Dot color="#C62828" />
                      <span className="text-xs md:text-sm text-[#374151] font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#374151] text-sm md:text-base leading-relaxed">
                  {ravi.bio.includes("Polymath") ? (
                    <>
                      {ravi.bio.split("Polymath")[0]}
                      <strong className="text-[#111827]">Polymath</strong>
                      {ravi.bio.split("Polymath")[1]}
                    </>
                  ) : ravi.bio.includes("बहुज्ञ") ? (
                    <>
                      {ravi.bio.split("बहुज्ञ")[0]}
                      <strong className="text-[#111827]">बहुज्ञ (Polymath)</strong>
                      {ravi.bio.split("बहुज्ञ")[1]}
                    </>
                  ) : ravi.bio}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              <SectionCard icon={<BookOpen size={14} color="white" />} title={s.education}
                color="#C62828" bg="#FFF5F5" border="#FECACA">
                <div className="space-y-3">
                  {ravi.educationList.map(e => (
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

              <SectionCard icon={<Star size={14} color="white" />} title={s.academicAwards}
                color="#E65100" bg="#FFF8F4" border="#FED7AA">
                <div className="space-y-3">
                  {ravi.academicList.map(e => (
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

              <SectionCard icon={<Stethoscope size={14} color="white" />} title={s.specialty}
                color="#2E7D32" bg="#F0FDF4" border="#BBF7D0">
                <div className="space-y-2">
                  {ravi.specialtyList.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <Dot color="#2E7D32" />
                      <span className="text-sm text-[#374151]">{item}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Globe size={14} color="white" />} title={s.imaLeadership}
                color="#1565C0" bg="#EFF6FF" border="#BFDBFE" span="xl:col-span-2">
                <div className="grid sm:grid-cols-2 gap-3">
                  {ravi.imaList.map(r => (
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

              <SectionCard icon={<Users size={14} color="white" />} title={s.programsOrg}
                color="#7B1FA2" bg="#FAF5FF" border="#E9D5FF">
                <div className="space-y-2">
                  {ravi.programsList.map(p => (
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

              <SectionCard icon={<Heart size={14} color="white" />} title={s.socialWork}
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4" span="md:col-span-2 xl:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {ravi.socialList.map(social => (
                    <div key={social.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <Dot color={social.color} />
                      <div>
                        <div className="text-sm font-bold text-[#111827] mb-0.5">{social.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{social.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<MapPin size={14} color="white" />} title={s.personalLife}
                color="#047857" bg="#ECFDF5" border="#A7F3D0">
                <div className="space-y-3">
                  {ravi.personalList.map(p => (
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

              <SectionCard icon={<Award size={14} color="white" />} title={s.hospitalsServed}
                color="#B45309" bg="#FFFBEB" border="#FDE68A">
                <div className="space-y-2">
                  {ravi.hospitalsList.map(h => (
                    <div key={h} className="flex items-center gap-3">
                      <Dot color="#B45309" />
                      <span className="text-sm text-[#374151]">{h}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<CalendarDays size={14} color="white" />} title={s.imaEvents}
                color="#0E7490" bg="#ECFEFF" border="#A5F3FC">
                <div className="space-y-3">
                  {ravi.imaEventsList.map(e => (
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

              <SectionCard icon={<Trophy size={14} color="white" />} title={s.awards}
                color="#5B21B6" bg="#F5F3FF" border="#DDD6FE" span="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-2">
                  {ravi.awardsList.map(a => (
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

        {/* ══ DR. MEENA WANKHEDKAR ══ */}
        <section id="meena" className="py-10 md:py-20 bg-[#F8FAFB]">
          <div className="max-w-7xl mx-auto px-4 md:px-10">

            <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-12">

              <div className="flex-shrink-0 flex flex-col items-center gap-2 w-full sm:w-auto">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
                  style={{ width: 130, height: 166 }}>
                  <Image
                    src="/img/img1/Dr%20Mrs%20Meena%20Wankhedkar.png"
                    alt="Dr. Meena R. Wankhedkar"
                    width={130} height={166}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#AD1457" }}>
                    {meena.role}
                  </div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">{meena.hosp}</div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-1">
                  {meena.name}
                </h2>
                <div className="section-eyebrow mb-3 text-[10px] md:text-xs">{meena.eyebrow}</div>

                <div className="space-y-1.5 mb-4">
                  {meena.posts.map(text => (
                    <div key={text} className="flex items-start gap-2.5">
                      <Dot color="#AD1457" />
                      <span className="text-xs md:text-sm text-[#374151] font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#374151] text-base leading-relaxed max-w-3xl">{meena.bio}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              <SectionCard icon={<BookOpen size={14} color="white" />} title={ms.education}
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4">
                <div className="space-y-3">
                  {meena.educationList.map(e => (
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

              <SectionCard icon={<Users size={14} color="white" />} title={ms.imaRoles}
                color="#7B1FA2" bg="#FAF5FF" border="#E9D5FF">
                <div className="space-y-2">
                  {meena.imaRolesList.map(r => (
                    <div key={r} className="flex items-start gap-3">
                      <Dot color="#7B1FA2" />
                      <span className="text-sm text-[#374151]">{r}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Stethoscope size={14} color="white" />} title={ms.clinicalSvc}
                color="#2E7D32" bg="#F0FDF4" border="#BBF7D0">
                <div className="space-y-2">
                  {meena.clinicalList.map(svc => (
                    <div key={svc} className="flex items-start gap-3">
                      <Dot color="#2E7D32" />
                      <span className="text-sm text-[#374151]">{svc}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Heart size={14} color="white" />} title={ms.advocacy}
                color="#AD1457" bg="#FDF2F8" border="#F9A8D4" span="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {meena.advocacyList.map(adv => (
                    <div key={adv.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <Dot color={adv.color} />
                      <div>
                        <div className="text-sm font-bold text-[#111827] mb-0.5">{adv.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={<Award size={14} color="white" />} title={ms.hospitals}
                color="#B45309" bg="#FFFBEB" border="#FDE68A">
                <div className="space-y-2">
                  {meena.hospitalsList.map(h => (
                    <div key={h} className="flex items-center gap-3">
                      <Dot color="#B45309" />
                      <span className="text-sm text-[#374151]">{h}</span>
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
