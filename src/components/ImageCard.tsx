import { useEffect, useRef, useState } from "react";
import { type ImageItem } from "../data/data";
// ── Image Card ─────────────────────────────────────────────────
export default function ImageCard({
  item,
  onClick,
  isDark,
}: {
  item: ImageItem;
  onClick: () => void;
  isDark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const iconColor = isDark ? "#c4b5fd" : "#3F0F8B";

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl cursor-pointer transition-colors duration-300"
      style={{
        background: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
        border: isDark ? "1px solid rgba(167,139,250,0.12)" : "none",
        boxShadow: hovered
          ? "0 16px 48px rgba(63,15,139,0.2)"
          : isDark
          ? "none"
          : "0 2px 12px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "box-shadow 0.3s, transform 0.3s, background 0.3s",
      }}
    >
      <div
        className="relative overflow-hidden rounded-t-2xl"
        style={{
          paddingTop: "100%",
          background: isDark ? "#1a0d3d" : "#f3f4f6",
        }}
      >
        {!inView && (
          <div
            className={`absolute inset-0 animate-pulse ${
              isDark
                ? "bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-purple-900/30"
                : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
            }`}
          />
        )}
        {inView && !hasError && (
          <img
            src={item.src}
            alt={item.brandId}
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.04)" : "none",
              transition: "transform 0.6s ease",
            }}
          />
        )}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <span className="text-xs text-gray-400">فشل التحميل</span>
          </div>
        )}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: hovered ? "rgba(63,15,139,0.2)" : "transparent",
            opacity: hovered ? 1 : 0,
            transition: "all 0.3s",
          }}
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3F0F8B"
              strokeWidth={2.5}
              className="w-4 h-4"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              <path strokeLinecap="round" d="M8 11h6M11 8v6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-3 py-2.5 flex items-center gap-3">
        {[
          "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
          "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
          "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
        ].map((d, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColor}
            strokeWidth={1.8}
            className="w-5 h-5"
            style={{ transition: "stroke 0.3s" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
          </svg>
        ))}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth={1.8}
          className="w-5 h-5 ml-auto"
          style={{ transition: "stroke 0.3s" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </div>
    </div>
  );
}
