import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/15 hover:border-white hover:scale-110 transition-all duration-200">
      {children}
    </div>
  );
}

function Footer() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const delays = ["", "delay-100", "delay-200", "delay-300"];

  const LINKS = [
    { key: "link_contact", href: "/contact" },
    { key: "link_services", href: "/services" },
    { key: "link_about", href: "/about" },
  ];

  return (
    <footer ref={ref} style={{ background: "#0a0014" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo */}
          <div
            className={`transition-all duration-700 ${delays[0]} ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            <div className="mb-4">
              <img
                src="/agenz.png"
                alt="Agenz Digital"
                className="h-10 w-auto object-contain"
              />
              <p className="text-white/40 text-[10px] mt-2 italic">
                {t("footer.tagline")}
              </p>
            </div>
          </div>

          {/* Office */}
          <div
            className={`transition-all duration-700 ${delays[1]} ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">
              {t("footer.office_title")}
            </h4>
            <div className="space-y-5 text-white/50 text-sm leading-relaxed">
              <div>
                <span className="text-white/70 font-medium">
                  {t("footer.office_country")}
                </span>
                <br />
                {t("footer.office_address")}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 ${delays[2]} ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">
              {t("footer.links_title")}
            </h4>
            <ul className="space-y-3">
              {LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    to={href}
                    className="text-white/50 text-sm transition-colors duration-200"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C4B5FD")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Keep in Touch */}
          <div
            className={`transition-all duration-700 ${delays[3]} ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">
              {t("footer.touch_title")}
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/agenzmarketingagency"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </SocialIcon>
              </a>
              <a
                href="https://www.instagram.com/agenz_marketing_agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="white"
                      stroke="none"
                    />
                  </svg>
                </SocialIcon>
              </a>
              <a
                href="https://www.tiktok.com/@agenz46"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 8.29a7.77 7.77 0 01-4.42-1.38 7.86 7.86 0 01-2.9-3.83h-3.1v12.91a3.09 3.09 0 11-3.09-3.09c.24 0 .47.03.69.08V9.72a6.18 6.18 0 00-.69-.04A6.18 6.18 0 1014.66 16V9.9A11 11 0 0021 11.6V8.29z" />
                  </svg>
                </SocialIcon>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-white/50 text-sm">EG: 00201551985963</p>
              <p className="text-white/50 text-sm">EG: 00201060318598</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">{t("footer.copyright")}</p>
          <div className="text-white/25 text-xs">
              Created with ❤️ by {" "}
              <a className="underline" href="https://www.facebook.com/agenzmarketingagency" target="_blank">
                Agenz
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default function FooterSection() {
  return <Footer />;
}
