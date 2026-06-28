import { CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: "🏅",
    title: "NABH Accredited",
    desc: "Certified by National Accreditation Board for Hospitals ensuring the highest quality standards.",
  },
  {
    icon: "🤖",
    title: "Robotic & Minimally Invasive Surgery",
    desc: "Cutting-edge robotic surgery systems enabling precision, faster recovery, and less pain.",
  },
  {
    icon: "🧬",
    title: "Advanced Diagnostic Tech",
    desc: "3T MRI, 256-slice CT, PET-CT, and digital pathology for accurate, rapid diagnosis.",
  },
  {
    icon: "👨‍⚕️",
    title: "500+ Expert Specialists",
    desc: "Nationally and internationally trained specialists across every major medical discipline.",
  },
  {
    icon: "🚑",
    title: "24×7 Emergency & Trauma",
    desc: "Level I Trauma Center with round-the-clock emergency care and rapid response teams.",
  },
  {
    icon: "🌐",
    title: "International Patient Services",
    desc: "Dedicated team for visa assistance, travel coordination, and multilingual support.",
  },
];

const highlights = [
  "ISO 9001:2015 Certified Quality Management",
  "Blood Bank with 24×7 Availability",
  "Cashless Insurance for 50+ Insurers",
  "Patient Education & Support Programs",
  "Pharmacy Open Round the Clock",
  "Ambulance Fleet with Life Support",
  "Tele-consultation Services",
  "Dedicated ICU & Critical Care Units",
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-[#F4F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - text */}
          <div>
            <span className="tag-line">Why Patients Choose Us</span>
            <div className="section-divider" />
            <h2 className="section-title mb-4">
              Healthcare That Sets the{" "}
              <span className="gradient-text">Standard</span>
            </h2>
            <p className="text-[#4a5568] text-base md:text-lg mb-8 leading-relaxed">
              For over 35 years, Sitaram Hospital has been the trusted name in healthcare.
              We combine the latest technology with genuine compassion to provide outcomes
              that matter most — your recovery and well-being.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a5568]">
                  <CheckCircle2 size={17} className="text-[#00A99D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="#appointment" className="btn-primary">Book Appointment</a>
              <a href="/about" className="btn-secondary">Learn More About Us</a>
            </div>
          </div>

          {/* Right - feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bg-white rounded-2xl p-5 border border-[#e2e8f0] card-hover ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#1a2e44] text-base mb-1.5">{f.title}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
