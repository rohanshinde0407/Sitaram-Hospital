const accreditations = [
  { name: "NABH", desc: "National Accreditation Board for Hospitals", icon: "🏅" },
  { name: "NABL", desc: "National Accreditation Board for Labs", icon: "🔬" },
  { name: "ISO 9001", desc: "Quality Management System", icon: "✅" },
  { name: "JCI", desc: "Joint Commission International", icon: "🌐" },
  { name: "ROHINI", desc: "Registry of Hospitals in Network", icon: "🏥" },
  { name: "AERB", desc: "Atomic Energy Regulatory Board", icon: "⚛️" },
];

export default function Accreditations() {
  return (
    <section className="py-10 bg-white border-y border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#718096] uppercase tracking-widest">
            Trusted & Accredited By
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {accreditations.map((acc) => (
            <div
              key={acc.name}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#F4F8FC] transition-colors border border-transparent hover:border-[#e2e8f0]"
            >
              <div className="text-3xl mb-2">{acc.icon}</div>
              <div className="font-bold text-[#0B4F8A] text-base mb-0.5">{acc.name}</div>
              <div className="text-xs text-[#718096] leading-tight">{acc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
