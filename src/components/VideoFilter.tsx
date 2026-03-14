// ── Video Filter ───────────────────────────────────────────────
import { useTranslation } from "react-i18next";
import { type VidCategory } from "../data/data";

const VIDEO_CATEGORIES: { id: VidCategory; label: string }[] = [
  { id: "Branding", label: "portfolio.filter.branding" },
  { id: "Motion", label: "portfolio.filter.motion" },
  { id: "Reels", label: "portfolio.filter.reels" },
  { id: "Teaser", label: "portfolio.filter.teaser" },
  { id: "UGC", label: "portfolio.filter.ugc" },
  { id: "Voice Over", label: "portfolio.filter.voice_over" },
  { id: "Podcast", label: "portfolio.filter.podcast" },
  { id: "bromo", label: "portfolio.filter.bromo" },
];
export default function VideoFilter({
  active,
  onChange,
  isDark,
}: {
  active: VidCategory | null;
  onChange: (c: VidCategory | null) => void;
  isDark: boolean;
}) {
  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";
  const { t } = useTranslation();
  return (
    <div className="mb-10 flex flex-wrap gap-3">

      {VIDEO_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(isActive ? null : cat.id)}
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
            style={{
              background: isActive
                ? `linear-gradient(135deg, ${brandPrimary}, ${brandSecondary})`
                : isDark
                ? "rgba(255,255,255,0.06)"
                : "#f3f4f6",
              color: isActive ? "#fff" : isDark ? "#c4b5fd" : "#6b7280",
              boxShadow: isActive
                ? `0 4px 20px ${
                    isDark ? "rgba(124,58,237,0.4)" : "rgba(63,15,139,0.25)"
                  }`
                : "none",
              border: isActive
                ? "none"
                : isDark
                ? "1px solid rgba(167,139,250,0.2)"
                : "1px solid #e5e7eb",
              transform: isActive ? "scale(1.05)" : "scale(1)",
            }}
          >
            {t(cat.label)}
          </button>
        );
      })}
    </div>
  );
}
