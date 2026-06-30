import { Phone } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Ravindra S. Wankhedkar",
    callName: "Dr. Ravindra Wankhedkar",
    photo: "/img/img1/Dr.%20Ravindra.jpg",
    color: "#C62828",
    gradFrom: "#C62828",
    gradTo: "#8E0000",
    badge: "MS · Laser Proctologist",
    role: "Senior Laser Proctologist & Colorectal Surgeon",
    qualifications: [
      "M.B.B.S. – B.J. Medical College, Pune",
      "M.S. (General Surgery) – B.J. Medical College, Pune",
    ],
    academic: [
      "Professor of Surgery, Shri Bhausaheb Hire Govt. Medical College, Dhule",
      "FIAMS (Coloproctology), Hyderabad",
      "FCGP (Proctology), Chennai",
      "FIIOPM, Australia",
      "Basic & Advanced Courses in Coloproctology, Mumbai",
      "Advanced Training in Laser Surgery for Proctology, Germany",
      "Member, Association of Colon & Rectal Surgeons of India",
      "Member, American Society of Colon & Rectal Surgeons",
    ],
    professional: [
      "Sassoon General Hospital, Pune",
      "Civil Hospital, Dhule",
      "Shri Bhausaheb Hire Govt. Medical College, Dhule",
      "Police & SRPF Medical Services",
      "Devki Nursing Home",
      "Sitaram Hospital, Dhule",
    ],
  },
  {
    name: "Dr. Meena R. Wankhedkar",
    callName: "Dr. Meena Wankhedkar",
    photo: "/img/img1/Dr.%20Meena.jpg",
    color: "#2E7D32",
    gradFrom: "#2E7D32",
    gradTo: "#1B5E20",
    badge: "MBBS · Ano-Rectal Specialist",
    role: "Proctologist & Ano-Rectal Specialist",
    qualifications: [
      "M.B.B.S. – Lokmanya Tilak Municipal Medical College, Mumbai",
    ],
    academic: [
      "FCGP, Chennai",
      "FIAMS, Hyderabad",
    ],
    professional: [
      "JMF Hospital",
      "Bhagirath Clinic",
      "Devki Nursing Home",
      "Sitaram Hospital, Dhule",
    ],
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Our Medical Team</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">Expert Laser Proctologists</h2>
          <p className="section-lead mx-auto text-center">
            Nationally and internationally trained specialists — bringing decades of experience in laser proctology and ano-rectal surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.map((doc) => (
            <div key={doc.name} className="card overflow-hidden">

              {/* ── Header: passport photo + name ── */}
              <div
                className="px-6 py-5 flex items-center gap-5"
                style={{ background: `linear-gradient(135deg, ${doc.gradFrom}12, ${doc.gradTo}06)` }}
              >
                {/* Passport-size photo: w-[96px] h-[124px] ≈ 4:5 portrait */}
                <div
                  className="relative flex-shrink-0 rounded-xl overflow-hidden shadow-md"
                  style={{
                    width: 96,
                    height: 124,
                    border: `3px solid ${doc.color}`,
                  }}
                >
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                    priority
                  />
                </div>

                {/* Name + role */}
                <div className="min-w-0">
                  <span
                    className="inline-block text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                    style={{ background: `${doc.color}15`, color: doc.color }}
                  >
                    {doc.badge}
                  </span>
                  <h3 className="font-black text-[#111827] text-lg leading-tight">{doc.name}</h3>
                  <p className="text-sm font-medium mt-1 leading-snug" style={{ color: doc.color }}>{doc.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mx-6" style={{ background: `${doc.color}20` }} />

              {/* ── Credentials ── */}
              <div className="px-6 py-5 flex flex-col gap-4">

                {/* Qualifications */}
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: doc.color }}>
                    Educational Qualifications
                  </div>
                  <ul className="space-y-1.5">
                    {doc.qualifications.map((q) => (
                      <li key={q} className="flex items-start gap-2 text-sm text-[#374151]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: doc.color }} />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Academic */}
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: doc.color }}>
                    Academic Achievements & Training
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {doc.academic.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-xs text-[#374151] bg-gray-50 rounded-lg px-3 py-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: doc.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional */}
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: doc.color }}>
                    Professional Services
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.professional.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-3 py-1 rounded-full border font-medium"
                        style={{ background: `${doc.color}08`, borderColor: `${doc.color}25`, color: doc.color }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#appointment"
                  className="block text-center py-3 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${doc.gradFrom}, ${doc.gradTo})` }}
                >
                  Book with {doc.callName}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* OPD timing strip */}
        <div className="mt-10 bg-[#111827] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">OPD Timings</div>
            <div className="text-white text-xl font-bold">Mon – Sat &nbsp;|&nbsp; 10:00 AM – 2:00 PM &amp; 6:00 PM – 9:00 PM</div>
            <div className="text-red-400 text-sm font-semibold mt-1">⚠ Sunday Closed</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:9421279065" className="btn btn-red">
              <Phone size={15} /> Call Now: 9421279065
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
