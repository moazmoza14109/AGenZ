import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const ShopifyLogo = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 109 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M95.5 23.3c-.1-.7-.7-1.1-1.2-1.1s-10.1-.7-10.1-.7-6.7-6.6-7.4-7.3c-.7-.7-2.1-.5-2.6-.3 0 0-1.3.4-3.4 1.1C68.6 9.8 65 7 60.2 7c-.1 0-.3 0-.4.1-1.4-1.8-3.1-2.6-4.6-2.6C42.7 4.5 36.6 20 34.7 28.1c-5.3 1.6-9 2.8-9.5 2.9-2.9.9-3 1-3.4 3.7C21.5 36.5 11 117 11 117l72.4 12.5L109 124S95.6 24 95.5 23.3zM68.8 16.8l-5.5 1.7c0-.6 0-1.1-.1-1.7-.3-4.6-1.6-7.1-3.4-8.5 3.4.5 5.7 4.4 9 8.5zm-10.5-7.4c.3.1.5.3.8.5-2.1 1-4.4 3.5-5.3 8.5l-7 2.2c1.5-5.6 5.5-11.2 11.5-11.2zm-1.7 53.4c.2 3.5 9.4 4.3 9.9 12.6.4 6.5-3.5 11-9 11.3-6.7.4-10.3-3.5-10.3-3.5l1.4-6s3.7 2.8 6.6 2.6c1.9-.1 2.6-1.7 2.5-2.8-.3-4.6-7.8-4.3-8.2-11.9-.4-6.4 3.8-12.8 13-13.4 3.6-.2 5.4.7 5.4.7l-2.1 7.8s-2.4-1.1-5.2-.9c-4.1.2-4.1 2.9-4 3.5zm9.6-47.4c0 .5 0 .9.1 1.4l-9.4 2.9c.9-5.5 4-8.2 6.6-9.2.9 1.4 2.4 2.9 2.7 4.9z"
      fill={active ? "#96BF48" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
  </svg>
);

