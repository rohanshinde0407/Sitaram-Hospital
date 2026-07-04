import { Phone } from "lucide-react";
import Image from "next/image";

const ACCENT = "#334155";
const ACCENT_BG = "#F1F5F9";
const ACCENT_BORDER = "#E2E8F0";

const doctors = [
  {
    name: "Dr. Ravindra S. Wankhedkar",
    callName: "Dr. Ravindra Wankhedkar",
    photo: "/img/img1/Dr%20Ravi%20Wankhedkar.png",
    badge: "MS · Laser Proctologist",
    role: "Senior Surgeon and Laser Proctologist",
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
    photo: "/img/img1/Dr%20Mrs%20Meena%20Wankhedkar.png",
    badge: "MBBS · Ano-Rectal Specialist",
    role: "Family Medicine Obstetrician & Laser Specialist",
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
          <h2 className="section-title mb-4">Expert Doctors</h2>
          <p className="section-lead mx-auto text-center">
            Nationally and Internationally trained specialists with decades of experience.
          </p>
        </div>

        {/* One row per doctor */}
        <div className="flex flex-col gap-6 md:gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              {/* LEFT — Photo */}
              <div className="relative flex-shrink-0 w-full sm:w-56 md:w-72 lg:w-80" style={{ minHeight: "260px" }}>
                <Image
                  src={doc.photo}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 320px"
                  priority
                />
              </div>

              {/* RIGHT — Details */}
              <div className="flex flex-col flex-1 min-w-0">

                {/* Name strip */}
                <div className="px-6 py-5 border-b" style={{ background: ACCENT_BG, borderColor: ACCENT_BORDER }}>
                  <h3 className="font-black text-[#111827] text-xl md:text-2xl leading-tight">{doc.name}</h3>
                  <p className="text-sm font-medium mt-1 text-[#475569]">{doc.role}</p>
                  <span
                    className="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: ACCENT_BORDER, color: ACCENT }}
                  >
                    {doc.badge}
                  </span>
                </div>

                {/* Credentials */}
                <div className="px-6 py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-[#334155]">
                      Educational Qualifications
                    </div>
                    <ul className="space-y-1.5">
                      {doc.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-[#374151]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#334155]" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-[#334155]">
                      Academic & Training
                    </div>
                    <ul className="space-y-1.5">
                      {doc.academic.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-[#374151]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#334155]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-[#334155]">
                      Professional Services
                    </div>
                    <ul className="space-y-1.5">
                      {doc.professional.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-[#374151]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#334155]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OPD timing strip */}
        <div className="mt-10 bg-[#111827] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">OPD Timings</div>
            <div className="text-white text-base md:text-xl font-bold">
              Mon – Sat &nbsp;|&nbsp; 10:00 AM – 2:00 PM &amp; 6:00 PM – 9:00 PM
            </div>
            <div className="text-white/60 text-sm font-semibold mt-1">Sunday Closed</div>
          </div>
          <div className="flex-shrink-0">
            <a href="tel:9421279065" className="btn btn-red">
              <Phone size={15} /> Call Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
