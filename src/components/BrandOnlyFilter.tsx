// ── Brand-Only Filter (for Branding tab) ──────────────────────
import { BRANDS } from "../data/data";
import { useTranslation } from "react-i18next";
export default function BrandOnlyFilter({
  activeBrand,
  onBrandChange,
  brands,
  isDark,
}: {
  activeBrand: string | null;
  onBrandChange: (id: string | null) => void;
  brands: typeof BRANDS;
  isDark: boolean;
}) {
  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";
  const { t } = useTranslation();
  return (
    <div
      className="mb-10 flex flex-wrap gap-4 px-2 py-3 rounded-2xl"
      style={{
        background: isDark ? "rgba(255,255,255,0.03)" : "rgba(63,15,139,0.03)",
        border: isDark
          ? "1px solid rgba(167,139,250,0.1)"
          : "1px solid rgba(63,15,139,0.08)",
      }}
    >
      {/* All */}
      <button
        onClick={() => onBrandChange(null)}
        className="flex flex-col items-center gap-1.5"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background:
              activeBrand === null
                ? `linear-gradient(135deg, ${brandPrimary}, ${brandSecondary})`
                : isDark
                ? "rgba(255,255,255,0.07)"
                : "#f3f4f6",
            border:
              activeBrand === null
                ? "2.5px solid transparent"
                : isDark
                ? "2.5px solid rgba(167,139,250,0.2)"
                : "2.5px solid #e5e7eb",
            boxShadow:
              activeBrand === null
                ? `0 4px 18px ${
                    isDark ? "rgba(124,58,237,0.4)" : "rgba(63,15,139,0.25)"
                  }`
                : "none",
            transform: activeBrand === null ? "scale(1.1)" : "scale(1)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={
              activeBrand === null ? "#fff" : isDark ? "#c4b5fd" : "#9ca3af"
            }
            strokeWidth={2}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>
        <span
          className="text-xs font-semibold"
          style={{
            color:
              activeBrand === null
                ? brandPrimary
                : isDark
                ? "rgba(255,255,255,0.35)"
                : "#9ca3af",
          }}
        >
          {t("portfolio.filter.all")}
        </span>
      </button>
      {/* Brand logos */}
      {brands.map((brand) => {
        const isActive = activeBrand === brand.id;
        return (
          <div key={brand.id} className="flex flex-col items-center gap-1.5">
            <button
              onClick={() => onBrandChange(isActive ? null : brand.id)}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-14 h-14 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  border: isActive
                    ? `2.5px solid ${brandPrimary}`
                    : isDark
                    ? "2.5px solid rgba(167,139,250,0.15)"
                    : "2.5px solid #e5e7eb",
                  boxShadow: isActive
                    ? `0 4px 18px ${
                        isDark ? "rgba(124,58,237,0.4)" : "rgba(63,15,139,0.25)"
                      }`
                    : "none",
                  transform: isActive ? "scale(1.12)" : "scale(1)",
                  background: isDark ? "rgba(255,255,255,0.06)" : "#f9fafb",
                  padding: "3px",
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain rounded-full"
                  style={{
                    filter: isActive
                      ? "none"
                      : isDark
                      ? "grayscale(0.3) brightness(0.85)"
                      : "grayscale(0.2)",
                    transition: "filter 0.3s",
                  }}
                />
              </div>
              <span
                className="text-xs font-medium text-center whitespace-normal max-w-[72px] leading-tight transition-colors duration-300"
                style={{
                  color: isActive
                    ? brandPrimary
                    : isDark
                    ? "rgba(255,255,255,0.35)"
                    : "#9ca3af",
                }}
              >
                {brand.name}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