const MetaLogo = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 60 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-7"
  >
    <path
      d="M3 22.5C3 25.5 4.7 27.5 7.2 27.5C9.1 27.5 10.5 26.5 12.2 24C13.7 26 15.3 27.5 17.8 27.5C22 27.5 24.5 23.8 24.5 18.5C24.5 14.8 22.8 12.5 20.3 12.5C18.5 12.5 17 13.8 15.5 16.5C14.5 14.3 13 12.5 10.5 12.5C7 12.5 3 17 3 22.5Z"
      fill={active ? "#fff" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
    <path
      d="M28 14C28 11.8 29.2 10.5 31 10.5C32.8 10.5 34 11.8 34 14V20.5C34 23.5 35.5 25.5 38 25.5C40.5 25.5 42 23 42 19.5V14C42 11.8 43.2 10.5 45 10.5C46.8 10.5 48 11.8 48 14V25H42V23C40.8 24.8 39 25.8 36.5 25.8C32.2 25.8 28 22.5 28 17V14Z"
      fill={active ? "#fff" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
    <text
      x="50"
      y="22"
      fontSize="11"
      fontWeight="800"
      fill={active ? "#fff" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}
    >
      meta
    </text>
  </svg>
);

const GoogleLogo = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M23 9.5C26.5 9.5 29.4 10.7 31.7 12.7L37.3 7.1C33.8 3.9 29.3 2 23 2C14.1 2 6.5 7.2 3 14.7L9.7 19.8C11.5 14 16.8 9.5 23 9.5Z"
      fill={active ? "#EA4335" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
    <path
      d="M44.5 23.5C44.5 22 44.4 20.6 44.1 19.3H23V27.7H35.1C34.6 30.4 33 32.7 30.6 34.2L37.1 39.1C41.1 35.4 44.5 30 44.5 23.5Z"
      fill={active ? "#4285F4" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
    <path
      d="M9.7 26.2C9.2 24.8 9 23.4 9 22C9 20.6 9.2 19.2 9.7 17.8L3 12.7C1.1 16.3 0 20.1 0 24C0 27.9 1.1 31.7 3 35.3L9.7 30.2V26.2Z"
      fill={active ? "#FBBC05" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
    <path
      d="M23 46C29.3 46 34.6 43.9 38.3 40.3L31.8 35.4C29.8 36.7 27.2 37.5 23 37.5C16.8 37.5 11.5 33 9.7 27.2L3 32.3C6.5 39.8 14.1 46 23 46Z"
      fill={active ? "#34A853" : "rgba(255,255,255,0.4)"}
      style={{ transition: "fill 0.4s" }}
    />
  </svg>
);

const PARTNERS = [
  {
    key: "shopify",
    Logo: ShopifyLogo,
    number: "01",
    accentColor: "#96BF48",
    accentGlow: "rgba(150,191,72,0.25)",
  },
  {
    key: "meta",
    Logo: MetaLogo,
    number: "02",
    accentColor: "#0082FB",
    accentGlow: "rgba(0,130,251,0.25)",
  },
  {
    key: "google",
    Logo: GoogleLogo,
    number: "03",
    accentColor: "#EA4335",
    accentGlow: "rgba(234,67,53,0.2)",
  },
];

export default function PartnersSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % PARTNERS.length),
      3500
    );
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cur = PARTNERS[active];
  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <section ref={ref} className="relative py-24 font-sans overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        {/* header */}
        <div
          className={`mb-14 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-10 h-px transition-colors duration-300"
              style={{ background: brandPrimary }}
            />
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ color: brandPrimary }}
            >
              {t("partners.badge")}
            </p>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold leading-tight max-w-xl transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t("partners.title")}
          </h2>
        </div>

        {/* showcase — ثابت بنفسجي في الاتنين */}
        <div
          className={`transition-all duration-1000 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{ background: isDark ? "#1a0d3d" : "#3F0F8B" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 min-h-[360px]">
              {/* LEFT — tab list */}
              <div className="md:col-span-2 flex flex-col p-8 gap-2 border-b md:border-b-0 md:border-r border-white/10">
                {PARTNERS.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={p.key}
                      onClick={() => {
                        setActive(i);
                        setPaused(true);
                      }}
                      className="cursor-pointer flex items-center gap-4 rounded-2xl px-4 py-3.5 text-left w-full"
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(255,255,255,0.12)"
                          : "1px solid transparent",
                        transition: "all 0.3s",
                      }}
                    >
                      <span
                        className="text-xs font-black tracking-widest w-6 flex-shrink-0"
                        style={{
                          color: isActive
                            ? cur.accentColor
                            : "rgba(255,255,255,0.2)",
                          transition: "color 0.3s",
                        }}
                      >
                        {p.number}
                      </span>
                      <span className="flex items-center justify-center flex-shrink-0 w-14">
                        <p.Logo active={isActive} />
                      </span>
                      <span
                        className="font-black text-sm flex-1"
                        style={{
                          color: isActive ? "#fff" : "rgba(255,255,255,0.3)",
                          transition: "color 0.3s",
                        }}
                      >
                        {t(`partners.items.${p.key}.name`)}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: isActive
                            ? cur.accentColor
                            : "transparent",
                          boxShadow: isActive
                            ? `0 0 6px ${cur.accentColor}`
                            : "none",
                          transition: "all 0.3s",
                        }}
                      />
                    </button>
                  );
                })}
                <div className="flex gap-1.5 mt-auto pt-6">
                  {PARTNERS.map((_, i) => (
                    <div
                      key={i}
                      className="h-0.5 flex-1 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: i === active ? "100%" : "0%",
                          background: cur.accentColor,
                          transition:
                            i === active && !paused
                              ? "width 3.5s linear"
                              : "width 0.2s",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — content */}
              <div className="md:col-span-3 relative flex flex-col justify-between p-8 md:p-12 overflow-hidden">
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl transition-all duration-700"
                  style={{ background: cur.accentGlow }}
                />
                <div
                  className="pointer-events-none absolute bottom-6 right-6 opacity-[0.06] transition-all duration-500"
                  style={{
                    transform: "scale(3.5)",
                    transformOrigin: "bottom right",
                  }}
                >
                  <cur.Logo active={true} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span
                      className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
                      style={{
                        background: `${cur.accentColor}20`,
                        color: cur.accentColor,
                        border: `1px solid ${cur.accentColor}40`,
                        transition: "all 0.4s",
                      }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-white font-black text-[10px]"
                        style={{ background: cur.accentColor }}
                      >
                        ✓
                      </span>
                      {t(`partners.items.${cur.key}.badge`)}
                    </span>
                    <h3
                      className="text-white font-black text-3xl sm:text-4xl mb-4 leading-tight"
                      style={{ transition: "all 0.4s" }}
                    >
                      {t(`partners.items.${cur.key}.name`)}
                    </h3>
                    <p
                      className="text-purple-200/70 text-sm leading-relaxed max-w-sm"
                      style={{ transition: "all 0.4s" }}
                    >
                      {t(`partners.items.${cur.key}.desc`)}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 pt-8 border-t border-white/10 mt-8">
                    <div className="ml-auto">
                      <span className="text-xs font-black tracking-widest text-white/25 uppercase">
                        {active + 1} / {PARTNERS.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
