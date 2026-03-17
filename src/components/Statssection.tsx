import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) {
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

function useCounter(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutQuart(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = setTimeout(() => requestAnimationFrame(step), 300);
    return () => clearTimeout(id);
  }, [active, target, duration]);
  return value;
}

const PersonIcon = () => (
  <svg
    viewBox="0 0 56 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle
      cx="28"
      cy="14"
      r="10"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M14 52 C14 36 42 36 42 52"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M25 36 L28 50 L31 36"
      stroke="#3F0F8B"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M10 58 C10 44 46 44 46 58"
      stroke="#53178A"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    viewBox="0 0 56 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle
      cx="28"
      cy="32"
      r="22"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
    />
    <circle
      cx="28"
      cy="32"
      r="14"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
    />
    <circle
      cx="28"
      cy="32"
      r="6"
      stroke="#53178A"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="36"
      y1="14"
      x2="28"
      y2="30"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 10 L40 12 L36 20 Z"
      stroke="#53178A"
      strokeWidth="2"
      fill="#53178A"
      strokeLinejoin="round"
    />
  </svg>
);

const TrophyIcon = () => (
  <svg
    viewBox="0 0 56 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M16 10 H40 L36 34 C36 38 32 42 28 42 C24 42 20 38 20 34 Z"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M16 14 C10 14 8 20 8 24 C8 28 12 30 16 28"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M40 14 C46 14 48 20 48 24 C48 28 44 30 40 28"
      stroke="#3F0F8B"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="42"
      x2="28"
      y2="52"
      stroke="#53178A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect
      x="18"
      y="52"
      width="20"
      height="5"
      rx="2.5"
      stroke="#53178A"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
);

interface StatCardProps {
  icon: React.ReactNode;
  target: number;
  suffix?: string;
  label: string;
  active: boolean;
  delay: string;
  inView: boolean;
  isDark: boolean;
}

function StatCard({
  icon,
  target,
  suffix = "",
  label,
  active,
  delay,
  inView,
  isDark,
}: StatCardProps) {
  const count = useCounter(target, active);
  return (
    <div
      className={`group flex flex-col items-center gap-3 transition-all duration-700 ease-out ${delay} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* ✅ الأيقونة — فاتحة شوية في dark */}
      <div
        className={`w-14 h-16 mb-2 group-hover:scale-110 transition-all duration-300 ${
          isDark
            ? "opacity-80 brightness-150"
            : "opacity-60 group-hover:opacity-100"
        }`}
      >
        {icon}
      </div>

      {/* ✅ الرقم — بنفسجي فاتح في dark */}
      <div
        className="leading-none tracking-tight transition-colors duration-300"
        style={{
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          fontSize: "clamp(2rem,5vw,4rem)",
          color: isDark ? "#c4b5fd" : "#3F0F8B",
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>

      {/* ✅ الليبل */}
      <p className="text-base-content/50 text-sm leading-relaxed max-w-[180px] text-center transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="bg-base-100 py-24 px-6 overflow-hidden font-sans transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ✅ العنوان */}
          <h2
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-base-content leading-tight transition-colors duration-300"
            style={{ fontFamily: "'Noto Kufi Arabic', sans-serif" }}
          >
            {t("stats.title")}
            <br />
            {/* ✅ الـ em — بنفسجي فاتح في dark */}
            <em
              className="not-italic transition-colors duration-300"
              style={{ color: isDark ? "#c4b5fd" : "#3F0F8B" }}
            >
              {t("stats.title_em")}
            </em>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 mb-20">
          <StatCard
            icon={<PersonIcon />}
            target={22}
            label={t("stats.people_label")}
            active={inView}
            delay="delay-100"
            inView={inView}
            isDark={isDark}
          />
          <StatCard
            icon={<TargetIcon />}
            target={500}
            suffix="+"
            label={t("stats.projects_label")}
            active={inView}
            delay="delay-200"
            inView={inView}
            isDark={isDark}
          />
          <StatCard
            icon={<TrophyIcon />}
            target={36}
            label={t("stats.brands_label")}
            active={inView}
            delay="delay-300"
            inView={inView}
            isDark={isDark}
          />
        </div>

        {/* ✅ زرار CTA */}
        <Link
          to="/contact"
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
          {t("stats.cta")}
        </Link>
      </div>
    </section>
  );
}
