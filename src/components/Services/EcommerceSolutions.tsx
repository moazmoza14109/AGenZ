import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ContactSidebar from "./ContactSidebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const SERVICE = {
  mainImage:
    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=75",
  ],
  titleKey: "ecommerce.title",
  descriptionKey: "ecommerce.description",
  servicesLabelKey: "ecommerce.services_label",
  servicesListKey: "ecommerce.services_list",
};

export default function ServicePage() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const { isDark } = useTheme();
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

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
              {t(SERVICE.descriptionKey)}
            </p>

            <div className="rounded-2xl overflow-hidden mb-4 shadow-sm">
              <img
                src={SERVICE.mainImage}
                alt={SERVICE.titleKey}
                className={`w-full object-cover ${
                  isDark ? "brightness-75" : ""
                }`}
                style={{ maxHeight: "340px" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              {SERVICE.gallery.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={src}
                    alt=""
                    className={`w-full object-cover ${
                      isDark ? "brightness-75" : ""
                    }`}
                    style={{ height: "160px" }}
                  />
                </div>
              ))}
            </div>

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
                  {t("ecommerce.cta_title")}
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
          <ContactSidebar service={t(SERVICE.titleKey)} />
        </div>
      </div>
    </div>
  );
}
