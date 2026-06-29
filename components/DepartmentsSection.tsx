const surgeryServices = [
  { icon: "🔪", title: "Hernia Repair",              desc: "Open & laparoscopic hernia repair with mesh fixation for all hernia types." },
  { icon: "💧", title: "Hydrocele Surgery",           desc: "Surgical correction of hydrocele with minimal post-operative discomfort." },
  { icon: "🫁", title: "Laparotomy",                  desc: "Open abdominal surgery for complex intra-abdominal conditions." },
  { icon: "🟤", title: "Kidney Stone Surgery",        desc: "Surgical removal of renal calculi — open, laparoscopic & endoscopic options." },
  { icon: "🫃", title: "Gastrointestinal Surgery",    desc: "Surgery for GI tract conditions including appendix, gall bladder & bowel." },
  { icon: "🔭", title: "Laparoscopic Surgery",        desc: "Minimally invasive keyhole surgery — shorter hospital stay and faster recovery." },
  { icon: "🏥", title: "Dedicated General Surgery OT", desc: "A fully equipped, dedicated operation theatre for all general surgical procedures." },
  { icon: "👶", title: "Paediatric Surgery",          desc: "Specialised surgical care for infants, children and adolescents." },
  { icon: "🩹", title: "Plastic & Reconstructive Surgery", desc: "Wound care, scar revision, skin grafting and reconstructive procedures." },
  { icon: "🚑", title: "Accident & Trauma Care",      desc: "24-hour emergency surgical management for accident and trauma cases." },
  { icon: "🌙", title: "Day Care Surgery",            desc: "Planned procedures with 1-day admission — admitted and discharged the same day." },
];

const womenServices = [
  { icon: "🌸", title: "Well Women Clinic",    desc: "Preventive health screenings, cervical smear, breast examination and general wellness check-ups for women of all ages." },
  { icon: "🤰", title: "Antenatal Care",       desc: "Complete pregnancy monitoring — routine check-ups, ultrasound, nutritional guidance and birth planning from conception to delivery." },
  { icon: "🍼", title: "Maternity Services",   desc: "Safe, supportive delivery care including normal delivery, assisted delivery and caesarean section by experienced obstetricians." },
  { icon: "⚕️", title: "Gynaecological Surgery", desc: "Surgical management of fibroids, ovarian cysts, ectopic pregnancy, prolapse and other gynaecological conditions." },
];

export default function DepartmentsSection() {
  return (
    <section className="bg-[#F8FAFB] border-t border-gray-200">

      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-14 pb-4 text-center">
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          Sitaram Hospital — Speciality Departments
        </div>
        <h2 className="section-title mt-2">
          Comprehensive Care,{" "}
          <span style={{ color: "#C62828" }}>All Under One Roof</span>
        </h2>
        <div className="rule rule-center" />
        <p className="section-lead mx-auto text-center">
          Beyond laser proctology, Sitaram Hospital offers a full range of surgical and women's health services delivered by experienced specialists.
        </p>
      </div>

      {/* ── Two departments ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 space-y-10">

        {/* ══ SURGERY DEPARTMENT ══ */}
        <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-sm">

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🏨
            </div>
            <div>
              <div className="text-white/70 text-[10px] font-black uppercase tracking-widest">
                Department
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                Surgery Department
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">Dedicated General Surgery OT</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {surgeryServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 transition-all duration-200">
                  <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#1565C0] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ WOMEN'S DEPARTMENT ══ */}
        <div className="rounded-3xl overflow-hidden border border-pink-100 shadow-sm">

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #AD1457 0%, #880E4F 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🌸
            </div>
            <div>
              <div className="text-white/70 text-[10px] font-black uppercase tracking-widest">
                Department
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                Women&rsquo;s Department
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">Maternity &amp; Gynaecology</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {womenServices.map((s) => (
                <div key={s.title}
                  className="group flex flex-col gap-2 p-5 rounded-2xl border border-gray-100 hover:border-pink-100 hover:bg-pink-50/40 transition-all duration-200">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="text-sm font-bold text-[#111827] group-hover:text-[#AD1457] transition-colors leading-tight">
                    {s.title}
                  </div>
                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
