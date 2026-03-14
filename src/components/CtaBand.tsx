import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function CTABand() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <div
      className="relative py-32 px-6 text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ الـ overlay أغمق في dark mode */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(15,5,40,0.80), rgba(63,15,139,0.90))"
            : "linear-gradient(to bottom, rgba(63,15,139,0.50), rgba(83,23,138,0.60))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/60 mb-4">
          {t("cta_band.badge")}
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display',serif" }}
        >
          {t("cta_band.title_1")}
          <br />
          {t("cta_band.title_2")}
        </h2>
        <Link
          to="/contact"
          className="inline-block text-white text-sm font-bold tracking-wide px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #fff2, #fff3)",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #fff2, #fff3)")
          }
        >
          {t("cta_band.cta")}
        </Link>
      </div>
    </div>
  );
}
