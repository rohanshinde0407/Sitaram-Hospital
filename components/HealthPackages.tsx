import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Basic Health Check",
    price: "₹1,499",
    tag: "Most Popular",
    tagColor: "#0B4F8A",
    for: "Adults 18–40",
    tests: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting & PP)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Urine Routine",
      "Chest X-Ray",
      "Doctor Consultation",
    ],
    cta: "Book Now",
    href: "#appointment",
    highlight: false,
  },
  {
    name: "Comprehensive Check",
    price: "₹3,999",
    tag: "Best Value",
    tagColor: "#00A99D",
    for: "Adults 40+",
    tests: [
      "Everything in Basic",
      "Thyroid Profile (T3, T4, TSH)",
      "HbA1c (Diabetes Marker)",
      "ECG & Echo Screening",
      "Pulmonary Function Test",
      "Bone Density Scan",
      "Cancer Markers (PSA/CA-125)",
      "Nutritionist Consultation",
    ],
    cta: "Book Now",
    href: "#appointment",
    highlight: true,
  },
  {
    name: "Senior Citizen Package",
    price: "₹5,999",
    tag: "Recommended",
    tagColor: "#E8711A",
    for: "60 years & above",
    tests: [
      "Everything in Comprehensive",
      "Ophthalmology Assessment",
      "Hearing Test (Audiometry)",
      "Joint & Spine Evaluation",
      "Cardiac Stress Test",
      "Full Body Ultrasound",
      "Neurological Assessment",
      "Geriatrician Consultation",
    ],
    cta: "Book Now",
    href: "#appointment",
    highlight: false,
  },
];

export default function HealthPackages() {
  return (
    <section className="py-14 md:py-20 bg-[#F4F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="tag-line">Preventive Care</span>
          <div className="section-divider mx-auto" />
          <h2 className="section-title mb-4">Health Check Packages</h2>
          <p className="section-subtitle mx-auto text-center">
            Prevention is better than cure. Choose a package designed for your age and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 ${
                pkg.highlight
                  ? "border-[#0B4F8A] shadow-2xl scale-[1.02]"
                  : "border-[#e2e8f0] card-hover"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0B4F8A] to-[#00A99D]" />
              )}

              <div className="p-6">
                <div
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 text-white"
                  style={{ background: pkg.tagColor }}
                >
                  {pkg.tag}
                </div>
                <h3 className="text-xl font-bold text-[#1a2e44] mb-0.5">{pkg.name}</h3>
                <p className="text-sm text-[#718096] mb-4">For: {pkg.for}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-[#0B4F8A]">{pkg.price}</span>
                  <span className="text-sm text-[#718096]">/ person</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {pkg.tests.map((test) => (
                    <li key={test} className="flex items-start gap-2.5 text-sm text-[#4a5568]">
                      <Check size={15} className="text-[#00A99D] flex-shrink-0 mt-0.5" />
                      {test}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto p-6 pt-0">
                <a
                  href={pkg.href}
                  className={`w-full justify-center ${pkg.highlight ? "btn-primary" : "btn-secondary"} block text-center py-3`}
                >
                  {pkg.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#718096] mt-6">
          Need a custom corporate package?{" "}
          <Link href="/contact" className="text-[#0B4F8A] font-semibold underline">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
