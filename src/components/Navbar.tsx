import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const NAV_KEYS = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "portfolio", path: "/portfolio" },
  { key: "contact", path: "/contact" },
  { key: "about", path: "/about" },
] as const;

const SOCIAL_KEYS = [
  { key: "facebook", href: "https://www.facebook.com/agenzmarketingagency" },
  {
    key: "instagram",
    href: "https://www.instagram.com/agenz_marketing_agency/",
  },
  { key: "tiktok", href: "https://www.tiktok.com/@agenz46" },
] as const;

function useBreakpoint() {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return { isMd: w >= 768, isLg: w >= 1024 };
}

function DarkModeToggle() {
  const { isDark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative cursor-pointer w-14 h-7 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
        border: isDark
          ? "1px solid rgba(139,92,246,0.4)"
          : "1px solid rgba(255,255,255,0.3)",
        boxShadow: isDark
          ? "0 0 12px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <span
        className="absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        {[
          { top: "20%", left: "18%", size: "1.5px" },
          { top: "55%", left: "28%", size: "1px" },
          { top: "30%", left: "38%", size: "2px" },
          { top: "65%", left: "12%", size: "1px" },
        ].map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: 0.7,
              animation: `twinkle ${
                1.5 + i * 0.4
              }s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </span>
      <span
        className="absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500"
        style={{ opacity: isDark ? 0 : 1 }}
      >
        {[
          { top: "28%", left: "14%", w: "6px", h: "4px" },
          { top: "52%", left: "22%", w: "4px", h: "3px" },
          { top: "36%", left: "30%", w: "5px", h: "3px" },
        ].map((c, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: c.top,
              left: c.left,
              width: c.w,
              height: c.h,
              background: "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </span>
      <span
        className="absolute top-0.5 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          width: "24px",
          height: "24px",
          left: isDark ? "calc(100% - 26px)" : "2px",
          background: isDark
            ? "linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #6d28d9 100%)"
            : "linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)",
          boxShadow: isDark
            ? "0 0 8px rgba(139,92,246,0.6), 0 0 16px rgba(139,92,246,0.3)"
            : "0 0 8px rgba(251,191,36,0.7), 0 0 16px rgba(251,191,36,0.4), 0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {!isDark && (
          <span className="absolute inset-0 flex items-center justify-center">
            {[0, 45, 90, 135].map((deg) => (
              <span
                key={deg}
                className="absolute rounded-full"
                style={{
                  width: "2px",
                  height: "6px",
                  background: "rgba(255,255,255,0.6)",
                  transformOrigin: "center 14px",
                  transform: `rotate(${deg}deg)`,
                }}
              />
            ))}
          </span>
        )}
        {isDark && (
          <>
            <span
              className="absolute rounded-full"
              style={{
                width: "5px",
                height: "5px",
                background: "rgba(109,40,217,0.8)",
                top: "4px",
                left: "5px",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                width: "3px",
                height: "3px",
                background: "rgba(109,40,217,0.6)",
                bottom: "5px",
                right: "4px",
              }}
            />
          </>
        )}
      </span>
      <style>{`@keyframes twinkle { from { opacity: 0.3; transform: scale(0.8); } to { opacity: 1; transform: scale(1.2); } }`}</style>
    </button>
  );
}

function LangToggle() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const toggle = () => {
    const next = isAr ? "en" : "ar";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next); // ← احفظ اللغة
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="cursor-pointer relative flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/30 text-xs font-bold tracking-wider text-white/80 hover:text-white hover:border-white/60 transition-all duration-200 hover:scale-105 select-none"
    >
      <span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-200 opacity-0 hover:opacity-100" />
      <span
        className={`transition-all duration-200 ${
          !isAr ? "text-white" : "text-white/40"
        }`}
      >
        EN
      </span>
      <span className="text-white/30 text-[10px]">|</span>
      <span
        className={`transition-all duration-200 ${
          isAr ? "text-white" : "text-white/40"
        }`}
      >
        AR
      </span>
    </button>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMd, isLg } = useBreakpoint();
  const isRtl = i18n.language === "ar";

  const socialDefaultColor = isDark ? "#a78bfa" : "#3f0f8b";
  const socialHoverColor = isDark ? "#ffffff" : "#000000";
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? "text-white border-b-2 border-white pb-0.5"
        : "text-white/60 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold tracking-wide transition-colors duration-200 ${
      isActive ? "text-base-content" : "text-base-content/50"
    }`;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 w-full z-30 border-b border-white/10"
        style={{ background: "#3F0F8B" }}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* ✅ 3-column layout: logo | links | actions — مش absolute */}
        <div className="flex items-center justify-between px-6 md:px-16 pt-5 pb-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center select-none flex-shrink-0">
            <img
              src="/agenz.png"
              alt="Agenz Digital"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* ✅ Nav links — centered بس مش absolute، بيتقلص مع الشاشة */}
          {isMd && (
            <ul className="flex items-center gap-6 lg:gap-8 flex-1 justify-center min-w-0">
              {NAV_KEYS.map(({ key, path }) => (
                <li key={key} className="flex-shrink-0">
                  <NavLink to={path} className={linkClass}>
                    {t(`nav.${key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          {/* Actions */}
          {isMd && (
            <div
              className={`flex items-center gap-2 lg:gap-3 flex-shrink-0 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <DarkModeToggle />
              <LangToggle />
              <NavLink
                to="/contact"
                className="text-xs font-bold tracking-wide px-4 lg:px-5 py-2 rounded-full text-white border border-white/40 transition-all duration-300 hover:bg-white hover:text-[#3F0F8B] hover:scale-105 whitespace-nowrap"
              >
                {t("nav.cta")}
              </NavLink>
            </div>
          )}

          {/* Mobile actions */}
          {!isMd && (
            <div className="flex items-center gap-3 flex-shrink-0">
              <DarkModeToggle />
              <LangToggle />
              <button
                className="flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 block rounded bg-white transition-transform duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 block rounded bg-white transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 block rounded bg-white transition-transform duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile dropdown */}
      {!isMd && (
        <div
          className={`fixed top-[68px] left-0 right-0 z-40 bg-base-100 shadow-xl overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <ul
            className={`flex flex-col px-8 py-5 gap-5 ${
              isRtl ? "items-end" : "items-start"
            }`}
          >
            {NAV_KEYS.map(({ key, path }) => (
              <li key={key}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {t(`nav.${key}`)}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block text-xs font-bold tracking-wide px-5 py-2 rounded-full text-white"
                style={{
                  background: "linear-gradient(135deg, #3F0F8B, #53178A)",
                }}
              >
                {t("nav.cta")}
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Social Bar */}
      {isLg && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5">
          {SOCIAL_KEYS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="font-bold flex items-center gap-1.5 text-[14px] tracking-widest uppercase transition-colors duration-200"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: socialDefaultColor,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = socialHoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = socialDefaultColor)
              }
            >
              <span className="w-3 h-px bg-current inline-block mb-1" />
              {key}
            </a>
          ))}
          <div
            className="w-px h-16 mt-2"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </div>
      )}

      {/* Go to top */}
      {isMd && (
        <div
          className="fixed right-10 bottom-5 -translate-y-1/3 z-30 flex flex-col items-center gap-2 transition-colors duration-300"
          style={{ color: isDark ? "#c4b5fd" : "#3F0F8B" }}
        >
          <svg width="20" height="20" viewBox="0 0 14 20" fill="none">
            <line
              x1="7"
              y1="18"
              x2="7"
              y2="2"
              stroke={isDark ? "rgba(196,181,253,0.4)" : "rgba(63,15,139,0.35)"}
              strokeWidth="1.5"
            />
            <path
              d="M1 8L7 2L13 8"
              stroke={isDark ? "rgba(196,181,253,0.4)" : "rgba(63,15,139,0.35)"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-[15px] font-bold tracking-widest uppercase transition-colors duration-300"
            style={{
              writingMode: "vertical-rl",
              color: isDark ? "#c4b5fd" : "#3F0F8B",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = isDark ? "#ffffff" : "#53178A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isDark ? "#c4b5fd" : "#3F0F8B")
            }
          >
            Go Top
          </button>
        </div>
      )}
    </>
  );
}
