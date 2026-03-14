import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ContactSidebar from "./ContactSidebar";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

const SERVICE = {
  titleKey: "Branding",
  paragraphsKey: "branding.paragraphs",
  servicesLabelKey: "branding.services_label",
  servicesListKey: "branding.services_list",
  closingParagraphsKey: "branding.closing_paragraphs",
};

export default function ServicePageV4() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const paragraphs = t(SERVICE.paragraphsKey, {
    returnObjects: true,
  }) as string[];
  const servicesList = t(SERVICE.servicesListKey, {
    returnObjects: true,
  }) as string[];
  const closingParagraphs = t(SERVICE.closingParagraphsKey, {
    returnObjects: true,
  }) as string[];

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
            <div className="space-y-4 mb-6">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base-content/60 text-sm leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mb-6">
              <p
                className="font-bold text-sm mb-4 transition-colors duration-300"
                style={{ color: brandPrimary }}
              >
                {t(SERVICE.servicesLabelKey)}
              </p>
              <ul className="space-y-3">
                {servicesList.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-base-content/60"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: brandSecondary }}
                    />
                    <span>
                      {item.includes(":") ? (
                        <>
                          <span
                            className="font-bold transition-colors duration-300"
                            style={{ color: brandPrimary }}
                          >
                            {item.split(":")[0]}:
                          </span>
                          {item.slice(item.indexOf(":") + 1)}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 mb-10">
              {closingParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base-content/60 text-sm leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div
              className="border rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors duration-300"
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
                  {t("branding.cta_title")}
                </h3>
              </div>
              <a
                href="/contact"
                className="text-white text-sm font-bold px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                    : "linear-gradient(135deg, #3F0F8B, #53178A)",
                }}
              >
                {t("service_cta_btn")}
              </a>
            </div>
          </div>
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}
