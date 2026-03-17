import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../data/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const delays = ["delay-100", "delay-200", "delay-300"];

export default function ServicesSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: cardsRef, inView: cardsIn } = useInView();

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <section
      id="services"
      className="bg-base-100 py-30 px-6 md:px-16 overflow-hidden font-sans transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ✅ badge */}
          <p className="text-[11px] font-bold  text-base-content/40 mb-4">
            {t("services.badge")}
          </p>

          {/* ✅ العنوان */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content leading-tight mb-5 transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("services.title")}
          </h2>

          {/* ✅ الوصف */}
          <p className="text-base-content/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            {t("services.description")}
          </p>

          {/* ✅ زرار CTA */}
          <Link
            to="/services"
            className="inline-block text-white text-sm font-bold tracking-wide px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{
              background: isDark
                ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                : "linear-gradient(135deg, #3F0F8B, #53178A)",
              boxShadow: isDark
                ? "0 4px 20px rgba(124,58,237,0.4)"
                : "0 4px 20px rgba(63,15,139,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = isDark
                ? "linear-gradient(135deg, #6d28d9, #7c3aed)"
                : "linear-gradient(135deg, #53178A, #3F0F8B)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = isDark
                ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                : "linear-gradient(135deg, #3F0F8B, #53178A)")
            }
          >
            {t("services.cta")}
          </Link>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <Link
              to={`/services/${svc.href}`}
              key={i}
              className={`group flex flex-col items-center text-center p-8 rounded-2xl border cursor-pointer
                bg-base-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
                ${
                  cardsIn
                    ? `opacity-100 translate-y-0 ${delays[i]}`
                    : "opacity-0 translate-y-8"
                }
                transition-all duration-700`}
              style={{
                borderColor: isDark ? "rgba(167,139,250,0.15)" : "#e5e7eb",
                background: isDark ? "rgba(255,255,255,0.03)" : undefined,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brandPrimary;
                if (isDark)
                  e.currentTarget.style.background = "rgba(167,139,250,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(167,139,250,0.15)"
                  : "#e5e7eb";
                if (isDark)
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Icon Container */}
              <div
                className="w-28 h-28 mb-6 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: isDark
                    ? "linear-gradient(130deg, rgba(63,15,139,0.15), rgba(83,23,138,0.12))"
                    : "linear-gradient(130deg, rgba(63,15,139,0.15), rgba(83,23,138,0.12))",
                  boxShadow: "0 8px 32px rgba(63,15,139,0.3)",
                }}
              >
                <img
                  src={svc.image}
                  alt={t(svc.title)}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* ✅ عنوان الكارد */}
              <h3
                className="text-xl font-bold text-base-content mb-3 whitespace-pre-line transition-colors duration-300"
                style={{ fontFamily: "'Noto Kufi Arabic', sans-serif" }}
              >
                {t(svc.title)}
              </h3>

              {/* ✅ وصف الكارد */}
              <p className="text-base-content/50 text-sm leading-relaxed mb-8 flex-1">
                {t(svc.description).slice(0, 80)}...
              </p>

              {/* ✅ السهم */}
              <span
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-base transition-all duration-300 group-hover:translate-x-1"
                style={{
                  borderColor: isDark ? "rgba(167,139,250,0.3)" : "#e5e7eb",
                  color: isDark ? "rgba(167,139,250,0.6)" : "#9ca3af",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = brandPrimary;
                  el.style.borderColor = brandPrimary;
                  el.style.color = "#fff";
                }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
