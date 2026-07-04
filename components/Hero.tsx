import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <Image
        src="/img/hero.png"
        alt="ZEN Laser Procto Care — Sitaram Hospital, Dhule"
        width={3450}
        height={1715}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
        sizes="100vw"
      />
    </section>
  );
}
