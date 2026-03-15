import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { STATS, CERTIFICATIONS } from "../data/data";
import TestimonialsSection from "../components/Testimonialssection";
import PartnersSection from "../components/Partnerssection";
import { useTheme } from "../context/ThemeContext";

export default function AboutPage() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const { isDark } = useTheme();

  const filters = [
    { id: "all", labelKey: "about.filter.all" },
    { id: "medical", labelKey: "about.filter.medical" },
    { id: "pharmacy", labelKey: "about.filter.pharmacy" },
    { id: "interior", labelKey: "about.filter.interior" },
    { id: "laptops", labelKey: "about.filter.laptops" },
    { id: "kitchens", labelKey: "about.filter.kitchens" },
    { id: "furniture", labelKey: "about.filter.furniture" },
    { id: "clothes", labelKey: "about.filter.clothes" },
    { id: "perfumes", labelKey: "about.filter.perfumes" },
    { id: "other", labelKey: "about.filter.other" },
  ];

  const filterIcons: Record<string, string> = {
    all: "✦",
    medical: "🩺",
    pharmacy: "💊",
    interior: "🛋️",
    laptops: "💻",
    kitchens: "🍳",
    furniture: "🪑",
    clothes: "👗",
    perfumes: "🌸",
    other: "◎",
  };

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { t } = useTranslation();
  const filteredCertifications =
    activeFilter === "all"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === activeFilter);

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <div className="relative min-h-screen bg-base-100 overflow-x-hidden font-sans transition-colors duration-300">
      <Navbar />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-20">
        {/* Section 1 — Story */}
        <div
          className={`mb-24 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ✅ badge */}
          <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-base-content/40 mb-4">
            {t("about.badge")}
          </p>
          {/* ✅ عنوان */}
          <h1
            className="text-center text-4xl sm:text-5xl font-black mb-14 transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t("about.page_title")}
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Brand card — ثابت دايماً بنفسجي */}
            <div className="flex justify-center">
              <div
                className="relative w-64 h-44 rounded-3xl shadow-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3F0F8B 60%, #53178A)",
                  transform: "rotate(-8deg)",
                }}
              >
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-dashed border-purple-200 flex items-center justify-center bg-white"
                  style={{ fontSize: "7px", letterSpacing: "0.15em" }}
                >
                  <span className="text-gray-400 font-bold text-[8px] tracking-widest text-center leading-tight">
                    SINCE
                    <br />
                    2020
                  </span>
                </div>
                <div className="flex items-center justify-center px-6">
                  <img
                    src="/agenz.png"
                    alt="Agenz Digital"
                    className="h-16 w-auto object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
            </div>

            <div>
              {/* ✅ النص */}
              <p
                className="font-bold text-base leading-relaxed mb-4 transition-colors duration-300"
                style={{ color: brandPrimary }}
              >
                {t("about.story_bold")}
              </p>
              <p className="text-base-content/60 text-sm leading-relaxed">
                {t("about.story_desc")}
              </p>
            </div>
          </div>
        </div>

        <PartnersSection />

        {/* Section 3 — Stats */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              {/* ✅ عنوان الـ stats */}
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-6 transition-colors duration-300"
                style={{ color: brandPrimary }}
              >
                {t("about.stats_title")}
              </h2>
              <p className="text-base-content/60 text-sm leading-relaxed mb-8 max-w-sm">
                {t("about.stats_desc")}
              </p>
              <Link
                to="/services"
                className="inline-block text-white text-sm font-bold tracking-wide px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                    : "linear-gradient(135deg, #3F0F8B, #53178A)",
                }}
              >
                {t("about.stats_cta")}
              </Link>
            </div>

            <div className="flex flex-col gap-8 pt-2">
              {STATS.map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span
                    className="text-4xl font-black leading-none min-w-[80px] transition-colors duration-300"
                    style={{ color: brandPrimary }}
                  >
                    {s.value}
                  </span>
                  <div>
                    <p
                      className="font-bold text-base mb-1 transition-colors duration-300"
                      style={{ color: brandPrimary }}
                    >
                      {t(s.labelKey)}
                    </p>
                    <p className="text-base-content/50 text-sm leading-relaxed">
                      {t(s.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter UI */}
          <div className="mt-16 mb-10">
            <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-base-content/40 mb-5">
              {t("about.filter.label") || "Filter by Category"}
            </p>
            {/* ✅ خلفية الـ filter container */}
            <div
              className="flex flex-wrap justify-center gap-2 px-2 py-3 rounded-2xl transition-colors duration-300"
              style={{
                background: isDark
                  ? "rgba(167,139,250,0.06)"
                  : "rgba(63,15,139,0.04)",
                border: isDark
                  ? "1px solid rgba(167,139,250,0.12)"
                  : "1px solid rgba(63,15,139,0.09)",
              }}
            >
              {filters.map((f) => {
                const isActive = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold focus:outline-none"
                    style={{
                      transition:
                        "background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.2s",
                      background: isActive
                        ? "linear-gradient(135deg, #3F0F8B, #53178A)"
                        : isDark
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(255,255,255,0.7)",
                      color: isActive
                        ? "#ffffff"
                        : isDark
                        ? "rgba(255,255,255,0.5)"
                        : "#6b7280",
                      boxShadow: isActive
                        ? "0 4px 14px rgba(63,15,139,0.28), inset 0 1px 0 rgba(255,255,255,0.15)"
                        : isDark
                        ? "none"
                        : "0 1px 3px rgba(0,0,0,0.06)",
                      transform: isActive ? "translateY(-1px)" : "none",
                      border: isActive
                        ? "1px solid transparent"
                        : isDark
                        ? "1px solid rgba(167,139,250,0.1)"
                        : "1px solid rgba(63,15,139,0.08)",
                    }}
                  >
                    <span
                      className="text-sm leading-none"
                      style={{
                        opacity: isActive ? 1 : 0.45,
                        transition: "opacity 0.25s",
                      }}
                    >
                      {filterIcons[f.id]}
                    </span>
                    <span>{t(f.labelKey)}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "rgba(196,181,253,0.9)" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Results count */}
            <div className="flex justify-center mt-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300"
                style={{
                  background: isDark
                    ? "rgba(167,139,250,0.1)"
                    : "rgba(63,15,139,0.07)",
                  color: brandPrimary,
                  border: isDark
                    ? "1px solid rgba(167,139,250,0.15)"
                    : "1px solid rgba(63,15,139,0.12)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: brandPrimary }}
                />
                {filteredCertifications.length}{" "}
                {filteredCertifications.length === 1 ? "result" : "results"}
              </span>
            </div>
          </div>

          {/* Certifications grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredCertifications.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                className="group relative flex flex-col items-center gap-3 py-7 px-6 rounded-3xl border transition-all duration-500"
                style={{
                  borderColor: isDark ? "rgba(167,139,250,0.15)" : "#eee",
                  background: isDark
                    ? "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))"
                    : "linear-gradient(145deg,#ffffff,#fafafa)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(63,15,139,0.18)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                {/* glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(167,139,250,0.18), transparent 70%)",
                  }}
                />

                {/* logo */}
                <img
                  src={c.img}
                  alt={c.label}
                  className={`w-20 h-20 object-contain transition-all duration-500 group-hover:scale-110 ${
                    isDark ? "brightness-90" : ""
                  }`}
                />

                {/* label */}
                <p
                  className="font-bold text-lg text-center leading-snug transition-all duration-300 group-hover:tracking-wide"
                  style={{ color: brandPrimary }}
                >
                  {c.label}
                </p>
              </a>
            ))}
          </div>
        </div>

        <TestimonialsSection />

        {/* Section 4 — CTA */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="border rounded-3xl px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors duration-300"
            style={{
              background: isDark
                ? "rgba(124,58,237,0.08)"
                : "linear-gradient(135deg, #faf8ff, #f3f0ff)",
              borderColor: isDark ? "rgba(167,139,250,0.2)" : "#e9e0ff",
            }}
          >
            <div>
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-300"
                style={{ color: isDark ? "#a78bfa" : "#53178A" }}
              >
                {t("about.cta_badge")}
              </p>
              <h3
                className="text-3xl font-black leading-tight transition-colors duration-300"
                style={{ color: brandPrimary }}
              >
                {t("about.cta_title_1")}
                <br />
                {t("about.cta_title_2")}
              </h3>
            </div>
            <a
          target="_blank"
            href="https://wa.me/+201060318598"
              className="flex-shrink-0 text-white text-sm font-bold tracking-wide px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                  : "linear-gradient(135deg, #3F0F8B, #53178A)",
              }}
            >
              {t("about.cta_btn")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
