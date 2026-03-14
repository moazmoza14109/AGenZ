import { useEffect } from "react";
import { ASPECT_PAD, type ImageItem } from "../data/data";
// ── Image Lightbox ────────────────────────────────────────────
export default function ImageLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: ImageItem;
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="cursor-pointer absolute top-5 right-5 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 z-10"
      >
        ✕
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 text-xl z-10"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 text-xl z-10"
      >
        →
      </button>
      <div
        className="w-full max-w-sm rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative"
          style={{ paddingTop: ASPECT_PAD[item.aspect] }}
        >
          <img
            src={item.src}
            alt={item.brandId}
            className="absolute inset-0 w-full h-108"
          />
        </div>
      </div>
    </div>
  );
}
