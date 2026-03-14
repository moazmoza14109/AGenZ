import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ContactSidebar from "./ContactSidebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const SERVICE = {
  titleKey: "social_media.title",
  introKey: "social_media.intro",
  paragraphs: "social_media.paragraphs",
};

function SocialStack() {
  const platforms = [
    { color: "#E1306C", icon: "📸", label: "Instagram" },
    { color: "#1877F2", icon: "👍", label: "Facebook" },
    { color: "#FF0000", icon: "▶️", label: "YouTube" },
    { color: "#000000", icon: "🎵", label: "TikTok" },
    { color: "#0A66C2", icon: "💼", label: "LinkedIn" },
    { color: "#25D366", icon: "✉️", label: "WhatsApp" },
  ];
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: "280px" }}
    >
      {platforms.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-2xl shadow-xl flex flex-col items-center justify-center text-white font-bold text-xs"
          style={{
            background: p.color,
            width: "80px",
            height: "100px",
            transform: `rotate(${(i - 2.5) * 8}deg) translateX(${
              (i - 2.5) * 22
            }px) translateY(${Math.abs(i - 2.5) * 6}px)`,
            zIndex: i,
            transition: "transform 0.3s",
          }}
        >
          <span className="text-2xl mb-1">{p.icon}</span>
          <span className="text-[10px] opacity-80">{p.label}</span>
        </div>
      ))}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white rounded-2xl px-5 py-3 shadow-2xl z-20 text-center"
        style={{ minWidth: "160px", background: "#0a0014" }}
      >
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-1"
          style={{ color: "#C4B5FD" }}
        >
          MAIL SENT
        </p>
        <p className="text-3xl font-black" style={{ color: "#C4B5FD" }}>
          190,723 <span className="text-lg">+</span>
        </p>
      </div>
    </div>
  );
}

export default function SocialMediaPage() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const paragraphs = t(SERVICE.paragraphs, { returnObjects: true }) as string[];
  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-base-100 transition-colors duration-300">
      <Navbar />
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-20 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-10">
          <h1
            className="text-3xl sm:text-4xl font-black transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t(SERVICE.titleKey)}
          </h1>
          <div className="mt-3 flex justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth={2}
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 min-w-0">
            <p className="text-base-content/60 text-sm leading-relaxed mb-8">
              {t(SERVICE.introKey)}
            </p>
            <div className="flex justify-center mb-10">
              <SocialStack />
            </div>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base-content/60 text-sm leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <div
              className="mt-10 border rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors duration-300"
              style={{
                background: isDark
                  ? "rgba(124,58,237,0.08)"
                  : "linear-gradient(135deg, #faf8ff, #f3f0ff)",
                borderColor: isDark ? "rgba(167,139,250,0.2)" : "#e9e0ff",
              }}
            >
              <div>
                <p
                  className="text-xs font-bold tracking-[0.25em] uppercase mb-1 transition-colors duration-300"
                  style={{ color: brandSecondary }}
                >
                  {t("service_cta_badge")}
                </p>
                <h3
                  className="text-2xl font-black transition-colors duration-300"
                  style={{ color: brandPrimary }}
                >
                  {t("social_media.cta_title")}
                </h3>
              </div>
              <Link
                to="/contact"
                className="text-white text-sm font-bold px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                    : "linear-gradient(135deg, #3F0F8B, #53178A)",
                }}
              >
                {t("service_cta_btn")}
              </Link>
            </div>
          </div>
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}
