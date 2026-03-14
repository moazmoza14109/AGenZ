import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ContactSidebar from "./ContactSidebar";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

const SERVICE = {
  titleKey: "web_design.title",
  introKey: "web_design.intro",
  mainImage:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
  bodyParagraphsKey: "web_design.body_paragraphs",
  servicesLabelKey: "web_design.services_label",
  servicesListKey: "web_design.services_list",
};

export default function WebDesignDevelopment() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const bodyParagraphs = t(SERVICE.bodyParagraphsKey, {
    returnObjects: true,
  }) as string[];
  const servicesList = t(SERVICE.servicesListKey, {
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
        <div className="text-center mb-8">
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
            <p className="text-base-content/60 text-sm leading-relaxed mb-6">
              {t(SERVICE.introKey)}
            </p>

            <div className="rounded-2xl overflow-hidden shadow-sm mb-2">
              <img
                src={SERVICE.mainImage}
                alt={t(SERVICE.titleKey)}
                className={`w-full object-cover ${
                  isDark ? "brightness-75" : ""
                }`}
                style={{ maxHeight: "340px" }}
              />
            </div>

            <div dir="auto" className="space-y-4 mb-8">
              {bodyParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base-content/60 text-sm leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {servicesList.length > 0 && (
              <>
                <div
                  className="h-px mb-6 transition-colors duration-300"
                  style={{
                    background: isDark ? "rgba(167,139,250,0.15)" : "#e5e7eb",
                  }}
                />
                <p
                  className="font-bold text-sm mb-4 transition-colors duration-300"
                  style={{ color: brandPrimary }}
                >
                  {t(SERVICE.servicesLabelKey)}
                </p>
                <ul className="space-y-3 mb-10">
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
              </>
            )}

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
                  {t("web_design.cta_title")}
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
                Contact Us
              </a>
            </div>
          </div>
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}
