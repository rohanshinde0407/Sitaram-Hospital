import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Award, BookOpen, Stethoscope, GraduationCap } from "lucide-react";

/* ── Doctor Data ── */
const doctors = [
  {
    id: "ravi",
    name: "Dr. Ravindra S. Wankhedkar",
    callName: "Dr. Ravi Wankhedkar",
    phone: "9422296495",
    email: "cearsdhule@gmail.com",
    initials: "RW",
    color: "#C62828",
    gradFrom: "#C62828",
    gradTo: "#8E0000",
    role: "Senior Laser Proctologist & Colorectal Surgeon",
    tagline: "Over 40 years of surgical experience — nationally & internationally trained in advanced laser proctology.",
    qualifications: [
      { degree: "M.B.B.S.", institution: "B.J. Medical College, Pune" },
      { degree: "M.S. (General Surgery)", institution: "B.J. Medical College, Pune" },
    ],
    academic: [
      { title: "FIAMS (Coloproctology)", place: "Hyderabad" },
      { title: "FCGP (Proctology)", place: "Chennai" },
      { title: "FIIOPM", place: "Australia" },
      { title: "Basic & Advanced Courses in Coloproctology", place: "Mumbai" },
      { title: "Advanced Training in Laser Surgery for Proctology", place: "Germany" },
      { title: "Member, Association of Colon & Rectal Surgeons of India", place: "ACRS India" },
      { title: "Member, American Society of Colon & Rectal Surgeons", place: "ASCRS, USA" },
      { title: "Professor of Surgery", place: "Shri Bhausaheb Hire Govt. Medical College, Dhule" },
    ],
    professional: [
      "Sassoon General Hospital, Pune",
      "Civil Hospital, Dhule",
      "Shri Bhausaheb Hire Govt. Medical College, Dhule",
      "Police & SRPF Medical Services",
      "Devki Nursing Home, Dhule",
      "Sitaram Hospital, Dhule (Current)",
    ],
    expertise: [
      "Advanced Laser Proctology",
      "Laparoscopic Colorectal Surgery",
      "DGHAL-RAR (Doppler-guided)",
      "FILAC – Fistula Laser Closure",
      "VAAFT – Video-Assisted Anal Fistula Treatment",
      "Radio Frequency Ablation (RFA)",
      "Ano-Recto Videoscopy",
      "Anal Sphincterometry",
    ],
  },
  {
    id: "meena",
    name: "Dr. Meena R. Wankhedkar",
    callName: "Dr. Meena Wankhedkar",
    phone: "8275008768",
    email: "cearsdhule@gmail.com",
    initials: "MW",
    color: "#2E7D32",
    gradFrom: "#2E7D32",
    gradTo: "#1B5E20",
    role: "Proctologist & Ano-Rectal Specialist",
    tagline: "Specialist in ano-rectal diseases — compassionate care with advanced proctological expertise.",
    qualifications: [
      { degree: "M.B.B.S.", institution: "Lokmanya Tilak Municipal Medical College, Mumbai" },
    ],
    academic: [
      { title: "FCGP (Proctology)", place: "Chennai" },
      { title: "FIAMS (Coloproctology)", place: "Hyderabad" },
    ],
    professional: [
      "JMF Hospital, Dhule",
      "Bhagirath Clinic, Dhule",
      "Devki Nursing Home, Dhule",
      "Sitaram Hospital, Dhule (Current)",
    ],
    expertise: [
      "Proctological Examination & Diagnosis",
      "Ano-Rectal Videoscopy",
      "Conservative Proctology Management",
      "Post-Procedure Care & Follow-up",
      "Female Proctology Specialization",
      "Patient Counselling & Education",
    ],
  },
];

