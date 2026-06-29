const services = [
  { icon: "🔴", title: "Laser Piles Treatment"   },
  { icon: "🟠", title: "Laser Fissure Treatment"  },
  { icon: "🟢", title: "Laser Fistula Treatment"  },
  { icon: "🔵", title: "Pilonidal Sinus Surgery"  },
  { icon: "⚪", title: "HAL-RAR Procedure"        },
  { icon: "🟣", title: "Video Rectoscopy"         },
  { icon: "🟡", title: "OPD Consultations"        },
  { icon: "🔶", title: "Day Care Procedures"      },
];

const highlights = [
  { val: "40+",  label: "Years of Experience" },
  { val: "2",    label: "Specialist Doctors"  },
  { val: "8+",   label: "Laser Procedures"    },
  { val: "100%", label: "Day Care Surgery"    },
];

export default function HospitalInfo() {
  return (
    <section className="bg-white border-t border-gray-100 py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Big name + info */}
          <div>
            {/* Top tagline */}
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-[2px] w-8 rounded-full" style={{ background: "#C62828" }} />
              <span className="text-sm font-black uppercase tracking-widest" style={{ color: "#C62828" }}>
                Sitaram Hospital
              </span>
              <div className="h-[2px] w-8 rounded-full" style={{ background: "#C62828" }} />
            </div>

            <h3
              className="font-bold leading-snug mb-4"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: "#111827" }}
            >
              Advanced Care with{" "}
              <span style={{ color: "#C62828" }}>Human Touch</span>
            </h3>

            {/* Big highlighted name */}
            <h2
              className="font-black leading-tight tracking-tight mb-1"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                background: "linear-gradient(135deg, #C62828 0%, #8E0000 50%, #C62828 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SITARAM
            </h2>
            <h2
              className="font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", color: "#111827" }}
            >
              HOSPITAL
            </h2>

            {/* Underline rule */}
            <div className="rule mt-3" />

            {/* Tagline */}
            <p className="font-bold text-[#374151] mb-4"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}>
              40 Years of Trusted Care · Advanced Laser Proctology
            </p>

            {/* Brief info */}
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-md mb-6">
              Sitaram Hospital is Dhule's trusted multi-specialty centre, home to{" "}
              <strong className="text-[#C62828]">ZEN Laser Procto Care</strong> — a dedicated
              advanced laser proctology unit. Led by Dr. Ravindra &amp; Dr. Meena Wankhedkar,
              we combine decades of surgical expertise with modern laser technology to deliver
              painless, scarless, day-care treatment for piles, fissure, and fistula.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <div className="text-2xl font-black" style={{ color: "#C62828" }}>{h.val}</div>
                  <div className="text-[11px] font-semibold text-[#9CA3AF] leading-tight">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Services */}
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#C62828] mb-4">
              Our Services
            </div>
            <div className="grid grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s.title}
                  className="flex items-center gap-3 bg-[#F8FAFB] rounded-xl px-4 py-3 border border-gray-100 hover:border-red-100 hover:bg-[#FFF5F5] transition-all duration-200">
                  <span className="text-lg flex-shrink-0">{s.icon}</span>
                  <span className="text-sm font-semibold text-[#111827]">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
