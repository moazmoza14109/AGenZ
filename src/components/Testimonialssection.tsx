import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const TESTIMONIALS_KEYS = [
  { key: "t1", initials: "م.ع", color: "#C4B5FD" },
  { key: "t2", initials: "س.ر", color: "#A78BFA" },
  { key: "t3", initials: "ن.ح", color: "#7C3AED" },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.435.59 3.44L7 8.885l-3.09 1.622.59-3.44L2 4.632l3.455-.502z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  index,
  visible,
  isDark,
}: {
  item: (typeof TESTIMONIALS_KEYS)[0];
  index: number;
  visible: boolean;
  isDark: boolean;
}) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const isActive = hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-between rounded-2xl p-6 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        // ✅ في dark mode الخلفية الأساسية بتبقى داكنة
        background: isActive
          ? "#3F0F8B"
          : isDark
          ? "rgba(255,255,255,0.04)"
          : "#ffffff",
        boxShadow: isActive
          ? "0 20px 60px rgba(63,15,139,0.25)"
          : isDark
          ? "0 4px 24px rgba(0,0,0,0.2)"
          : "0 4px 24px rgba(63,15,139,0.07)",
        border:
          isDark && !isActive
            ? "1px solid rgba(167,139,250,0.12)"
            : "1px solid transparent",
        transitionProperty:
          "opacity, transform, background, box-shadow, border",
        transitionDuration: `0.8s, 0.8s, 0.35s, 0.35s, 0.35s`,
        transitionTimingFunction: "ease",
        transitionDelay: `${index * 100}ms, ${index * 100}ms, 0ms, 0ms, 0ms`,
      }}
    >
      <span
        className="absolute top-4 right-5 font-black select-none pointer-events-none"
        style={{
          fontSize: "80px",
          lineHeight: 1,
          color: isActive
            ? "rgba(196,181,253,0.15)"
            : isDark
            ? "rgba(167,139,250,0.08)"
            : "rgba(63,15,139,0.06)",
          transition: "color 0.35s",
        }}
      >
        "
      </span>

      <div className="mb-4">
        <Stars />
      </div>

      <p
        className="text-sm leading-relaxed mb-6 flex-1"
        style={{
          color: isActive
            ? "#E9D5FF"
            : isDark
            ? "rgba(255,255,255,0.6)"
            : "#6B7280",
          transition: "color 0.35s",
        }}
      >
        {t(`testimonials.items.${item.key}.quote`)}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
          style={{
            background: isActive ? "rgba(196,181,253,0.2)" : item.color + "22",
            color: isActive ? "#C4B5FD" : item.color,
            border: `2px solid ${
              isActive ? "rgba(196,181,253,0.4)" : item.color + "44"
            }`,
            transition: "all 0.35s",
          }}
        >
          {item.initials}
        </div>
        <div>
          <p
            className="font-black text-sm leading-tight"
            style={{
              color: isActive ? "#fff" : isDark ? "#c4b5fd" : "#3F0F8B",
              transition: "color 0.35s",
            }}
          >
            {t(`testimonials.items.${item.key}.name`)}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{
              color: isActive
                ? "#C4B5FD"
                : isDark
                ? "rgba(255,255,255,0.4)"
                : "#9CA3AF",
              transition: "color 0.35s",
            }}
          >
            {t(`testimonials.items.${item.key}.role`)}
          </p>
        </div>
        <div
          className="ml-auto text-lg"
          style={{
            color: isActive
              ? "#C4B5FD"
              : isDark
              ? "rgba(167,139,250,0.4)"
              : "#D1D5DB",
            transform: isActive ? "translate(2px,-2px)" : "translate(0,0)",
            transition: "all 0.35s",
          }}
        >
          ↗
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <section
      ref={sectionRef}
      className="relative bg-base-200 overflow-x-hidden py-24 font-sans transition-colors duration-300"
    >
      {/* blobs */}
      <div
        className="pointer-events-none absolute top-20 -right-24 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(124,58,237,0.08)" : "rgba(63,15,139,0.05)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 -left-24 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(109,40,217,0.06)" : "rgba(83,23,138,0.04)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        {/* header */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-10 h-px transition-colors duration-300"
              style={{ background: brandPrimary }}
            />
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ color: brandPrimary }}
            >
              {t("testimonials.badge")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h3
              className="text-2xl sm:text-4xl font-bold leading-tight max-w-xl transition-colors duration-300"
              style={{ color: brandPrimary }}
            >
              {t("testimonials.title")}{" "}
              <span
                className="relative inline-block"
                style={{ color: isDark ? "#a78bfa" : "#7C3AED" }}
              >
                {t("testimonials.title_em")}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  style={{ height: "6px" }}
                >
                  <path
                    d="M2 6 Q50 2 100 5 Q150 8 198 3"
                    stroke="#C4B5FD"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h3>

            {/* rating pill */}
            <div
              className={`flex items-center gap-3 rounded-2xl px-5 py-3 shadow-md self-start sm:self-auto transition-all duration-1000 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
                border: isDark ? "1px solid rgba(167,139,250,0.15)" : "none",
              }}
            >
              <div>
                <p
                  className="font-black text-2xl leading-none transition-colors duration-300"
                  style={{ color: brandPrimary }}
                >
                  5.0
                </p>
                <Stars />
              </div>
              <div className="w-px h-10 bg-purple-100" />
              <p className="text-base-content/50 text-xs leading-relaxed max-w-[100px]">
                {t("testimonials.rating_label")}
              </p>
            </div>
          </div>

          <p
            className={`text-base-content/50 text-sm leading-relaxed max-w-lg mt-4 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t("testimonials.description")}
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {TESTIMONIALS_KEYS.slice(0, 3).map((item, i) => (
            <TestimonialCard
              key={item.key}
              item={item}
              index={i}
              visible={visible}
              isDark={isDark}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_KEYS.slice(3, 5).map((item, i) => (
            <TestimonialCard
              key={item.key}
              item={item}
              index={i + 3}
              visible={visible}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
