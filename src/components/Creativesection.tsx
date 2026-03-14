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
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, scrollDark };
}

function CollageCard() {
  const { t } = useTranslation();
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
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
        alt="Person"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 object-cover"
        style={{
          filter: "grayscale(100%) contrast(1.1)",
          mixBlendMode: "luminosity",
        }}
      />
      <div
        className="absolute animate-[float1_4s_ease-in-out_infinite]"
        style={{ bottom: "33%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div
          className="text-white font-black text-2xl px-6 py-2 rounded-lg shadow-xl tracking-wide"
          style={{
            fontFamily: "'Playfair Display',serif",
            background: "#3F0F8B",
          }}
        >
          {t("creative.collage_idea")}
        </div>
      </div>
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
      <div
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
      </div>
      {[
        { top: "27%", left: "10%", color: "#f0c030", s: 12 },
        { top: "44%", left: "18%", color: "#A78BFA", s: 8 },
        { top: "59%", right: "13%", color: "#f0c030", s: 12 },
        { bottom: "18%", left: "23%", color: "#f0c030", s: 8 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{ ...d, width: d.s, height: d.s, background: d.color }}
        />
      ))}
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
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 520"
        fill="none"
      >
        <path
          d="M200 315C180 370 150 395 120 425C100 445 82 454 62 464"
          stroke="#f0c030"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          opacity="0.75"
        />
        <path
          d="M200 315C220 370 250 395 276 424"
          stroke="#f0c030"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          opacity="0.75"
        />
      </svg>
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
      { threshold: 0.2 }
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
          className="text-[11px] font-bold tracking-[0.35em] uppercase mb-6"
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
            color: active ? "#ffffff" : "#0d1a3a",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transitionProperty: "color, opacity, transform",
            transitionDuration: ".7s, .9s, .9s",
            transitionDelay: "0s, .1s, .1s",
          }}
        >
          {t("creative.quote")}{" "}
          <span className="underline decoration-2 font-bold underline-offset-4 italic">
            {t("creative.quote_word")}
          </span>
          .
        </blockquote>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(16px)",
            transition: "opacity .8s ease .45s, transform .8s ease .45s",
          }}
        >
          <p
            className="font-bold text-sm tracking-wide"
            style={{
              color: active ? "#ffffff" : "#0d1a3a",
              transition: "color .7s ease",
            }}
          >
            {t("creative.founder_name")}
          </p>
          <p
            className="text-sm mt-1"
            style={{
              color: active ? "#C4B5FD" : "#6b7280",
              transition: "color .7s ease",
            }}
          >
            {t("creative.founder_title")}
          </p>
        </div>
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

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <CollageCard />
          <div className="flex flex-col gap-8 pt-2 lg:pt-4">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.3em] uppercase mb-3"
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
                <br />
                {t("creative.title_2")}
              </h2>
              <p
                className="text-base leading-relaxed max-w-md"
                style={{ color: subTextColor, transition: "color .7s ease" }}
              >
                {t("creative.description")}
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
