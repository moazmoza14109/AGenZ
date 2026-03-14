// ── Two-Level Filter ────────────────────────────────────────────
import { BRANDS } from "../data/data";
import { useTranslation } from "react-i18next";

type Category = "branding" | "sales" | "engagement" | "awareness";

const CATEGORIES: { id: Category; icon: string }[] = [
  {
    id: "branding",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    id: "sales",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  },
  {
    id: "engagement",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    id: "awareness",
    icon: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46",
  },
];

const CATEGORY_BRANDS: Record<Category, string[]> = {
  branding: ["line-wear", "salasil-alhudaa"],
  sales: ["elgebaly-pharmacy", "golden-tech", "dr-ahmed-essam-zidan", "el-aamal-exhibition"],
  engagement: ["dr-hussain-abo-saleh", "flash-tech"],
  awareness: ["dr-ahmed-essam-zidan", "dr-hussain-abo-saleh", "tiba-new-house", "tz-technology-zone", "dr-mohamed-wasef-aglan", "elgebaly-pharmacy"],
};
export default function TwoLevelFilter({
  activeCategory,
  activeBrand,
  onCategoryChange,
  onSloganChange,
  onBrandChange,
  isDark,
  activeSlogan,
}: {
  activeCategory: Category | null;
  activeBrand: string | null;
  activeSlogan: string | null;           // ← جديد
  onCategoryChange: (c: Category | null) => void;
  onBrandChange: (b: string | null) => void;
  onSloganChange: (s: string | null) => void; // ← جديد
  isDark: boolean;
}) {
  const { t } = useTranslation();
  const brandKey = (id: string) => `portfolio.brands.${id.replace(/-/g, "_")}`;

  const visibleBrandIds = activeCategory ? CATEGORY_BRANDS[activeCategory] : [];
  const visibleBrands = visibleBrandIds
    .map((id) => BRANDS.find((b) => b.id === id))
    .filter(Boolean) as typeof BRANDS;

  const catColor: Record<Category, string> = {
    branding: "#6d28d9",
    sales: "#0ea5e9",
    engagement: "#f59e0b",
    awareness: "#10b981",
  };

const activeBrandData = activeBrand ? visibleBrands.find((b) => b.id === activeBrand) : null;
const activeSlogans = activeBrandData?.slogans?.[activeCategory!] ?? [];

  return (
    <div className="mb-10">

      {/* ── Level 1: Categories ── */}
      <div className="flex flex-wrap gap-3 mb-5">

        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const c = catColor[cat.id];
          return (
            <button
              key={cat.id}
              onClick={() => {
                if (isActive) { onCategoryChange(null); onBrandChange(null); }
                else { onCategoryChange(cat.id); onBrandChange(null); }
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
              style={{
                background: isActive ? c : isDark ? "rgba(255,255,255,0.06)" : "#f3f4f6",
                color: isActive ? "#fff" : isDark ? "#c4b5fd" : "#6b7280",
                boxShadow: isActive ? `0 4px 20px ${c}55` : "none",
                border: isActive ? "none" : isDark ? "1px solid rgba(167,139,250,0.2)" : "1px solid #e5e7eb",
                transform: isActive ? "scale(1.05)" : "scale(1)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
              </svg>
              {t(`portfolio.filter.${cat.id}`)}
            </button>
          );
        })}
      </div>

      {/* ── Level 2: Brands ── */}
      {activeCategory && (
        <div
          className="flex flex-wrap gap-4 px-2 py-3 rounded-2xl transition-all duration-300"
          style={{
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(63,15,139,0.03)",
            border: isDark ? "1px solid rgba(167,139,250,0.1)" : "1px solid rgba(63,15,139,0.08)",
            animation: "fadeSlideIn 0.35s ease",
          }}
        >
          {/* Brand buttons */}
          {visibleBrands.map((brand) => {
            const isActive = activeBrand === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => onBrandChange(isActive ? null : brand.id)}
                className="flex flex-col items-center gap-1.5"
              >
                <div
                  className="w-14 h-14 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    border: isActive ? `2.5px solid ${catColor[activeCategory]}` : isDark ? "2.5px solid rgba(167,139,250,0.15)" : "2.5px solid #e5e7eb",
                    boxShadow: isActive ? `0 4px 18px ${catColor[activeCategory]}55` : "none",
                    transform: isActive ? "scale(1.12)" : "scale(1)",
                    background: isDark ? "rgba(255,255,255,0.06)" : "#f9fafb",
                    padding: "3px",
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={t(brandKey(brand.id))}
                    className="w-full h-full object-contain rounded-full"
                    style={{
                      filter: isActive ? "none" : isDark ? "grayscale(0.3) brightness(0.85)" : "grayscale(0.2)",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium text-center whitespace-normal max-w-[72px] leading-tight transition-colors duration-300"
                  style={{ color: isActive ? catColor[activeCategory] : isDark ? "rgba(255,255,255,0.35)" : "#9ca3af" }}
                >
                  {t(brandKey(brand.id))}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── Level 3: Slogans Row ── */}
       {activeSlogans.length > 0 && (
  <div className="flex flex-wrap gap-2 pt-2 pb-1 px-1">
    {activeSlogans.map((slogan) => {
      const isActive = activeSlogan === slogan;
      return (
        <button
          key={slogan}
          onClick={() => onSloganChange(isActive ? null : slogan)}
          className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border"
          style={{
            background: isActive
              ? isDark ? "#7c3aed" : "#3F0F8B"
              : isDark ? "rgba(167,139,250,0.08)" : "#f5f3ff",
            color: isActive
              ? "#fff"
              : isDark ? "#c4b5fd" : "#3F0F8B",
            borderColor: isActive
              ? "transparent"
              : isDark ? "rgba(167,139,250,0.2)" : "#ddd6fe",
            transform: isActive ? "scale(1.05)" : "scale(1)",
          }}
        >
          {slogan}
        </button>
      );
    })}
  </div>
)}

      <style>{`@keyframes fadeSlideIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}