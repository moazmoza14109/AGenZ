import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

function useScrollToggle(threshold = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [scrollDark, setScrollDark] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrollDark(entry.isIntersecting),
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, scrollDark };
}

function CollageCard() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        aspectRatio: "3/4",
        maxHeight: 520,
        background: "linear-gradient(135deg, #3F0F8B, #53178A)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <img
        src="../assets/mr-mahmoud-mouawad-2.jpeg"
        alt="Person"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 object-cover"
        style={{
          filter: "grayscale(100%) contrast(1.25) brightness(0.8) sepia(30%)",
          mixBlendMode: "luminosity",
        }}
      />
      {/* Gradient fade للأسفل */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: "linear-gradient(to top, #3F0F8B 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(196,181,253,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "17%",
          right: "9%",
          animation: "float2 3.4s ease-in-out infinite",
        }}
      >
        <div
          className="rounded-xl w-20 h-14 flex items-center justify-center shadow-lg"
          style={{ background: "#f0c030" }}
        >
          <svg viewBox="0 0 60 30" fill="none" className="w-10">
            <path
              d="M4 10Q14 2 24 10Q34 18 44 10Q50 6 56 10"
              stroke="#111"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M4 20Q14 12 24 20Q34 28 44 20"
              stroke="#111"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {/* <div
        className="absolute"
        style={{
          top: "11%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "float3 5s ease-in-out infinite",
        }}
      >
        <div className="bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-8 h-6 border-2 rounded-full flex items-center justify-center"
              style={{ borderColor: "#3F0F8B" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#3F0F8B" }}
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="absolute" style={{ top: "29%", left: "6%" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L22 20L2 20Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute" style={{ bottom: "26%", left: "6%" }}>
        <svg width="18" height="28" viewBox="0 0 32 52" fill="none">
          <path
            d="M18 2L4 28H14L10 50L28 20H18L22 2Z"
            fill="white"
            opacity="0.7"
          />
        </svg>
      </div>
      <div
        className="absolute overflow-hidden"
        style={{ top: "20%", right: "4%", width: 38, height: 19 }}
      >
        <div
          className="rounded-full"
          style={{ width: 38, height: 38, background: "#f0c030" }}
        />
      </div>
      <div className="absolute" style={{ top: "37%", right: "6%" }}>
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <path
            d="M8 15L8 25L16 25L28 31L28 9L16 15Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M30 13Q36 20 30 27"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function PuzzleImage({ active }: { active: boolean }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl transition-all duration-700"
      style={{
        aspectRatio: "16/10",
        backgroundColor: active ? "#2d1b69" : "#f0ead8",
        backgroundImage: active
          ? "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)"
          : "linear-gradient(rgba(160,148,128,.45) 1px,transparent 1px),linear-gradient(90deg,rgba(160,148,128,.45) 1px,transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="relative w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80"
          alt="Puzzle collaboration"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.15)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 160" fill="none" className="w-2/3 opacity-75">
            <path
              d="M20 20H80C80 20 80 35 90 35C100 35 100 20 100 20H160V80C160 80 145 80 145 90C145 100 160 100 160 100V160H20V100C20 100 35 100 35 90C35 80 20 80 20 80Z"
              fill="#3F0F8B"
            />
            <path
              d="M70 58H95C95 58 95 66 100 66C105 66 105 58 105 58H130V83C130 83 122 83 122 89C122 95 130 95 130 95V118H70V95C70 95 78 95 78 89C78 83 70 83 70 83Z"
              fill="#53178A"
              opacity="0.65"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function QuoteBand({ active }: { active: boolean }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-20 py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: active ? 0.04 : 0,
          transition: "opacity .7s ease",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p
          className="text-[11px] font-bold uppercase mb-6"
          style={{
            color: active ? "#C4B5FD" : "#9ca3af",
            transition: "color .7s ease",
          }}
        >
          {t("creative.quote_badge")}
        </p>
        <blockquote
          className="text-2xl sm:text-3xl font-medium leading-tight mb-8"
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            color: active ? "#ffffff" : "#555",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transitionProperty: "color, opacity, transform",
            transitionDuration: ".7s, .9s, .9s",
            transitionDelay: "0s, .1s, .1s",
          }}
        >
          {t("creative.quote")}
        </blockquote>
      </div>
    </div>
  );
}

export default function CreativeSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { ref, scrollDark } = useScrollToggle(0.3);

  // ✅ الـ animation شغالة في الاتنين
  // الفرق: الخلفية الأساسية قبل الـ scroll
  //   Light → أبيض فاتح
  //   Dark  → bg-base-100 داكن
  // لما يسكرول → بنفسجي في الاتنين

  const textColor = scrollDark ? "#ffffff" : isDark ? "#e2e8f0" : "#0d1a3a";
  const subTextColor = scrollDark ? "#DDD6FE" : isDark ? "#94a3b8" : "#6b7280";
  const badgeColor = scrollDark ? "#C4B5FD" : isDark ? "#a78bfa" : "#9ca3af";

  return (
    <>
      <style>{`
        @keyframes float1 { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-9px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-6px) rotate(4deg)} }
        @keyframes float3 { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
      `}</style>

      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="relative overflow-hidden py-20 px-6 md:px-16 min-h-screen font-sans bg-base-100 transition-colors duration-300"
      >
        {/* ✅ الخلفية البنفسجية — clip-path animation في الاتنين light و dark */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #3F0F8B, #53178A)",
            clipPath: scrollDark
              ? "circle(150% at 50% 50%)"
              : "circle(0% at 50% 50%)",
            transition: "clip-path 1.1s cubic-bezier(0.77,0,0.18,1)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5 items-start">
          <CollageCard />
          <div className="flex flex-col gap-8 pt-2 lg:pt-4">
            <div>
              <p
                className="text-[11px] font-bold mb-3"
                style={{ color: badgeColor, transition: "color .7s ease" }}
              >
                {t("creative.badge")}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-5"
                style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  color: textColor,
                  transition: "color .7s ease",
                }}
              >
                {t("creative.title_1")}
              </h2>
              <p
                className="text-base leading-relaxed max-w-md"
                style={{ color: subTextColor, transition: "color .7s ease" }}
              >
                {t("creative.description_1")}
                <br />
                {t("creative.description_2")}
                <br />
                {t("creative.description_3")}
                <br />
                {t("creative.description_4")}
              </p>
            </div>
            <PuzzleImage active={scrollDark} />
          </div>
        </div>

        <QuoteBand active={scrollDark} />
      </section>
    </>
  );
}
