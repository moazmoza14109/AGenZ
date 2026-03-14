// ── Video Card ─────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import { ASPECT_PAD, type VideoItem } from "../data/data";

export default function VideoCard({
  item,
  onClick,
  isDark,
}: {
  item: VideoItem;
  onClick: () => void;
  isDark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        paddingTop: ASPECT_PAD[item.aspect],
        boxShadow: hovered
          ? "0 20px 60px rgba(63,15,139,0.25)"
          : isDark
          ? "0 2px 8px rgba(0,0,0,0.3)"
          : "0 2px 8px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "none",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
    >
      {!inView && (
        <div
          className={`absolute inset-0 animate-pulse ${
            isDark
              ? "bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40"
              : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
          }`}
        />
      )}
      {inView &&
        (item.src.includes("youtube.com") ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.src.split("v=")[1]}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <video
            src={item.src}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "rgba(63,15,139,0.35)"
            : isDark
            ? "rgba(0,0,0,0.25)"
            : "rgba(0,0,0,0.1)",
          transition: "background 0.3s",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{
            background: hovered
              ? "linear-gradient(135deg,#3F0F8B,#53178A)"
              : "rgba(255,255,255,0.9)",
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "all 0.3s",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 ml-1"
            style={{ color: hovered ? "#fff" : "#3F0F8B" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute top-2 left-2">
        <span
          className="text-xs font-bold px-2 py-1 rounded-full"
          style={{
            background: "rgba(63,15,139,0.75)",
            color: "#fff",
            backdropFilter: "blur(4px)",
          }}
        >
          {item.category}
        </span>
      </div>
    </div>
  );
}
