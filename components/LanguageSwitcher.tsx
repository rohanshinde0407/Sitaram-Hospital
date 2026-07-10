"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "mr" : "en")}
      aria-label="Switch language"
      className="flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-bold transition-colors select-none"
      style={{
        borderColor: "rgba(255,255,255,0.3)",
        color: lang === "mr" ? "#fff" : "rgba(255,255,255,0.75)",
        background: "rgba(255,255,255,0.1)",
      }}
    >
      <span className={lang === "en" ? "text-white font-black" : "text-white/50"}>EN</span>
      <span className="text-white/30 font-light">|</span>
      <span className={lang === "mr" ? "text-white font-black" : "text-white/50"}>मर</span>
    </button>
  );
}
