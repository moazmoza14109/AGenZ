import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const LEFT_IMAGE =
  "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=480&q=80";
const RIGHT_TOP =
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=480&q=80";
const RIGHT_BOTTOM =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMoamsqqKMsXpEVdBxraV6bUj6OK_vLsQkw&s";

function useBreakpoint() {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return { isLg: w >= 1024 };
}

export default function HeroSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  const { isLg } = useBreakpoint();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";
  const tagBg = isDark ? "#1e1b2e" : undefined;
  const tagBorder = isDark ? "1px solid rgba(167,139,250,0.2)" : "none";

  return (
    <section
      id="hero"
      className="pt-30 relative min-h-screen bg-base-100 overflow-hidden font-sans transition-colors duration-300"
    >
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50%       { transform: translateY(-50%) translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50%       { transform: translateY(-50%) translateY(-12px); }
        }
        @keyframes floatSimple {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes floatSimpleSlow {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseBlob {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.06; }
          50%       { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1;  }
        }
        @keyframes pulseBlobDark {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.09; }
          50%       { transform: translate(-50%, -50%) scale(1.2); opacity: 0.14; }
        }
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes tagFloatRight {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50%       { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(28px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(28px) rotate(-360deg); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);   opacity: 1;   }
          50%       { transform: translateY(6px); opacity: 0.4; }
        }
        @keyframes particleDrift {
          0%   { transform: translateY(0)    translateX(0)   scale(1);   opacity: 0.6; }
          33%  { transform: translateY(-20px) translateX(8px)  scale(1.2); opacity: 1;   }
          66%  { transform: translateY(-10px) translateX(-6px) scale(0.8); opacity: 0.4; }
          100% { transform: translateY(0)    translateX(0)   scale(1);   opacity: 0.6; }
        }

        .float-left  { animation: floatY     4s ease-in-out infinite; }
        .float-right { animation: floatYSlow 5s ease-in-out infinite; }
        .float-img-bottom { animation: floatSimple 3.5s ease-in-out infinite; }
        .tag-left    { animation: tagFloat      3s  ease-in-out infinite; }
        .tag-right   { animation: tagFloatRight 3.8s ease-in-out infinite; }
        .blob-pulse  { animation: pulseBlob     6s  ease-in-out infinite; }
        .blob-pulse-dark { animation: pulseBlobDark 6s ease-in-out infinite; }
        .orbit-dot   { animation: orbitDot 3s linear infinite; }
        .scroll-indicator div { animation: scrollBounce 1.4s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* ── Animated background particles ── */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full z-0"
          style={{
            width: `${[6, 8, 5, 10, 7, 4][i]}px`,
            height: `${[6, 8, 5, 10, 7, 4][i]}px`,
            left: `${[15, 75, 30, 85, 50, 20][i]}%`,
            top: `${[20, 35, 70, 55, 80, 50][i]}%`,
            background: isDark ? "rgba(167,139,250,0.5)" : "rgba(63,15,139,0.2)",
            animation: `particleDrift ${[4, 5.5, 3.8, 6, 4.5, 5][i]}s ease-in-out infinite`,
            animationDelay: `${[0, 0.8, 1.5, 0.3, 2, 1][i]}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-68px)] px-6 md:px-16 py-12 lg:py-0">

        {/* ── Left image — desktop ── */}
        {isLg && (
          <div
            className={`absolute left-16 xl:left-24 top-1/2 float-left transition-all duration-1000 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="relative w-52 xl:w-64">
              <img
                src={LEFT_IMAGE}
                alt="Creative workspace"
                className={`rounded-2xl shadow-2xl w-full h-64 xl:h-80 object-cover transition-all duration-300 ${
                  isDark ? "brightness-75 saturate-90" : ""
                }`}
                loading="eager"
              />
              {/* Orbiting dot */}
              <div
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{ marginTop: "-50%", marginLeft: "50%" }}
              >
                <div
                  className="orbit-dot w-3 h-3 rounded-full"
                  style={{ background: isDark ? "#c4b5fd" : "#3F0F8B" }}
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-xl"
                style={{
                  background: isDark ? "rgba(167,139,250,0.25)" : "rgba(83,23,138,0.18)",
                  animation: "floatSimple 3s ease-in-out infinite",
                }}
              />
              <div
                className="tag-left absolute -top-3 -right-5 rounded-xl shadow-lg px-3 py-1.5 text-[11px] font-bold tracking-wide whitespace-nowrap"
                style={{
                  backgroundColor: tagBg ?? (isDark ? "rgb(30,27,46)" : "#fff"),
                  border: tagBorder,
                  color: brandPrimary,
                }}
              >
                {t("hero.tag_creative")}
              </div>
            </div>
          </div>
        )}

        {/* ── Center content ── */}
        <div
          className={`text-center max-w-lg w-full mx-auto transition-all duration-1000 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: brandSecondary }}
          >
            {t("hero.badge")}
          </p>

          {/* Shimmer title */}
          <h1
            className="text-3xl sm:text-4xl xl:text-5xl font-black leading-tight mb-5"
            style={{ color: brandPrimary }}
          >
            {t("hero.title")}
            <br />
            {/* <span
              style={{
                background: `linear-gradient(90deg, ${brandSecondary}, ${brandPrimary}, ${brandSecondary})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            > */}
              {t("hero.title_span")}
            {/* </span> */}
          </h1>

          <p className="text-base-content/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto">
            {t("hero.description")}
          </p>

          {/* CTA with pulse ring */}
          <div className="relative inline-block">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: isDark ? "rgba(124,58,237,0.4)" : "rgba(63,15,139,0.25)",
                animation: "pulseBlob 2s ease-in-out infinite",
                transform: "scale(1.15)",
              }}
            />
            <Link
              to="/about"
              className="relative inline-block text-white text-sm font-bold tracking-[0.2em] uppercase px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                  : "linear-gradient(135deg, #3F0F8B, #53178A)",
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
              {t("hero.cta")}
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator mt-10 flex justify-center">
            <div className="w-6 h-10 border-2 border-base-content/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-base-content/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* ── Right images — desktop ── */}
        {isLg && (
          <div
            className={`flex absolute right-16 xl:right-24 top-1/2 float-right flex-col gap-4 transition-all duration-1000 delay-100 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <img
              src={RIGHT_TOP}
              alt="Digital tools"
              className={`rounded-2xl shadow-xl w-48 xl:w-56 h-36 object-cover transition-all duration-300 ${
                isDark ? "brightness-75 saturate-90" : ""
              }`}
              loading="eager"
            />
            <div className="relative self-end float-img-bottom">
              <img
                src={RIGHT_BOTTOM}
                alt="Agency workspace"
                className={`rounded-2xl shadow-xl w-44 xl:w-52 h-32 object-cover transition-all duration-300 ${
                  isDark ? "brightness-75 saturate-90" : ""
                }`}
                loading="eager"
              />
              <div
                className="tag-right absolute -bottom-3 -left-4 rounded-xl shadow-lg px-3 py-1.5 text-[11px] font-bold tracking-wide whitespace-nowrap"
                style={{
                  backgroundColor: tagBg ?? (isDark ? "rgb(30,27,46)" : "#fff"),
                  border: tagBorder,
                  color: brandPrimary,
                }}
              >
                {t("hero.tag_strategic")}
              </div>
            </div>
          </div>
        )}

        {/* ── Mobile image row ── */}
        {!isLg && (
          <div
            className={`flex gap-3 mt-8 w-full max-w-sm justify-center transition-all duration-1000 delay-300 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={LEFT_IMAGE}
              alt="Creative workspace"
              className={`rounded-xl shadow-md flex-1 h-32 object-cover ${isDark ? "brightness-75" : ""}`}
              style={{ animation: "floatSimple 4s ease-in-out infinite" }}
            />
            <img
              src={RIGHT_TOP}
              alt="Digital tools"
              className={`rounded-xl shadow-md flex-1 h-32 object-cover ${isDark ? "brightness-75" : ""}`}
              style={{ animation: "floatSimple 4s ease-in-out infinite 0.6s" }}
            />
          </div>
        )}
      </div>

      {/* ── Animated blob ── */}
      <div
        className={`pointer-events-none absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl z-0 ${
          isDark ? "blob-pulse-dark" : "blob-pulse"
        }`}
        style={{ background: "radial-gradient(circle, #7c3aed, #6d28d9)" }}
      />

      {/* ── Rotating ring ── */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full z-0"
        style={{
          border: isDark ? "1px solid rgba(167,139,250,0.06)" : "1px solid rgba(63,15,139,0.04)",
          transform: "translate(-50%, -50%)",
          animation: "rotateSlow 20s linear infinite",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full z-0"
        style={{
          border: isDark ? "1px solid rgba(167,139,250,0.05)" : "1px solid rgba(63,15,139,0.03)",
          transform: "translate(-50%, -50%)",
          animation: "rotateSlow 14s linear infinite reverse",
        }}
      />

      {/* ── Grain ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />
    </section>
  );
}