import { useEffect } from "react";
import { ASPECT_PAD, type VideoItem } from "../data/data";

// ── Video Lightbox ─────────────────────────────────────────────
export default function VideoLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: VideoItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onPrev, onNext]);

  const maxW =
    item.aspect === "reel"
      ? "360px"
      : item.aspect === "square"
      ? "560px"
      : "900px";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 z-10"
      >
        ✕
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 text-xl z-10"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 text-xl z-10"
      >
        →
      </button>
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ maxWidth: maxW }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full"
          style={{ paddingTop: ASPECT_PAD[item.aspect] }}
        >
          -{" "}
          {item.src.includes("youtube.com") ? (
            <iframe
              width="812"
              height="457"
              className="absolute inset-0 w-full h-full"
              src={item.src}
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
              autoPlay
              playsInline
              preload="metadata"
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
