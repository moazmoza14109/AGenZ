import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/data";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

export default function ServicesPage() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const tmr = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(tmr);
  }, []);

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <section className="relative min-h-screen bg-base-100 overflow-x-hidden font-sans transition-colors duration-300">
      <Navbar />

      {/* blobs */}
      <div
        className="pointer-events-none absolute top-40 -right-24 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(124,58,237,0.08)" : "rgba(63,15,139,0.06)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-40 -left-24 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(109,40,217,0.06)" : "rgba(83,23,138,0.04)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-20">
        {/* Hero */}
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-10 h-px transition-colors duration-300"
              style={{ background: brandPrimary }}
            />
            <p
              className="text-xs font-bold transition-colors duration-300"
              style={{ color: brandPrimary }}
            >
              {t("services.page_badge")}
            </p>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold leading-tight mb-6 max-w-xl transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t("services.page_title")}
          </h1>
          <p className="text-base-content/60 text-sm leading-relaxed max-w-lg">
            {t("services.page_description")}
          </p>
        </div>

        {/* Grid */}
        <div
          className={`transition-all duration-1000 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-px transition-colors duration-300"
              style={{ background: brandPrimary }}
            />
            <p
              className="text-xs transition-colors duration-300"
              style={{ color: brandPrimary }}
            >
              {t("services.what_we_do_badge")}
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-medium mb-10 transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t("services.what_we_do_title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <ServiceCard
                key={i}
                svc={svc}
                delay={i * 60}
                visible={visible}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  delay,
  visible,
  isDark,
}: {
  svc: (typeof SERVICES)[0];
  delay: number;
  visible: boolean;
  isDark: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <Link
      to={svc.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms, box-shadow 0.3s`,
      }}
    >
      {/* image */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: "220px",
          background: isDark
            ? "linear-gradient(130deg, rgba(63,15,139,0.15), rgba(83,23,138,0.12))"
            : "linear-gradient(130deg, rgba(63,15,139,0.15), rgba(83,23,138,0.12))",
        }}
      >
        <img
          src={svc.image}
          alt={t(svc.title)}
          className="w-32 h-32 object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "rgba(63,15,139,0.3)",
            opacity: hovered ? 1 : 0,
          }}
        />
        <span className="absolute top-4 left-4 text-white font-black text-sm tracking-widest">
          {svc.number}.
        </span>
        <span
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
          style={{
            background: "#C4B5FD",
            color: "#3F0F8B",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.6)",
          }}
        >
          ↗
        </span>
      </div>
      {/* body */}
      <div
        className="px-5 py-5 transition-colors duration-300"
        style={{
          background: isDark
            ? hovered
              ? "rgba(124,58,237,0.15)"
              : "rgba(255,255,255,0.04)"
            : hovered
              ? "#faf8ff"
              : "#ffffff",
          border: isDark ? "1px solid rgba(167,139,250,0.1)" : "none",
          borderTop: "none",
        }}
      >
        {/* title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="font-black text-base leading-snug transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t(svc.title)}
          </h3>
          <span
            className="flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: brandPrimary }}
          >
            ↗
          </span>
        </div>

        {/* description */}
        <p className="text-base-content/50 text-xs leading-relaxed line-clamp-2 mb-4">
          {t(svc.description)}
        </p>

        {/* divider */}
        <div
          className="w-full h-px mb-4 transition-colors duration-300"
          style={{ background: isDark ? "rgba(167,139,250,0.1)" : "#f3f0ff" }}
        />

        {/* features */}
        {svc.features && svc.features.length > 0 && (
          <ul className="flex flex-col gap-2">
            {svc.features.map((featureKey, fi) => {
              const fullText = t(featureKey);
              const shortLabel = fullText.includes(":")
                ? fullText.split(":")[0].trim()
                : fullText.length > 48
                  ? fullText.slice(0, 48).trim() + "…"
                  : fullText;
              return (
                <li key={fi} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
                    style={{
                      background: hovered
                        ? isDark
                          ? "#a78bfa"
                          : "#7C3AED"
                        : "#C4B5FD",
                    }}
                  />
                  <span
                    className="text-xs leading-snug transition-colors duration-300"
                    style={{
                      color: hovered
                        ? isDark
                          ? "#c4b5fd"
                          : "#3F0F8B"
                        : isDark
                          ? "rgba(255,255,255,0.4)"
                          : "#9CA3AF",
                      fontWeight: hovered ? 600 : 400,
                    }}
                  >
                    {shortLabel}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Link>
  );
}