/* ── Page ── */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C62828] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2E7D32] rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              About ZEN Laser Procto Care
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-black mb-4">
              Meet Our Expert Laser Proctologists
            </h1>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Nationally and internationally trained specialists bringing decades of combined experience in advanced laser proctology and ano-rectal surgery — right here in Dhule.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { val: "40+", label: "Years Experience" },
                { val: "2", label: "Expert Specialists" },
                { val: "8+", label: "Procedures Offered" },
                { val: "100%", label: "Day Care" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-white">{s.val}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinic Overview */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block bg-red-50 text-[#C62828] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  About the Clinic
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#111827] mb-4 leading-tight">
                  ZEN Laser Procto Care<br />
                  <span className="text-[#C62828]">at Sitaram Hospital, Dhule</span>
                </h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  ZEN Laser Procto Care is a specialized laser proctology clinic housed within Sitaram Hospital, Dhule. We provide Advanced Comprehensive Treatment for Piles, Fissure, Fistula, and related ano-rectal conditions using the latest internationally certified laser technology.
                </p>
                <p className="text-[#374151] leading-relaxed mb-6">
                  Our motto: <em className="text-[#C62828] font-semibold">&ldquo;Relief Through Precision and Expertise with Modern Scientific Care.&rdquo;</em> Every procedure is performed on a Day Care basis — patients are admitted and discharged the same day.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "🏥", label: "At Sitaram Hospital", sub: "Surgical, Maternity & Family Physician" },
                    { icon: "📍", label: "Bhangya Maruti Chowk", sub: "Lane No. 6, Dhule – 424001" },
                    { icon: "⏰", label: "Mon–Sat OPD", sub: "10AM–2PM & 6PM–9PM" },
                    { icon: "🌐", label: "www.sitaramhospital.com", sub: "Online information available" },
                  ].map(card => (
                    <div key={card.label} className="bg-[#F8FAFB] border border-gray-100 rounded-xl p-4">
                      <div className="text-2xl mb-1.5">{card.icon}</div>
                      <div className="font-bold text-[#111827] text-sm">{card.label}</div>
                      <div className="text-[#6B7280] text-xs mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/img/laser-treatment-overview.jpg"
                  alt="Advanced Laser Proctology Treatment at ZEN Laser Procto Care"
                  width={600}
                  height={440}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-bold text-sm">Advanced Laser Proctology Treatment</div>
                  <div className="text-white/70 text-xs">Fistula · Hemorrhoids · Fissure · Pilonidal Sinus</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Cards */}
        {doctors.map((doc, idx) => (
          <section
            key={doc.id}
            id={doc.id}
            className={`py-16 md:py-20 ${idx % 2 === 0 ? "bg-[#F8FAFB]" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">

              {/* Doctor header strip */}
              <div
                className="rounded-3xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6"
                style={{ background: `linear-gradient(135deg, ${doc.gradFrom}12, ${doc.gradTo}06)`, border: `1px solid ${doc.color}20` }}
              >
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-black flex-shrink-0 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${doc.gradFrom}, ${doc.gradTo})` }}
                >
                  {doc.initials}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-[#111827]">{doc.name}</h2>
                  <p className="font-bold mt-1 text-base" style={{ color: doc.color }}>{doc.role}</p>
                  <p className="text-[#6B7280] text-sm mt-2 max-w-2xl leading-relaxed">{doc.tagline}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                    <a
                      href={`tel:${doc.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white shadow-md"
                      style={{ background: `linear-gradient(135deg, ${doc.gradFrom}, ${doc.gradTo})` }}
                    >
                      <Phone size={14} />
                      {doc.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                    </a>
                    <a href="/#appointment"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm border-2 transition-colors"
                      style={{ borderColor: doc.color, color: doc.color }}
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio grid */}
              <div className="grid lg:grid-cols-3 gap-6">

                {/* Qualifications */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${doc.color}10` }}>
                      <GraduationCap size={18} style={{ color: doc.color }} />
                    </div>
                    <h3 className="font-black text-[#111827] text-sm uppercase tracking-wide">Educational Qualifications</h3>
                  </div>
                  <div className="space-y-3">
                    {doc.qualifications.map(q => (
                      <div key={q.degree} className="border-l-2 pl-3" style={{ borderColor: doc.color }}>
                        <div className="font-bold text-[#111827] text-sm">{q.degree}</div>
                        <div className="text-[#6B7280] text-xs mt-0.5">{q.institution}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${doc.color}10` }}>
                      <Award size={18} style={{ color: doc.color }} />
                    </div>
                    <h3 className="font-black text-[#111827] text-sm uppercase tracking-wide">Academic Achievements</h3>
                  </div>
                  <div className="space-y-2.5">
                    {doc.academic.map(a => (
                      <div key={a.title} className="flex items-start gap-2">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: doc.color }} />
                        <div>
                          <div className="text-xs font-semibold text-[#374151]">{a.title}</div>
                          <div className="text-[10px] text-[#9CA3AF]">{a.place}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Experience + Expertise */}
                <div className="space-y-5">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${doc.color}10` }}>
                        <Stethoscope size={18} style={{ color: doc.color }} />
                      </div>
                      <h3 className="font-black text-[#111827] text-sm uppercase tracking-wide">Professional Services</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.professional.map(p => (
                        <span key={p} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                          style={{ color: doc.color, background: `${doc.color}08`, borderColor: `${doc.color}25` }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${doc.color}10` }}>
                        <BookOpen size={18} style={{ color: doc.color }} />
                      </div>
                      <h3 className="font-black text-[#111827] text-sm uppercase tracking-wide">Areas of Expertise</h3>
                    </div>
                    <div className="space-y-1.5">
                      {doc.expertise.map(e => (
                        <div key={e} className="flex items-center gap-2 text-xs text-[#374151]">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: doc.color }} />
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Contact section */}
        <section className="py-14 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-white text-2xl font-black mb-2">Get in Touch</h2>
              <p className="text-white/60">Book your consultation or call us directly</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Phone, label: "Dr. Ravi Wankhedkar", val: "94222 96495", href: "tel:9422296495", color: "#EF5350" },
                { icon: Phone, label: "Dr. Meena Wankhedkar", val: "82750 08768", href: "tel:8275008768", color: "#4ade80" },
                { icon: Mail,  label: "Email", val: "cearsdhule@gmail.com", href: "mailto:cearsdhule@gmail.com", color: "#60a5fa" },
                { icon: MapPin, label: "Address", val: "Bhangya Maruti Chowk, Lane No. 6, Dhule", href: "#", color: "#fbbf24" },
              ].map(({ icon: Icon, label, val, href, color }) => (
                <a key={label} href={href}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}20` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="text-white/50 text-xs mb-1">{label}</div>
                  <div className="text-white font-bold text-sm group-hover:text-white/80 transition-colors">{val}</div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/#appointment" className="btn btn-red inline-flex justify-center">
                Book an Appointment →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
