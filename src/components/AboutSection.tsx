import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const RocketSVG = () => (
  <svg
    viewBox="0 0 120 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <ellipse cx="60" cy="75" rx="22" ry="48" fill="#3F0F8B" />
    <ellipse cx="60" cy="75" rx="18" ry="44" fill="#53178A" />
    <circle cx="60" cy="68" r="10" fill="#8B5CF6" opacity="0.8" />
    <circle cx="60" cy="68" r="7" fill="#A78BFA" opacity="0.6" />
    <path d="M38 108 L50 88 L50 115 Z" fill="#3F0F8B" />
    <path d="M82 108 L70 88 L70 115 Z" fill="#3F0F8B" />
    <ellipse cx="60" cy="128" rx="10" ry="18" fill="#53178A" opacity="0.9" />
    <ellipse cx="60" cy="135" rx="6" ry="12" fill="#7C3AED" opacity="0.8" />
    <ellipse cx="60" cy="140" rx="3" ry="8" fill="#fff" opacity="0.6" />
    {[...Array(5)].map((_, i) =>
      [...Array(5)].map((_, j) => (
        <circle
          key={`${i}-${j}`}
          cx={42 + j * 9}
          cy={50 + i * 9}
          r={1.2}
          fill="#333"
          opacity={0.3}
        />
      ))
    )}
  </svg>
);

const PuzzlePurple = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 5 H28 C28 5 28 12 35 12 C42 12 42 5 42 5 H55 V28 C55 28 48 28 48 35 C48 42 55 42 55 42 V55 H5 V5Z"
      fill="#3F0F8B"
    />
  </svg>
);

const PuzzleLightPurple = () => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 5 H22 C22 5 22 11 28 11 C34 11 34 5 34 5 H45 V22 C45 22 39 22 39 28 C39 34 45 34 45 34 V45 H5 V5Z"
      fill="#53178A"
    />
  </svg>
);

const LightbulbSVG = () => (
  <svg viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="22" r="18" fill="#53178A" />
    <rect x="16" y="38" width="16" height="5" rx="2" fill="#53178A" />
    <rect x="17" y="44" width="14" height="4" rx="2" fill="#53178A" />
    <rect x="19" y="49" width="10" height="4" rx="3" fill="#53178A" />
    <line
      x1="24"
      y1="4"
      x2="24"
      y2="0"
      stroke="#53178A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="8"
      x2="5"
      y2="5"
      stroke="#53178A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="40"
      y1="8"
      x2="43"
      y2="5"
      stroke="#53178A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BoltSVG = ({ color = "#3F0F8B" }: { color?: string }) => (
  <svg viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2 L4 28 H14 L10 50 L28 20 H18 L22 2Z" fill={color} />
  </svg>
);

const WiggleSVG = () => (
  <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 10 Q12 2 22 10 Q32 18 42 10 Q52 2 58 10"
      stroke="#53178A"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default function AboutSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { ref, inView } = useInView();

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-base-100 overflow-hidden py-30 px-6 md:px-16 font-sans transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Left: Text ── */}
        <div
          className={`transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          {/* ✅ badge */}
          <p
            className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4 transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t("about.badge")}
          </p>

          {/* ✅ العنوان — text-base-content في dark، داكن في light */}
          <h2
            className="text-4xl sm:text-5xl font-black leading-[1.05] mb-6 text-base-content transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("about.title_1")}
            <br />
            {t("about.title_2")}
            <br />
            {t("about.title_3")}
          </h2>

          {/* ✅ الوصف — text-base-content/60 */}
          <p className="text-base-content/60 text-base leading-relaxed mb-4 max-w-md transition-colors duration-300">
            {t("about.desc_1")}
          </p>
          <p className="text-base-content/60 text-base leading-relaxed mb-10 max-w-md transition-colors duration-300">
            {t("about.desc_2")}
          </p>

          {/* ✅ زرار CTA */}
          <Link
            to="/about"
            className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
            {t("about.cta")}
          </Link>
        </div>

        {/* ── Right: Collage ── */}
        <div
          className={`relative transition-all duration-1000 delay-200 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="relative ml-4 lg:ml-8">
            {/* ✅ الصورة — bg-base-200، في dark brightness أقل */}
            <div
              className="rounded-2xl overflow-hidden bg-base-200 shadow-2xl w-full transition-colors duration-300"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80"
                alt="Digital workspace"
                className={`w-full h-full object-cover grayscale contrast-125 transition-all duration-300 ${
                  isDark ? "brightness-50 opacity-80" : ""
                }`}
              />
              <div
                className="absolute inset-0 mix-blend-multiply transition-colors duration-300"
                style={{
                  background: isDark
                    ? "rgba(124,58,237,0.15)"
                    : "rgba(63,15,139,0.10)",
                }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #3F0F8B 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  opacity: isDark ? 0.1 : 0.2,
                }}
              />
            </div>

            {/* الـ decorations — SVGs ثابتة لأن ألوانها بنفسجي بيبان على الاتنين */}
            <div className="absolute -top-6 right-16 w-12 h-12 rotate-12 drop-shadow-lg">
              <PuzzlePurple />
            </div>
            <div className="absolute -top-3 right-4 w-9 h-9 -rotate-6 drop-shadow-lg">
              <PuzzlePurple />
            </div>
            <div className="absolute top-4 right-0 w-10 h-10 rotate-45 drop-shadow-lg">
              <PuzzleLightPurple />
            </div>
            <div className="absolute -top-5 right-24 w-10 h-14 drop-shadow-lg">
              <LightbulbSVG />
            </div>
            <div className="absolute top-8 -left-6 w-7 h-11 -rotate-12 drop-shadow">
              <BoltSVG />
            </div>
            <div className="absolute top-12 right-[-18px] w-6 h-10 rotate-6 drop-shadow">
              <BoltSVG color="#53178A" />
            </div>

            {/* ✅ الدوائر الصغيرة — بنفسجي فاتح في dark */}
            <div
              className="absolute top-2 left-12 w-4 h-4 rounded-full shadow-md transition-colors duration-300"
              style={{ background: brandPrimary }}
            />
            <div
              className="absolute top-0 left-28 w-3 h-3 rounded-full shadow-md transition-colors duration-300"
              style={{ background: brandSecondary }}
            />
            <div
              className="absolute -top-4 left-40 w-4 h-4 rounded-full shadow-md transition-colors duration-300"
              style={{ background: brandPrimary }}
            />

            <div className="absolute top-6 right-[-30px] w-14 opacity-80">
              <WiggleSVG />
            </div>
            <div className="absolute bottom-24 right-[-28px] w-14 opacity-60">
              <WiggleSVG />
            </div>
            <div className="absolute -bottom-10 -left-10 w-20 h-28 drop-shadow-xl z-10">
              <RocketSVG />
            </div>

            {/* ✅ الدايرة الكبيرة — بنفسجي فاتح في dark */}
            <div
              className="absolute -bottom-8 right-10 w-20 h-20 rounded-full border-[6px] opacity-90 shadow-lg transition-colors duration-300"
              style={{ borderColor: brandPrimary }}
            />
            <div className="absolute bottom-4 right-[-12px] w-8 h-8 rotate-12 drop-shadow">
              <PuzzleLightPurple />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
